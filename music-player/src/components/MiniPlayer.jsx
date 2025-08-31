import { Play, Pause } from "lucide-react";

export default function MiniPlayer({ track, isPlaying, setIsPlaying, onClick }) {
  return (
    <div
      className="mt-4 bg-black rounded-xl flex items-center p-3 cursor-pointer"
      onClick={onClick}
    >
      <img src={track.cover} alt="cover" className="w-12 h-12 rounded-lg object-cover" />
      <div className="ml-3 flex-1">
        <p className="text-sm font-semibold">{track.title}</p>
        <p className="text-xs text-gray-400">{track.artist}</p>
      </div>
      <div
        className="bg-green-500 p-2 rounded-full"
        onClick={(e) => {
          e.stopPropagation();
          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </div>
    </div>
  );
}