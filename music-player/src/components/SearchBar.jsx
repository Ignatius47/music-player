function SearchBar() {
  return (
    <div className="flex items-center bg-neutral-900 rounded-xl p-3 mb-4">
      <span className="text-xl mr-2">🔍</span>
      <input
        type="text"
        placeholder="Search for Songs"
        className="bg-transparent outline-none w-full text-gray-300"
      />
    </div>
  );
}

export default SearchBar;