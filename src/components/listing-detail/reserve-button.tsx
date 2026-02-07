import { useState, useRef } from 'react';

export function ReserveButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-3 text-white font-semibold rounded-lg overflow-hidden transition-all duration-200 group"
      style={{
        background: `linear-gradient(90deg, #E61E4D 0%, #D70466 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #FF385C 0%, transparent 50%), linear-gradient(90deg, #BD1E59 0%, #D70466 50%, #E61E4D 100%)`,
        }}
      />
      <span className="relative z-10">Reserve</span>
    </button>
  );
}
