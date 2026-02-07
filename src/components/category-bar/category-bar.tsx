import { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { categories } from '@/data/categories';
import { useApp } from '@/store/app-context';
import { CategoryIcon } from './category-icons';
import { cn } from '@/lib/utils';

export function CategoryBar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { selectedCategory, setSelectedCategory } = useApp();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [showTaxToggle, setShowTaxToggle] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
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
    el.scrollBy({ left: direction === 'left' ? -400 : 400, behavior: 'smooth' });
  };

  return (
    <div className="sticky top-20 z-30 bg-white border-b border-airbnb-light-gray">
      <div className="flex items-center gap-4 px-6 xl:px-20 lg:px-10 max-w-[2520px] mx-auto h-[77px]">
        <div className="relative flex-1 min-w-0">
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full border border-airbnb-light-gray bg-white flex items-center justify-center hover:shadow-airbnb-hover transition-shadow"
            >
              <ChevronLeft className="w-3.5 h-3.5 text-airbnb-dark" />
            </button>
          )}

          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-[5] pointer-events-none" />
          )}

          <div
            ref={scrollRef}
            className="flex items-center gap-8 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
                className={cn(
                  'flex flex-col items-center gap-2 pt-3 pb-3 shrink-0 transition-all duration-150 border-b-2 group cursor-pointer',
                  selectedCategory === cat.id
                    ? 'border-airbnb-dark opacity-100'
                    : 'border-transparent opacity-70 hover:opacity-100 hover:border-airbnb-light-gray'
                )}
              >
                <CategoryIcon
                  name={cat.icon}
                  className="w-6 h-6 text-airbnb-dark"
                />
                <span className={cn(
                  'text-xs whitespace-nowrap',
                  selectedCategory === cat.id ? 'font-semibold text-airbnb-dark' : 'font-medium text-airbnb-gray'
                )}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>

          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-[5] pointer-events-none" />
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full border border-airbnb-light-gray bg-white flex items-center justify-center hover:shadow-airbnb-hover transition-shadow"
            >
              <ChevronRight className="w-3.5 h-3.5 text-airbnb-dark" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0 pl-2">
          <button className="flex items-center gap-2 px-4 py-3 rounded-xl border border-airbnb-light-gray text-xs font-semibold text-airbnb-dark hover:bg-airbnb-pale transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <button
            onClick={() => setShowTaxToggle(!showTaxToggle)}
            className="hidden xl:flex items-center gap-2 px-4 py-3 rounded-xl border border-airbnb-light-gray text-xs font-semibold text-airbnb-dark hover:bg-airbnb-pale transition-colors"
          >
            Display total before taxes
            <div className={cn(
              'w-10 h-6 rounded-full transition-colors relative',
              showTaxToggle ? 'bg-airbnb-dark' : 'bg-airbnb-light-gray'
            )}>
              <div className={cn(
                'absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform',
                showTaxToggle ? 'translate-x-[18px]' : 'translate-x-0.5'
              )} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
