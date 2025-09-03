import { useState } from "react";
import { Deezer } from "../api/deezer";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    const data = await searchTracks(query);
    setResults(data);
  }

  return (
    <div className="p-6">
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          placeholder="Search for songs or artists..."
          className="w-full p-2 rounded bg-gray-800 text-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {results.map((track) => (
          <div
            key={track.id}
            className="bg-gray-800 rounded-xl p-3 flex flex-col items-center hover:bg-gray-700"
          >
            <img
              src={track.album.cover_medium}
              alt={track.title}
              className="w-32 h-32 rounded-lg object-cover"
            />
            <p className="mt-2 text-sm font-semibold">{track.title}</p>
            <p className="text-xs text-gray-400">{track.artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}