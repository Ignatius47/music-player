import { useEffect, useRef } from "react";
import { useMusic } from "../context/MusicContext.js";


export default function usePlayer() {
const audioRef = useRef(null);
const { current, isPlaying, setIsPlaying, volume } = useMusic();


useEffect(() => {
if (!audioRef.current) audioRef.current = new Audio();
}, []);


useEffect(() => {
if (!audioRef.current) return;
audioRef.current.volume = volume;
}, [volume]);


useEffect(() => {
if (!audioRef.current) return;
if (current?.preview) {
audioRef.current.src = current.preview;
if (isPlaying) audioRef.current.play().catch(() => {});
}
}, [current]);


useEffect(() => {
if (!audioRef.current) return;
if (isPlaying) audioRef.current.play().catch(() => {});
else audioRef.current.pause();
}, [isPlaying]);


return {
audioRef,
play: () => setIsPlaying(true),
pause: () => setIsPlaying(false),
toggle: () => setIsPlaying((p) => !p)
};
}