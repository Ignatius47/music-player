import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiHome, FiMusic, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function Sidebar() {
  const [open, setOpen] = useState(true)

  return (
    <aside
      className={`bg-black p-4 transition-all duration-200 ${
        open ? 'w-64' : 'w-16'
      } flex flex-col`}
    >
      <div className="flex items-center justify-between">
        <h1 className={`text-xl font-bold ${open ? 'block' : 'hidden'}`}>
          Music Player
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded hover:bg-gray-800"
          aria-label="Toggle sidebar"
        >
          {open ? <FiChevronLeft /> : <FiChevronRight />}
        </button>
      </div>

      <nav className="mt-6 flex-1">
        <ul className="space-y-3">
          <li>
            <Link
              to="/"
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer"
            >
              <FiHome />
              <span className={`${open ? 'block' : 'hidden'}`}>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/library"
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-800 cursor-pointer"
            >
              <FiMusic />
              <span className={`${open ? 'block' : 'hidden'}`}>Library</span>
            </Link>
          </li>
        </ul>
      </nav>

      <footer className="text-xs text-gray-400">
        <p className={`${open ? 'block' : 'hidden'}`}>Built with Deezer API</p>
      </footer>
    </aside>
  )
}