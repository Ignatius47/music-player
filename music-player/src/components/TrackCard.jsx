export default function TrackCard({ track, onPlay }) {
  return (
    <div
      className="bg-gray-700 p-3 rounded-lg flex items-center gap-4 hover:bg-gray-600 cursor-pointer"
      onClick={() => onPlay(track)}
    >
      <img
        src={track.album.cover_small}
        alt={track.title}
        className="w-12 h-12 rounded-md"
      />
      <div>
        <p className="font-semibold">{track.title}</p>
        <p className="text-sm text-gray-300">{track.artist.name}</p>
      </div>
    </div>
  );
}