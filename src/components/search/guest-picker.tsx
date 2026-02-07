import { Minus, Plus } from 'lucide-react';
import { useApp } from '@/store/app-context';

interface GuestRow {
  label: string;
  description: string;
  descriptionLink?: boolean;
  field: 'adults' | 'children' | 'infants' | 'pets';
  min: number;
  max: number;
}

const rows: GuestRow[] = [
  { label: 'Adults', description: 'Ages 13 or above', field: 'adults', min: 0, max: 16 },
  { label: 'Children', description: 'Ages 2 – 12', field: 'children', min: 0, max: 15 },
  { label: 'Infants', description: 'Under 2', field: 'infants', min: 0, max: 5 },
  { label: 'Pets', description: 'Bringing a service animal?', descriptionLink: true, field: 'pets', min: 0, max: 5 },
];

export function GuestPicker() {
  const { search, updateSearch } = useApp();

  return (
    <div className="bg-white rounded-3xl shadow-lg ring-1 ring-black/5 w-[400px]">
      <div className="px-8 py-8 space-y-0">
        {rows.map((row, i) => {
          const count = search[row.field];
          return (
            <div key={row.field}>
              <div className="flex items-center justify-between py-6">
                <div>
                  <div className="text-lg font-medium text-airbnb-dark">{row.label}</div>
                  <div className={row.descriptionLink ? 'text-sm text-airbnb-gray underline' : 'text-sm text-airbnb-gray'}>
                    {row.description}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => updateSearch({ [row.field]: Math.max(row.min, count - 1) })}
                    disabled={count <= row.min}
                    className="w-9 h-9 rounded-full border border-airbnb-light-gray flex items-center justify-center text-airbnb-gray hover:border-airbnb-dark hover:text-airbnb-dark transition-colors disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:border-airbnb-light-gray disabled:hover:text-airbnb-gray"
                  >
                    <Minus className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                  <span className="w-5 text-center text-base text-airbnb-dark tabular-nums">{count}</span>
                  <button
                    onClick={() => updateSearch({ [row.field]: Math.min(row.max, count + 1) })}
                    disabled={count >= row.max}
                    className="w-9 h-9 rounded-full border border-airbnb-light-gray flex items-center justify-center text-airbnb-gray hover:border-airbnb-dark hover:text-airbnb-dark transition-colors disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:border-airbnb-light-gray disabled:hover:text-airbnb-gray"
                  >
                    <Plus className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
              {i < rows.length - 1 && <div className="border-t border-airbnb-light-gray" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
