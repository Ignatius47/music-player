function PlayerBar() {
  return (
    <div className="flex items-center bg-black rounded-2xl p-3 mt-4">
      {/* Left - Album */}
      <div className="flex items-center space-x-3 flex-1">
        <div className="bg-gray-500 w-12 h-12 flex items-center justify-center rounded text-[10px]">
          Album Cover
        </div>
        <div>
          <h4 className="text-sm font-semibold">Song Title - Lorem Ipsum</h4>
          <p className="text-xs text-gray-400">Artist - Lorem Ipsum</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-3">
        <button>⏮️</button>
        <button>▶️</button>
        <button>⏭️</button>
      </div>
    </div>
  );
}

export default PlayerBar;