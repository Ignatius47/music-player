export default function MusicPlayer({ track }) {
  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 flex items-center gap-4">
      <img
        src={track.album.cover_small}
        alt={track.title}
        className="w-12 h-12 rounded-md"
      />
      <div className="flex-1">
        <p className="font-semibold">{track.title}</p>
        <p className="text-sm text-gray-300">{track.artist.name}</p>
      </div>
      <audio controls autoPlay src={track.preview} className="h-8"></audio>
    </div>
  );
}