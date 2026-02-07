import { useState, useRef, useEffect, useCallback } from 'react';
import { Search, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { format } from 'date-fns';
import { DayPicker, type DateRange } from 'react-day-picker';
import { useApp } from '@/store/app-context';
import { DestinationSuggestions } from './destination-suggestions';
import { GuestPicker } from './guest-picker';
import { FeelingLucky } from './feeling-lucky';
import { cn } from '@/lib/utils';

type ActiveField = 'where' | 'when' | 'who' | null;
type HoverField = 'where' | 'when' | 'who' | null;

const flexOptions = ['Exact dates', '\u00B1 1 day', '\u00B1 2 days', '\u00B1 3 days', '\u00B1 7 days', '\u00B1 14 days'];

interface SearchBarExpandedProps {
  showFeelingLucky?: boolean;
}

export function SearchBarExpanded({ showFeelingLucky = false }: SearchBarExpandedProps) {
  const { search, updateSearch } = useApp();
  const [activeField, setActiveField] = useState<ActiveField>(null);
  const [hoverField, setHoverField] = useState<HoverField>(null);
  const [dateTab, setDateTab] = useState<'dates' | 'months' | 'flexible'>('dates');
  const [selectedFlex, setSelectedFlex] = useState('Exact dates');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);
  const whereInputRef = useRef<HTMLInputElement>(null);

  const totalGuests = search.adults + search.children;
  const guestLabel = totalGuests > 0 ? `${totalGuests} guest${totalGuests !== 1 ? 's' : ''}` : 'Add guests';

  const dateRange: DateRange | undefined =
    search.checkIn || search.checkOut
      ? { from: search.checkIn ?? undefined, to: search.checkOut ?? undefined }
      : undefined;

  const dateLabel =
    search.checkIn && search.checkOut
      ? `${format(search.checkIn, 'MMM d')} - ${format(search.checkOut, 'MMM d')}`
      : search.checkIn
        ? format(search.checkIn, 'MMM d')
        : '';

  const handleWhereClick = useCallback(() => {
    setActiveField('where');
    setTimeout(() => whereInputRef.current?.focus(), 0);
  }, []);

  const handleDateSelect = useCallback(
    (range: DateRange | undefined) => {
      updateSearch({ checkIn: range?.from ?? null, checkOut: range?.to ?? null });
    },
    [updateSearch]
  );

  const clearDates = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    updateSearch({ checkIn: null, checkOut: null });
  }, [updateSearch]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveField(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const showFirstDivider =
    activeField !== 'where' && activeField !== 'when' &&
    hoverField !== 'where' && hoverField !== 'when';

  const showSecondDivider =
    activeField !== 'when' && activeField !== 'who' &&
    hoverField !== 'when' && hoverField !== 'who';

  const getPillStyle = () => {
    if (!activeField) return { opacity: 0, transform: 'translateX(0)' };

    switch (activeField) {
      case 'where':
        return {
          left: '0',
          width: '33.333%',
        };
      case 'when':
        return {
          left: '33.333%',
          width: '33.333%',
        };
      case 'who':
        return {
          left: '66.666%',
          width: '33.333%',
        };
      default:
        return {};
    }
  };

  return (
    <div className="bg-[#f7f7f7] border-b border-gray-200">
      <div className="max-w-[850px] mx-auto px-6 py-4 relative" ref={containerRef}>
        <div
          ref={searchBarRef}
          className={cn(
            "relative grid grid-cols-3 rounded-full border border-gray-200 shadow-sm h-[66px]",
            activeField ? 'bg-[#ebebeb]' : 'bg-white'
          )}
        >
          {activeField && (
            <div
              className="absolute top-0 bottom-0 rounded-full bg-white shadow-[0_3px_12px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out pointer-events-none z-10"
              style={getPillStyle()}
            />
          )}

          <div
            className={cn(
              'absolute top-1/2 -translate-y-1/2 left-[33.333%] w-px h-8 bg-gray-300 transition-opacity z-0',
              !showFirstDivider && 'opacity-0'
            )}
          />
          <div
            className={cn(
              'absolute top-1/2 -translate-y-1/2 left-[66.666%] w-px h-8 bg-gray-300 transition-opacity z-0',
              !showSecondDivider && 'opacity-0'
            )}
          />

          <div
            onClick={handleWhereClick}
            onMouseEnter={() => setHoverField('where')}
            onMouseLeave={() => setHoverField(null)}
            className={cn(
              'relative flex flex-col justify-center px-8 h-full rounded-full cursor-pointer transition-colors min-w-0',
              activeField === 'where' ? 'z-20' : 'z-0',
              activeField && activeField !== 'where' && 'hover:bg-[#dddddd]',
              !activeField && 'hover:bg-[#ebebeb]'
            )}
          >
            <span className="text-xs font-semibold text-airbnb-dark">Where</span>
            <input
              ref={whereInputRef}
              type="text"
              placeholder="Search destinations"
              value={search.location}
              onChange={(e) => updateSearch({ location: e.target.value })}
              onFocus={() => setActiveField('where')}
              className="bg-transparent text-sm text-airbnb-dark placeholder:text-airbnb-gray outline-none w-full"
            />
          </div>

          <button
            onClick={() => setActiveField('when')}
            onMouseEnter={() => setHoverField('when')}
            onMouseLeave={() => setHoverField(null)}
            className={cn(
              'relative flex items-center h-full rounded-full transition-colors whitespace-nowrap px-8',
              activeField === 'when' ? 'z-20' : 'z-0',
              activeField && activeField !== 'when' && 'hover:bg-[#dddddd]',
              !activeField && 'hover:bg-[#ebebeb]'
            )}
          >
            <div className="flex flex-col flex-1 text-left min-w-0">
              <span className="text-xs font-semibold text-airbnb-dark">When</span>
              <span className={cn('text-sm truncate', dateLabel ? 'text-airbnb-dark' : 'text-airbnb-gray')}>
                {dateLabel || 'Add dates'}
              </span>
            </div>
            {dateLabel && activeField === 'when' && (
              <button
                onClick={clearDates}
                className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors shrink-0 ml-2"
              >
                <X className="w-3 h-3 text-airbnb-dark" strokeWidth={3} />
              </button>
            )}
          </button>

          <div
            onClick={() => setActiveField('who')}
            onMouseEnter={() => setHoverField('who')}
            onMouseLeave={() => setHoverField(null)}
            className={cn(
              'relative flex items-center h-full rounded-full transition-colors min-w-0 cursor-pointer',
              activeField === 'who' ? 'z-20' : 'z-0',
              activeField && activeField !== 'who' && 'hover:bg-[#dddddd]',
              !activeField && 'hover:bg-[#ebebeb]'
            )}
          >
            <div className="flex flex-col flex-1 pl-8 min-w-0">
              <span className="text-xs font-semibold text-airbnb-dark">Who</span>
              <span className={cn('text-sm truncate', totalGuests > 0 ? 'text-airbnb-dark' : 'text-airbnb-gray')}>
                {guestLabel}
              </span>
            </div>
            <button
              className="w-12 h-12 flex items-center justify-center bg-airbnb-red hover:bg-[#E31C5F] text-white rounded-full mr-2 transition-colors shrink-0 focus:outline-none z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Search className="w-4 h-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {activeField === 'where' && (
          <div className="absolute left-6 right-6 mt-3 z-[100]">
            <DestinationSuggestions onSelect={() => setActiveField('when')} />
          </div>
        )}

        {activeField === 'when' && (
          <div className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white rounded-3xl shadow-lg ring-1 ring-black/5 z-[100] w-[780px]">
            <div className="flex justify-center pt-5 pb-4">
              <div className="flex bg-gray-100 rounded-full p-1">
                {(['dates', 'months', 'flexible'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setDateTab(tab)}
                    className={cn(
                      'px-5 py-2 rounded-full text-sm font-medium transition-all capitalize',
                      dateTab === tab
                        ? 'bg-white shadow-sm text-airbnb-dark'
                        : 'text-airbnb-gray hover:text-airbnb-dark'
                    )}
                  >
                    {tab === 'dates' ? 'Dates' : tab === 'months' ? 'Months' : 'Flexible'}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-10 pb-2">
              <DayPicker
                mode="range"
                selected={dateRange}
                onSelect={handleDateSelect}
                numberOfMonths={2}
                disabled={{ before: new Date() }}
                showOutsideDays={false}
                className="!font-sans"
                components={{
                  IconLeft: () => <ChevronLeft className="w-4 h-4" />,
                  IconRight: () => <ChevronRight className="w-4 h-4" />,
                }}
                classNames={{
                  months: 'flex gap-12 justify-center',
                  month: 'space-y-4',
                  caption: 'flex justify-center relative items-center h-10',
                  caption_label: 'text-base font-semibold text-airbnb-dark',
                  nav: 'flex items-center',
                  nav_button: 'w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors absolute top-0',
                  nav_button_previous: '-left-2',
                  nav_button_next: '-right-2',
                  table: 'w-full border-collapse',
                  head_row: 'flex',
                  head_cell: 'text-xs font-semibold text-airbnb-gray w-[46px] text-center',
                  row: 'flex mt-2',
                  cell: 'relative w-[46px] h-[44px] text-center text-sm p-0 [&:has(.day-range-middle)]:bg-gray-100 first:[&:has(.day-range-middle)]:rounded-l-full last:[&:has(.day-range-middle)]:rounded-r-full',
                  day: 'w-[42px] h-[42px] rounded-full font-medium hover:border-2 hover:border-airbnb-dark transition-colors text-airbnb-dark mx-auto flex items-center justify-center',
                  day_selected: 'bg-airbnb-dark !text-white hover:bg-airbnb-dark',
                  day_today: 'font-bold',
                  day_outside: 'text-gray-300 opacity-50',
                  day_disabled: 'text-gray-300 cursor-not-allowed hover:border-0',
                  day_range_start: 'bg-airbnb-dark !text-white rounded-full relative z-10',
                  day_range_end: 'bg-airbnb-dark !text-white rounded-full relative z-10',
                  day_range_middle: 'day-range-middle !text-gray-500 rounded-none hover:!border-0 !bg-gray-100',
                  day_hidden: 'invisible',
                }}
              />
            </div>

            <div className="flex items-center gap-2 px-10 pb-6 pt-2 border-t border-gray-200 mx-6">
              {flexOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedFlex(opt)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm border transition-colors',
                    selectedFlex === opt
                      ? 'border-airbnb-dark bg-white font-medium text-airbnb-dark'
                      : 'border-gray-300 text-airbnb-dark hover:border-airbnb-dark'
                  )}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {activeField === 'who' && (
          <div className="absolute right-6 mt-3 z-[100]">
            <GuestPicker />
          </div>
        )}

        {showFeelingLucky && (
          <div className="flex justify-center pt-4">
            <FeelingLucky />
          </div>
        )}
      </div>
    </div>
  );
}
