import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Search } from "lucide-react";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [search, setSearch] = useState("");
  const [screen, setScreen] = useState("home"); // home, search, player

  // placeholder tracks
  const tracks = [
    {
      id: 1,
      title: "Save Your Tears",
      artist: "The Weeknd",
      cover:
        "https://e-cdns-images.dzcdn.net/images/cover/3b9f07db77a841a1b4c45d2f5ec94ee0/250x250-000000-80-0-0.jpg",
    },
    {
      id: 2,
      title: "Levitating",
      artist: "Dua Lipa",
      cover:
        "https://e-cdns-images.dzcdn.net/images/cover/b00526fceb024f4e9fbf2b28e4c17287/250x250-000000-80-0-0.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col p-4">
      {/* Home Screen */}
      {screen === "home" && (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex-1 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-3xl font-bold mb-4">Welcome to Wave</h1>
          <p className="text-gray-400 mb-8">Find and play your favorite songs</p>
          <button
            onClick={() => setScreen("search")}
            className="bg-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-600"
          >
            Start Listening
          </button>

          {/* Featured playlists/albums */}
          <div className="mt-12 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="bg-gray-800 rounded-xl p-3 flex flex-col items-center cursor-pointer hover:bg-gray-700"
                onClick={() => setScreen("search")}
              >
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover"
                />
                <p className="mt-2 text-sm font-semibold">{track.title}</p>
                <p className="text-xs text-gray-400">{track.artist}</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Search Screen */}
      {screen === "search" && (
        <div className="flex-1 flex flex-col bg-gray-800 rounded-2xl p-4 shadow-lg">
          {/* Search bar */}
          <div className="flex items-center bg-gray-700 rounded-xl px-3 py-2 mb-4">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search for Songs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-2 bg-transparent outline-none flex-1 text-sm"
            />
          </div>

          {/* Track list */}
          <div className="flex-1 overflow-y-auto space-y-3">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-xl"
                onClick={() => setIsFullscreen(true)}
              >
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">{track.title}</p>
                  <p className="text-gray-400 text-xs">{track.artist}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mini player bottom */}
          <div
            className="mt-4 bg-black rounded-xl flex items-center p-3 cursor-pointer"
            onClick={() => setIsFullscreen(true)}
          >
            <img
              src={tracks[0].cover}
              alt="cover"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="ml-3 flex-1">
              <p className="text-sm font-semibold">{tracks[0].title}</p>
              <p className="text-xs text-gray-400">{tracks[0].artist}</p>
            </div>
            <div
              className="bg-green-500 p-2 rounded-full"
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(!isPlaying);
              }}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Player */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            key="fullscreen"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 p-6 z-50"
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>
            <img
              src={tracks[0].cover}
              alt="cover"
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-lg object-cover"
            />
            <div className="mt-6 text-center">
              <h2 className="text-xl font-bold">{tracks[0].title}</h2>
              <p className="text-gray-400">{tracks[0].artist}</p>
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
        )}
      </AnimatePresence>
    </div>
  );
}