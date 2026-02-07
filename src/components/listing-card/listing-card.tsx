import { Heart, Star } from 'lucide-react';
import { ImageCarousel } from './image-carousel';
import { useApp } from '@/store/app-context';
import type { Listing } from '@/data/types';
import { cn } from '@/lib/utils';

interface ListingCardProps {
  listing: Listing;
  isFeatured?: boolean;
}

export function ListingCard({ listing, isFeatured }: ListingCardProps) {
  const { wishlist, toggleWishlist, viewListing } = useApp();
  const isWishlisted = wishlist.has(listing.id);

  return (
    <div
      className={cn(
        'group cursor-pointer w-[220px] shrink-0 rounded-xl transition-all',
        isFeatured && 'ring-2 ring-airbnb-red ring-offset-4 shadow-md'
      )}
      onClick={() => viewListing(listing.id)}
    >
      <div className="relative">
        <ImageCarousel images={listing.images} alt={listing.title} />

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(listing.id);
          }}
          className="absolute top-3 right-3 z-10"
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={cn(
              'w-6 h-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.32)] transition-colors',
              isWishlisted
                ? 'fill-airbnb-red text-airbnb-red'
                : 'fill-black/40 text-white hover:fill-black/60 hover:scale-110'
            )}
            strokeWidth={2}
          />
        </button>

        {isFeatured ? (
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-full px-2.5 py-1 shadow-sm">
              <span className="text-xs font-semibold text-white">Featured</span>
            </div>
          </div>
        ) : listing.isGuestFavorite && (
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm">
              <span className="text-xs font-semibold text-airbnb-dark">Guest favorite</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-2">
        <h3 className="text-[15px] font-medium text-airbnb-dark leading-tight truncate">
          {listing.title}
        </h3>
        <div className="flex items-center gap-1 text-[13px] mt-0.5">
          <span className="text-airbnb-gray">${listing.price} {listing.priceLabel}</span>
          <span className="text-airbnb-gray">&middot;</span>
          <Star className="w-3 h-3 fill-airbnb-dark text-airbnb-dark" />
          <span className="text-airbnb-dark">{listing.rating.toFixed(listing.rating % 1 === 0 ? 1 : 2)}</span>
        </div>
      </div>
    </div>
  );
}
