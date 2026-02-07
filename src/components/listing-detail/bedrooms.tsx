import type { Bedroom } from '@/data/types';

interface BedroomsProps {
  bedrooms: Bedroom[];
}

export function Bedrooms({ bedrooms }: BedroomsProps) {
  return (
    <div className="py-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Where you'll sleep</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {bedrooms.map((bedroom, index) => (
          <div key={index} className="shrink-0 w-[280px]">
            <div className="rounded-xl overflow-hidden mb-3">
              <img
                src={bedroom.image}
                alt={bedroom.name}
                className="w-full h-[200px] object-cover"
              />
            </div>
            <h3 className="font-semibold">{bedroom.name}</h3>
            <p className="text-sm text-gray-600">{bedroom.beds}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
