import { useState, useRef } from 'react';
import { useApp } from '@/store/app-context';
import { listingSections } from '@/data/listings';

export function FeelingLucky() {
  const { viewListing } = useApp();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleClick = () => {
    const allListings = listingSections.flatMap((section) => section.listings);
    const randomListing = allListings[Math.floor(Math.random() * allListings.length)];
    viewListing(randomListing.id);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        className="relative flex items-center gap-2 px-5 py-2.5 text-white font-semibold rounded-full overflow-hidden transition-all duration-200 group animate-wiggle"
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
        <img src="/clover_icon.png" alt="" className="relative z-10 w-6 h-6" />
        <span className="relative z-10">Feeling Lucky</span>
      </button>
      <p className="text-xs text-airbnb-gray">See a listing we think you'll love!</p>
    </div>
  );
}
