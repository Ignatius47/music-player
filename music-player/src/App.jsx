import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/shared/Sidebar.jsx";
import Header from "./components/shared/Header.jsx";
import NowPlayingBar from "./components/shared/NowPlayingBar.jsx";
import HomePage from "./pages/HomePage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import LibraryPage from "./pages/LibraryPage.jsx";
import AlbumPage from "./pages/AlbumPage.jsx";
import ArtistPage from "./pages/ArtistPage.jsx";


export default function App() {
return (
<div className="flex h-screen w-full overflow-hidden">
<Sidebar />
<main className="flex-1 flex flex-col">
<Header />
<div className="flex-1 overflow-y-auto bg-surface/80 p-4 md:p-6">
<Routes>
<Route path="/" element={<Navigate to="/home" replace />} />
<Route path="/home" element={<HomePage />} />
<Route path="/search" element={<SearchPage />} />
<Route path="/library" element={<LibraryPage />} />
<Route path="/album/:id" element={<AlbumPage />} />
<Route path="/artist/:id" element={<ArtistPage />} />
<Route path="*" element={<Navigate to="/home" replace />} />
</Routes>
</div>
<NowPlayingBar />
</main>
</div>
);
}