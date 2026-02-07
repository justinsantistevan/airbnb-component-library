import { useState } from 'react';
import { cn } from '@/lib/utils';

const tabs = [
  'Popular',
  'Arts & culture',
  'Beach',
  'Mountains',
  'Outdoors',
  'Things to do',
  'Travel tips & inspiration',
  'Airbnb-friendly apartments',
];

const destinations = [
  { name: 'Quepos', type: 'Villa rentals' },
  { name: 'Nuevo Vallarta', type: 'Condo rentals' },
  { name: 'Palm Springs', type: 'Cabin rentals' },
  { name: 'Tarpon Springs', type: 'House rentals' },
  { name: 'Key Largo', type: 'Apartment rentals' },
  { name: 'Banff', type: 'Condo rentals' },
  { name: 'Telluride', type: 'Cabin rentals' },
  { name: 'Grindelwald', type: 'Vacation rentals' },
  { name: 'Cape Town', type: 'Cabin rentals' },
  { name: 'Princeville', type: 'Vacation rentals' },
  { name: 'Page', type: 'Apartment rentals' },
  { name: 'Trinidad', type: 'Beachfront rentals' },
  { name: 'Stowe', type: 'House rentals' },
  { name: 'Dana Point', type: 'House rentals' },
  { name: 'Kanab', type: 'Apartment rentals' },
  { name: 'Joshua Tree', type: 'House rentals' },
  { name: 'Rosarito', type: 'Condo rentals' },
];

export function InspirationSection() {
  const [activeTab, setActiveTab] = useState('Outdoors');

  return (
    <div className="py-12 px-6 xl:px-20 lg:px-10 max-w-[2520px] mx-auto">
      <h2 className="text-[22px] font-semibold text-airbnb-dark mb-6">
        Inspiration for future getaways
      </h2>

      <div className="mb-8">
        <div className="flex gap-8 overflow-x-auto border-b border-airbnb-light-gray" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'text-base whitespace-nowrap pb-3 -mb-px border-b-2 transition-colors relative',
                activeTab === tab
                  ? 'border-airbnb-dark text-airbnb-dark font-medium'
                  : 'border-transparent text-airbnb-gray hover:text-airbnb-dark'
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-4">
        {destinations.map((dest) => (
          <button
            key={dest.name}
            className="text-left group"
          >
            <div className="text-[15px] font-medium text-airbnb-dark group-hover:underline">
              {dest.name}
            </div>
            <div className="text-sm text-airbnb-gray mt-0.5">
              {dest.type}
            </div>
          </button>
        ))}
      </div>

      <button className="mt-6 text-base font-semibold text-airbnb-dark hover:underline flex items-center gap-1">
        Show more
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}
