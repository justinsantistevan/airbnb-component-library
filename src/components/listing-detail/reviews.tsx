import { Star, SprayCan, CheckCircle, Key, MessageSquare, Map, Tag, type LucideIcon } from 'lucide-react';
import type { Review, CategoryRating } from '@/data/types';

const iconMap: Record<string, LucideIcon> = {
  SprayCan,
  CheckCircle,
  Key,
  MessageSquare,
  Map,
  Tag,
};

interface ReviewsProps {
  rating: number;
  reviewCount: number;
  categoryRatings: CategoryRating[];
  reviews: Review[];
  isGuestFavorite: boolean;
}

function RatingOverview({
  rating,
  categoryRatings,
  isGuestFavorite,
}: {
  rating: number;
  categoryRatings: CategoryRating[];
  isGuestFavorite: boolean;
}) {
  return (
    <div className="text-center mb-8">
      {isGuestFavorite && (
        <>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl">🌿</span>
            <span className="text-6xl font-semibold">{rating.toFixed(1)}</span>
            <span className="text-4xl">🌿</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Guest favorite</h3>
          <p className="text-gray-600 max-w-md mx-auto mb-2">
            This home is in the <span className="font-semibold">top 1%</span> of eligible listings
            based on ratings, reviews, and reliability
          </p>
          <button className="text-sm underline text-gray-600 hover:text-gray-900">
            How reviews work
          </button>
        </>
      )}

      <div className="grid grid-cols-7 gap-4 mt-8 pt-8 border-t border-gray-200">
        <div className="text-left">
          <div className="text-sm font-medium mb-2">Overall rating</div>
          <div className="space-y-1">
            {[5, 4, 3, 2, 1].map((stars) => (
              <div key={stars} className="flex items-center gap-2">
                <span className="text-xs w-3">{stars}</span>
                <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-900 rounded-full"
                    style={{ width: stars === 5 ? '100%' : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {categoryRatings.map((cat) => {
          const Icon = iconMap[cat.icon] || CheckCircle;
          return (
            <div key={cat.category} className="text-left border-l border-gray-200 pl-4">
              <div className="text-sm font-medium">{cat.category}</div>
              <div className="text-lg font-semibold mt-1">{cat.rating.toFixed(1)}</div>
              <Icon className="w-6 h-6 mt-4" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const initials = review.reviewerName.charAt(0).toUpperCase();

  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        {review.reviewerAvatar ? (
          <img
            src={review.reviewerAvatar}
            alt={review.reviewerName}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-semibold">
            {initials}
          </div>
        )}
        <div>
          <div className="font-semibold">{review.reviewerName}</div>
          <div className="text-sm text-gray-600">{review.reviewerLocation}</div>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className="w-3 h-3"
              fill={i <= review.rating ? 'currentColor' : 'none'}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">· {review.date} · {review.stayType}</span>
      </div>
      <p className="text-gray-800 line-clamp-3">{review.text}</p>
      <button className="mt-2 font-semibold underline text-sm">Show more</button>
    </div>
  );
}

export function Reviews({
  rating,
  reviewCount,
  categoryRatings,
  reviews,
  isGuestFavorite,
}: ReviewsProps) {
  const displayReviews = reviews.slice(0, 6);

  return (
    <div className="py-8">
      <RatingOverview
        rating={rating}
        categoryRatings={categoryRatings}
        isGuestFavorite={isGuestFavorite}
      />

      <div className="grid grid-cols-2 gap-x-16 gap-y-10 mt-8 pt-8 border-t border-gray-200">
        {displayReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <button className="mt-8 px-6 py-3 border border-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Show all {reviewCount} reviews
      </button>
    </div>
  );
}
