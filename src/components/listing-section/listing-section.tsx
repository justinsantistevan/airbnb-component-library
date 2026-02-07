import { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ListingCard } from '@/components/listing-card/listing-card';
import type { ListingSection as ListingSectionType } from '@/data/types';
import { cn } from '@/lib/utils';

interface ListingSectionProps {
  section: ListingSectionType;
  highlightFirst?: boolean;
}

export function ListingSection({ section, highlightFirst }: ListingSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 236;
    el.scrollBy({ left: direction === 'left' ? -cardWidth * 3 : cardWidth * 3, behavior: 'smooth' });
  };

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-4 px-6 xl:px-20 lg:px-10">
        <button className="flex items-center gap-2 group/title">
          <h2 className="text-[22px] font-semibold text-airbnb-dark">
            {section.title}
          </h2>
          <ArrowRight className="w-5 h-5 text-airbnb-dark group-hover/title:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={cn(
              'w-8 h-8 rounded-full border flex items-center justify-center transition-all',
              canScrollLeft
                ? 'border-airbnb-light-gray text-airbnb-dark hover:shadow-airbnb-hover cursor-pointer'
                : 'border-airbnb-pale text-airbnb-light-gray cursor-default'
            )}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={cn(
              'w-8 h-8 rounded-full border flex items-center justify-center transition-all',
              canScrollRight
                ? 'border-airbnb-light-gray text-airbnb-dark hover:shadow-airbnb-hover cursor-pointer'
                : 'border-airbnb-pale text-airbnb-light-gray cursor-default'
            )}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-6 xl:px-20 lg:px-10 py-2 -my-2 scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {section.listings.map((listing, index) => (
          <ListingCard key={listing.id} listing={listing} isFeatured={highlightFirst && index === 0} />
        ))}
      </div>
    </div>
  );
}
