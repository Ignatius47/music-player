export default function TrackList({ tracks, onPlayTrack }) {
  return (
    <div className="p-4 h-[calc(100vh-220px)] overflow-y-auto">
      {(!tracks || tracks.length === 0) ? (
        <div className="text-gray-400">Search to find music. Try "Drake" or "Adele".</div>
      ) : (
        <ul className="space-y-3">
          {tracks.map((track, idx) => (
            <li
              key={track.id}
              onClick={() => onPlayTrack(track, idx)}
              className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer"
            >
              <img src={track.album.cover_small} alt={track.title} className="w-14 h-14 rounded" />
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate">{track.title}</div>
                <div className="text-sm text-gray-400 truncate">{track.artist.name}</div>
              </div>
              <div className="text-sm text-gray-400">{millisToTime(track.duration * 1000)}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function millisToTime(ms) {
  if (!ms) return ''
  const total = Math.floor(ms / 1000)
  const minutes = Math.floor(total / 60)
  const seconds = total % 60
  return minutes + ':' + (seconds < 10 ? '0' + seconds : seconds)
}
