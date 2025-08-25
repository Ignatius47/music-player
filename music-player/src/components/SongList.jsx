function SongList() {
  const songs = [
    { title: "Song Title - Lorem Ipsum", artist: "Artist - Lorem Ipsum" },
    { title: "Song Title - Lorem Ipsum", artist: "Artist - Lorem Ipsum" },
    { title: "Song Title - Lorem Ipsum", artist: "Artist - Lorem Ipsum" },
  ];

  return (
    <div className="flex-1 overflow-y-auto space-y-3">
      {songs.map((song, index) => (
        <div
          key={index}
          className="flex items-center bg-neutral-700 rounded-xl p-3 space-x-3"
        >
          <div className="bg-gray-500 w-14 h-14 flex items-center justify-center rounded text-xs">
            Album Cover
          </div>
          <div>
            <h4 className="font-semibold">{song.title}</h4>
            <p className="text-gray-400 text-sm">{song.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongList;