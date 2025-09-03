const BASE = import.meta.env.VITE_API_BASE || "http://localhost:3001/api";

async function request(path) {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`Deezer error: ${res.status}`);
  return res.json();
}

export const Deezer = {
  // Charts
  getChartTracks: (limit = 20) => request(`/chart/0/tracks?limit=${limit}`),
  getChartArtists: (limit = 20) => request(`/chart/0/artists?limit=${limit}`),
  getChartAlbums: (limit = 20) => request(`/chart/0/albums?limit=${limit}`),

  // Search
  searchAll: (q, limit = 25) => request(`/search?q=${encodeURIComponent(q)}&limit=${limit}`),
  searchArtists: (q, limit = 18) =>
    request(`/search/artist?q=${encodeURIComponent(q)}&limit=${limit}`),
  searchAlbums: (q, limit = 18) =>
    request(`/search/album?q=${encodeURIComponent(q)}&limit=${limit}`),

  // Entities
  getArtist: (id) => request(`/artist/${id}`),
  getArtistTop: (id, limit = 20) => request(`/artist/${id}/top?limit=${limit}`),
  getArtistAlbums: (id, limit = 30) => request(`/artist/${id}/albums?limit=${limit}`),
  getAlbum: (id) => request(`/album/${id}`),
  getPlaylist: (id) => request(`/playlist/${id}`),
};