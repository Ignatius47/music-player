import TrackList from '../components/TrackList'

export default function Home({ tracks, onPlayTrack }) {
  return (
    <div className="p-4">
      <TrackList tracks={tracks} onPlayTrack={onPlayTrack} />
    </div>
  )
}