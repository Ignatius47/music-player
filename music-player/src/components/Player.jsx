function Player() {
  return (
    <div className="h-20 bg-gray-900 border-t border-gray-800 flex items-center justify-between px-4">
      {/* Left - Song Info */}
      <div className="flex items-center space-x-3">
        <img
          src="https://via.placeholder.com/50"
          alt="Album"
          className="w-12 h-12 rounded"
        />
        <div>
          <h4 className="text-sm font-semibold">Song Title</h4>
          <p className="text-xs text-gray-400">Artist Name</p>
        </div>
      </div>

      {/* Middle - Controls */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-300 hover:text-white">⏮️</button>
        <button className="text-2xl">▶️</button>
        <button className="text-gray-300 hover:text-white">⏭️</button>
      </div>

      {/* Right - Volume */}
      <div className="flex items-center space-x-2 w-40">
        <span>🔊</span>
        <input type="range" className="w-full" />
      </div>
    </div>
  );
}

export default Player;