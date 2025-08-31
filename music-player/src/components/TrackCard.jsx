export default function TrackCard({ track, onClick }) {
  return (
    <div
      className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-xl"
      onClick={onClick}
    >
      <img src={track.cover} alt={track.title} className="w-14 h-14 rounded-lg object-cover" />
      <div>
        <p className="font-semibold text-sm">{track.title}</p>
        <p className="text-gray-400 text-xs">{track.artist}</p>
      </div>
    </div>
  );
}