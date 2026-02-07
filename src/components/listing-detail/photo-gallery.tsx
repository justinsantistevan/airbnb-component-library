import { Grid2X2 } from 'lucide-react';

interface PhotoGalleryProps {
  images: string[];
  onShowAll?: () => void;
}

export function PhotoGallery({ images, onShowAll }: PhotoGalleryProps) {
  const displayImages = images.slice(0, 5);

  return (
    <div className="relative grid grid-cols-4 grid-rows-2 gap-2 h-[400px] rounded-xl overflow-hidden">
      <div className="col-span-2 row-span-2">
        <img
          src={displayImages[0]}
          alt="Main listing photo"
          className="w-full h-full object-cover hover:brightness-90 transition-all cursor-pointer"
        />
      </div>
      {displayImages.slice(1, 5).map((image, index) => (
        <div key={index} className="col-span-1 row-span-1">
          <img
            src={image}
            alt={`Listing photo ${index + 2}`}
            className="w-full h-full object-cover hover:brightness-90 transition-all cursor-pointer"
          />
        </div>
      ))}
      <button
        onClick={onShowAll}
        className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white border border-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
      >
        <Grid2X2 className="w-4 h-4" />
        Show all photos
      </button>
    </div>
  );
}
