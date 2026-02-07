import { Share, Heart } from 'lucide-react';

interface ListingHeaderProps {
  title: string;
}

export function ListingHeader({ title }: ListingHeaderProps) {
  return (
    <div className="flex items-start justify-between mb-6">
      <h1 className="text-2xl font-semibold pr-4">{title}</h1>
      <div className="flex items-center gap-4 shrink-0">
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Share className="w-4 h-4" />
          <span className="text-sm font-medium underline">Share</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Heart className="w-4 h-4" />
          <span className="text-sm font-medium underline">Save</span>
        </button>
      </div>
    </div>
  );
}
