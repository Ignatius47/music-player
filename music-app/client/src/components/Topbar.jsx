import axios from 'axios'
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export default function Topbar({ onSearchResults }) {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchMusic = async (e) => {
    e?.preventDefault?.()
    if (!query) return
    setLoading(true)
    setError('')
    try {
      const res = await axios.get(`/api/search?q=${encodeURIComponent(query)}`)
      const results = res.data.data || res.data
      onSearchResults(results)
    } catch (err) {
      console.error(err)
      setError('Failed to fetch results')
      onSearchResults([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <header className="p-4 bg-gray-800 flex items-center gap-4">
      <form onSubmit={searchMusic} className="flex items-center flex-1 max-w-3xl">
        <label className="sr-only">Search</label>
        <div className="flex items-center w-full">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search songs or artists..."
            className="flex-1 px-3 py-2 rounded-l-md text-black"
          />
          <button
            onClick={searchMusic}
            className="px-4 py-2 bg-green-500 rounded-r-md hover:bg-green-600"
            type="button"
          >
            {loading ? '...' : <FiSearch />}
          </button>
        </div>
      </form>

      <div className="hidden md:flex items-center gap-4 text-sm text-gray-300">
        <span>Desktop</span>
      </div>

      {error && <div className="text-red-400 text-sm">{error}</div>}
    </header>
  )
}
