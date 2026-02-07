import { Navigation, Building2, Mountain, Landmark, Palmtree, TreePine } from 'lucide-react';
import { destinations } from '@/data/destinations';
import { useApp } from '@/store/app-context';
import type { FC } from 'react';
import type { LucideProps } from 'lucide-react';

const iconMap: Record<number, FC<LucideProps>> = {
  0: Navigation,
  1: Building2,
  2: Mountain,
  3: Landmark,
  4: Building2,
  5: Palmtree,
  6: TreePine,
};

interface Props {
  onSelect: (name: string) => void;
}

export function DestinationSuggestions({ onSelect }: Props) {
  const { updateSearch } = useApp();

  return (
    <div className="bg-white rounded-3xl shadow-lg ring-1 ring-black/5 w-[500px] max-h-[480px] overflow-y-auto">
      <div className="px-8 pt-6 pb-2">
        <h3 className="text-sm font-semibold text-airbnb-dark mb-4">Suggested destinations</h3>
        <div className="space-y-1">
          {destinations.map((dest, i) => {
            const Icon = iconMap[i] ?? Building2;
            return (
              <button
                key={dest.name}
                onClick={() => {
                  updateSearch({ location: dest.name });
                  onSelect(dest.name);
                }}
                className="flex items-center gap-4 w-full p-3 -mx-3 rounded-2xl hover:bg-airbnb-pale transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: dest.iconBg }}
                >
                  <Icon className="w-6 h-6" style={{ color: dest.iconColor }} strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <div className="text-[15px] font-medium text-airbnb-dark">{dest.name}</div>
                  <div className="text-sm text-airbnb-gray">{dest.description}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
