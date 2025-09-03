import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Player from './components/Player'

function Library() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Library</h2>
      <p className="text-gray-400">No saved tracks yet.</p>
    </div>
  )
}

export default function App() {
  const [tracks, setTracks] = useState([])
  const [queue, setQueue] = useState([])
  const [currentIndex, setCurrentIndex] = useState(-1)

  useEffect(() => {
    if (queue.length > 0 && currentIndex === -1) setCurrentIndex(0)
  }, [queue])

  const currentTrack = queue[currentIndex] || null

  const handlePlayTrack = (track, index) => {
    setQueue(tracks)
    setCurrentIndex(index)
  }

  const handleSearchResults = (results) => {
    setTracks(results || [])
  }

  return (
    <Router>
      <div className="min-h-screen flex bg-gray-900 text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar onSearchResults={handleSearchResults} />
          <main className="flex-1 overflow-hidden">
            <Routes>
              <Route
                path="/"
                element={<Home tracks={tracks} onPlayTrack={handlePlayTrack} />}
              />
              <Route path="/library" element={<Library />} />
            </Routes>
          </main>
          <Player
            track={currentTrack}
            onNext={() => {
              if (currentIndex < queue.length - 1) setCurrentIndex(currentIndex + 1)
            }}
            onPrev={() => {
              if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
            }}
          />
        </div>
      </div>
    </Router>
  )
}