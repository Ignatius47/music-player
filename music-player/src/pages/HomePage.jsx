import { useEffect, useState } from "react";
import { Deezer } from "../api/deezer";

export default function HomePage() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    Deezer.getChartTracks(20).then((data) => {
      setTracks(data?.data || []);
    }).catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Top Tracks</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tracks.map((t) => (
          <div key={t.id} className="bg-gray-800 rounded-xl p-3 hover:bg-gray-700">
            <img
              src={t.album?.cover_medium}
              alt={t.title}
              className="w-32 h-32 rounded-lg object-cover mx-auto"
            />
            <p className="mt-2 text-sm font-semibold">{t.title}</p>
            <p className="text-xs text-gray-400">{t.artist?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}