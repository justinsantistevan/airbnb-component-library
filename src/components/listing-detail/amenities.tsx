import {
  Flower2,
  UtensilsCrossed,
  Wifi,
  Laptop,
  Car,
  Bath,
  Tv,
  Plug,
  WashingMachine,
  Camera,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Flower2,
  UtensilsCrossed,
  Wifi,
  Laptop,
  Car,
  Bath,
  Tv,
  Plug,
  WashingMachine,
  Camera,
};

interface Amenity {
  icon: string;
  name: string;
}

interface AmenitiesProps {
  amenities: Amenity[];
  totalAmenities: number;
}

export function Amenities({ amenities, totalAmenities }: AmenitiesProps) {
  return (
    <div className="py-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => {
          const Icon = iconMap[amenity.icon] || Wifi;
          return (
            <div key={index} className="flex items-center gap-4">
              <Icon className="w-6 h-6" />
              <span>{amenity.name}</span>
            </div>
          );
        })}
      </div>
      <button className="mt-6 px-6 py-3 border border-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Show all {totalAmenities} amenities
      </button>
    </div>
  );
}
