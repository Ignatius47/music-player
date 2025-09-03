import { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaVolumeUp,
  FaRandom,
  FaRedo,
  FaHeart,
  FaListUl,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Player({ track, onNext, onPrev }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(30);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (track && audioRef.current) {
      audioRef.current.src = track.preview;
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    } else {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    }
  }, [track]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 30);
    };
    const onEnded = () => {
      setIsPlaying(false);
      if (onNext) onNext();
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, [audioRef, onNext]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const seek = (e) => {
    if (!audioRef.current) return;
    const val = Number(e.target.value);
    audioRef.current.currentTime = val;
    setProgress(val);
  };

  return (
    <>
      {/* Compact bar */}
      <div
        className="border-t border-gray-700 bg-gray-900 p-3 cursor-pointer"
        onClick={(e) => {
          // expand only when clicking outside controls/inputs
          const tag = e.target.tagName;
          if (tag !== "BUTTON" && tag !== "INPUT" && tag !== "svg" && tag !== "path") {
            setIsFullScreen(true);
          }
        }}
      >
        {track ? (
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <img src={track.album.cover_small} alt="" className="w-12 h-12 rounded" />
              <div className="min-w-0">
                <div className="font-semibold truncate">{track.title}</div>
                <div className="text-sm text-gray-400 truncate">{track.artist.name}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={onPrev} aria-label="prev"><FaStepBackward /></button>
              <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} aria-label="play-pause" className="px-3">
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button onClick={onNext} aria-label="next"><FaStepForward /></button>
            </div>

            <div className="flex-1 px-4">
              <input
                type="range"
                min="0"
                max={duration || 30}
                step="0.1"
                value={progress}
                onChange={(e) => { e.stopPropagation(); seek(e); }}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>{formatTime(progress)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 min-w-[160px]">
              <FaVolumeUp />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => { e.stopPropagation(); setVolume(Number(e.target.value)); }}
              />
            </div>

            <audio ref={audioRef} />
          </div>
        ) : (
          <div className="text-gray-400">Select a track to play</div>
        )}
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {isFullScreen && track && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center p-6 z-50"
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.28 }}
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsFullScreen(false)}
            >
              <FaTimes size={24} />
            </button>

            <img
              src={track.album.cover_big}
              alt=""
              className="w-64 h-64 rounded-xl mb-6 shadow-lg"
            />
            <div className="text-white text-center mb-6">
              <div className="text-xl font-bold">{track.title}</div>
              <div className="text-gray-400">{track.artist.name}</div>
            </div>

            <div className="w-full max-w-xl">
              <input
                type="range"
                min="0"
                max={duration || 30}
                step="0.1"
                value={progress}
                onChange={(e) => { e.stopPropagation(); seek(e); }}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>{formatTime(progress)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-6">
              <button className="text-gray-400"><FaRandom /></button>
              <button onClick={onPrev}><FaStepBackward size={28} /></button>
              <button
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                className="bg-green-500 text-white p-4 rounded-full"
              >
                {isPlaying ? <FaPause size={28} /> : <FaPlay size={28} />}
              </button>
              <button onClick={onNext}><FaStepForward size={28} /></button>
              <button className="text-gray-400"><FaRedo /></button>
            </div>

            {/* NEW: Fullscreen Volume + extra actions */}
            <div className="flex items-center justify-between w-full max-w-xl mt-6 text-gray-300">
              <div className="flex items-center gap-4">
                <button className="text-gray-300"><FaHeart /></button>
                <button className="text-gray-300"><FaListUl /></button>
              </div>

              <div className="flex items-center gap-3 w-1/2">
                <FaVolumeUp />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => { e.stopPropagation(); setVolume(Number(e.target.value)); }}
                  className="w-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function formatTime(sec) {
  if (!sec && sec !== 0) return "--:--";
  const s = Math.floor(sec);
  const m = Math.floor(s / 60);
  const r = s % 60;
  return m + ":" + (r < 10 ? "0" + r : r);
}
