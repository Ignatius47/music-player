export default function ProgressBar({ value = 0, onChange }) {
  return (
    <input
      type="range"
      min={0}
      max={100}
      value={value}
      onChange={(e) => onChange?.(Number(e.target.value))}
      className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
    />
  );
}