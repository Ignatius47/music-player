import SearchBar from "./components/SearchBar";
import SongList from "./components/SongList";
import PlayerBar from "./components/PlayerBar";
import NowPlaying from "./components/NowPlaying";

function App() {
  return (
    <div className="h-screen bg-neutral-900 text-white flex p-4 space-x-4">
      {/* Left Side - Search + Songs */}
      <div className="flex flex-col flex-1 bg-neutral-800 rounded-2xl p-4">
        <SearchBar />
        <SongList />
        <PlayerBar />
      </div>

      {/* Right Side - Now Playing */}
      <div className="w-1/2 bg-neutral-800 rounded-2xl p-6">
        <NowPlaying />
      </div>
    </div>
  );
}

export default App;