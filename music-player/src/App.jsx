// src/App.jsx
import { useState } from "react";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [tracks, setTracks] = useState([]);

  const fetchTracks = async (query) => {
    try {
      const res = await fetch(`https://api.deezer.com/search?q=${query}`);
      const data = await res.json();
      setTracks(data.data);
    } catch (err) {
      console.error("Error fetching tracks:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <h1 className="text-2xl font-bold p-4">🎵 Music Player</h1>
      <SearchBar onSearch={fetchTracks} />
      <div className="p-4">
        {tracks.map((track) => (
          <div key={track.id} className="bg-gray-700 p-2 rounded-md mb-2">
            <img src={track.album.cover_small} alt={track.title} />
            <p>{track.title}</p>
            <p>{track.artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}