import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import TrackCard from "../components/TrackCard";
import MiniPlayer from "../components/MiniPlayer";

export default function Search({ tracks, onSelectTrack, isPlaying, setIsPlaying }) {
  const [search, setSearch] = useState("");

  const filtered = tracks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col bg-gray-800 rounded-2xl p-4 shadow-lg">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-700 rounded-xl px-3 py-2 mb-4">
        <SearchIcon size={20} className="text-gray-400" />
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
        {filtered.map((track) => (
          <TrackCard key={track.id} track={track} onClick={() => onSelectTrack(track)} />
        ))}
      </div>

      {/* Mini Player */}
      <MiniPlayer
        track={tracks[0]}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        onClick={() => onSelectTrack(tracks[0])}
      />
    </div>
  );
}