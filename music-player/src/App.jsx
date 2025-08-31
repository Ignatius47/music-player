import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Player from "./pages/Player";

export default function App() {
  const [screen, setScreen] = useState("home"); // home | search | player
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

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
      {screen === "home" && (
        <Home
          tracks={tracks}
          goToSearch={() => setScreen("search")}
        />
      )}

      {screen === "search" && (
        <Search
          tracks={tracks}
          onSelectTrack={(track) => {
            setCurrentTrack(track);
            setScreen("player");
          }}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}

      <AnimatePresence>
        {screen === "player" && currentTrack && (
          <Player
            track={currentTrack}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            goBack={() => setScreen("search")}
          />
        )}
      </AnimatePresence>
    </div>
  );
}