export default function Button({ className = "", ...props }) {
return (
<button
className={`rounded-full px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm transition ${className}`}
{...props}
/>
);
}