import { motion } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

export default function Player({ track, isPlaying, setIsPlaying, goBack }) {
  return (
    <motion.div
      key="player"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 p-6 z-50"
    >
      <button
        onClick={goBack}
        className="absolute top-3 right-3 text-gray-400 hover:text-white"
      >
        ✕
      </button>

      <img
        src={track.cover}
        alt={track.title}
        className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-lg object-cover"
      />
      <div className="mt-6 text-center">
        <h2 className="text-xl font-bold">{track.title}</h2>
        <p className="text-gray-400">{track.artist}</p>
      </div>

      {/* Progress bar */}
      <div className="w-full mt-6">
        <div className="flex justify-between text-xs text-gray-400">
          <span>2:28</span>
          <span>-0:34</span>
        </div>
        <input type="range" min="0" max="100" className="w-full mt-2" />
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-6 mt-6">
        <SkipBack size={28} className="cursor-pointer" />
        <div
          className="bg-green-500 p-4 rounded-full cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <Pause size={28} /> : <Play size={28} />}
        </div>
        <SkipForward size={28} className="cursor-pointer" />
      </div>
    </motion.div>
  );
}