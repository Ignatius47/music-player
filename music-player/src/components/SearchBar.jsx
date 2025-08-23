import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 p-4 bg-gray-900 rounded-lg"
    >
      <input
        type="text"
        placeholder="Search for songs, artists..."
        className="flex-1 p-2 rounded-md text-black"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600"
      >
        Search
      </button>
    </form>
  );
}