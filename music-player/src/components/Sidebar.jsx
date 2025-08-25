function Sidebar() {
  return (
    <div className="w-60 bg-black p-6 space-y-6 border-r border-gray-800">
      <h1 className="text-2xl font-bold mb-6 text-green-500">Spotify Clone</h1>

      <nav className="space-y-4">
        <a href="#" className="block hover:text-green-400">🏠 Home</a>
        <a href="#" className="block hover:text-green-400">🔍 Search</a>
        <a href="#" className="block hover:text-green-400">📚 Your Library</a>
      </nav>
    </div>
  );
}

export default Sidebar;