import { Star } from 'lucide-react';

interface ListingInfoProps {
  subtitle: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  rating: number;
  reviewCount: number;
  isGuestFavorite: boolean;
}

export function ListingInfo({
  subtitle,
  guests,
  bedrooms,
  beds,
  baths,
  rating,
  reviewCount,
  isGuestFavorite,
}: ListingInfoProps) {
  return (
    <div className="pb-6 border-b border-gray-200">
      <h2 className="text-xl font-semibold mb-1">{subtitle}</h2>
      <p className="text-gray-600">
        {guests} guests · {bedrooms} bedroom{bedrooms !== 1 ? 's' : ''} · {beds} bed{beds !== 1 ? 's' : ''} · {baths} bath{baths !== 1 ? 's' : ''}
      </p>

      {isGuestFavorite && (
        <div className="mt-6 flex items-center border border-gray-200 rounded-xl p-4">
          <div className="flex items-center gap-1 pr-4 border-r border-gray-200">
            <span className="text-lg">🌿</span>
            <div className="text-center">
              <div className="text-sm font-semibold">Guest</div>
              <div className="text-sm font-semibold">favorite</div>
            </div>
            <span className="text-lg">🌿</span>
          </div>
          <p className="flex-1 text-sm px-4">
            One of the most loved homes on Airbnb, according to guests
          </p>
          <div className="flex items-center gap-6 pl-4 border-l border-gray-200">
            <div className="text-center">
              <div className="text-lg font-semibold">{rating.toFixed(1)}</div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="w-3 h-3"
                    fill={i <= Math.round(rating) ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">{reviewCount}</div>
              <div className="text-sm underline">Reviews</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
