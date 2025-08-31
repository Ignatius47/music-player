export default function Home({ tracks, goToSearch }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Wave</h1>
      <p className="text-gray-400 mb-8">Find and play your favorite songs</p>
      <button
        onClick={goToSearch}
        className="bg-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-600"
      >
        Start Listening
      </button>

      <div className="mt-12 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="bg-gray-800 rounded-xl p-3 flex flex-col items-center cursor-pointer hover:bg-gray-700"
            onClick={goToSearch}
          >
            <img
              src={track.cover}
              alt={track.title}
              className="w-24 h-24 md:w-32 md:h-32 rounded-lg object-cover"
            />
            <p className="mt-2 text-sm font-semibold">{track.title}</p>
            <p className="text-xs text-gray-400">{track.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
}