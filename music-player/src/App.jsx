import { useState } from "react";
import SearchBar from "./components/SearchBar";
import TrackCard from "./components/TrackCard";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  const fetchTracks = async (query) => {
    try {
      const res = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`
      );
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
      <div className="p-4 grid gap-2">
        {tracks.length === 0 && <p>No songs yet. Try searching.</p>}
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} onPlay={setCurrentTrack} />
        ))}
      </div>
      <MusicPlayer track={currentTrack} />
    </div>
  );
}