function Topbar() {
  return (
    <div className="h-14 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
      <input
        type="text"
        placeholder="Search music..."
        className="bg-gray-800 text-white px-3 py-1 rounded w-1/3"
      />
      <button className="bg-green-500 text-black px-4 py-1 rounded">
        Login
      </button>
    </div>
  );
}

export default Topbar;