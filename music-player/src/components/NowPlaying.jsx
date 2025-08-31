function NowPlaying() {
  return (
    <div className="flex flex-col h-full">
      {/* Album Cover */}
      <div className="flex-1 bg-gray-500 rounded-2xl flex items-center justify-center text-xl font-bold mb-4">
        Album Cover
      </div>

      {/* Song Info */}
      <div>
        <h3 className="font-semibold">Song Title - Lorem Ipsum</h3>
        <p className="text-gray-400 text-sm">Artist - Lorem Ipsum</p>
      </div>

      {/* Progress Bar */}
      <div className="mt-2">
        <input type="range" className="w-full" />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>2:28</span>
          <span>-0:34</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center space-x-6 mt-4">
        <button className="text-2xl">⏮️</button>
        <button className="text-2xl">⏯️</button>
        <button className="text-2xl">⏭️</button>
      </div>
    </div>
  );
}

export default NowPlaying;