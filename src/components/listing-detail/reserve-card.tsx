import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Flag, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { useApp } from '@/store/app-context';
import { DatePickerModal } from './date-picker-modal';
import { GuestPickerDropdown } from './guest-picker-dropdown';
import { ReserveButton } from './reserve-button';

interface ReserveCardProps {
  price: number;
  originalPrice: number;
  priceLabel: string;
  cancellationDate: string;
  maxGuests?: number;
}

export function ReserveCard({
  price,
  originalPrice,
  priceLabel,
  cancellationDate,
  maxGuests = 6,
}: ReserveCardProps) {
  const { search, updateSearch } = useApp();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const totalGuests = Math.max(1, search.adults + search.children);
  const guestLabel = `${totalGuests} guest${totalGuests !== 1 ? 's' : ''}`;

  const checkInDisplay = search.checkIn ? format(search.checkIn, 'M/d/yyyy') : 'Add date';
  const checkOutDisplay = search.checkOut ? format(search.checkOut, 'M/d/yyyy') : 'Add date';

  const hasDiscount = originalPrice > price;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
        setShowDatePicker(false);
        setShowGuestPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDateClick = () => {
    setShowGuestPicker(false);
    setShowDatePicker(true);
  };

  const handleGuestClick = () => {
    setShowDatePicker(false);
    setShowGuestPicker(!showGuestPicker);
  };

  return (
    <div className="sticky top-24 relative" ref={cardRef}>
      {hasDiscount && (
        <div className="flex items-center gap-2 mb-4 px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-md">
          <Tag className="w-5 h-5 text-green-600" />
          <span className="text-sm">These dates are priced lower than usual</span>
        </div>
      )}

      <div className="border border-gray-300 rounded-xl shadow-lg p-6">
        <div className="mb-6">
          {hasDiscount && (
            <span className="text-gray-400 line-through mr-2">${originalPrice}</span>
          )}
          <span className="text-2xl font-semibold">${price}</span>
          <span className="text-gray-600"> {priceLabel}</span>
        </div>

        <div className={`relative border border-gray-400 rounded-t-lg ${showGuestPicker ? '' : 'rounded-b-lg mb-4'}`}>
          <div className="relative grid grid-cols-2">
            <button
              onClick={handleDateClick}
              className={`p-3 border-r border-gray-400 text-left hover:bg-gray-50 transition-colors rounded-tl-lg ${
                showDatePicker ? 'ring-2 ring-gray-900 ring-inset' : ''
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wide">Check-in</div>
              <div className="text-sm">{checkInDisplay}</div>
            </button>
            <button
              onClick={handleDateClick}
              className={`p-3 text-left hover:bg-gray-50 transition-colors rounded-tr-lg ${
                showDatePicker ? 'ring-2 ring-gray-900 ring-inset' : ''
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wide">Checkout</div>
              <div className="text-sm">{checkOutDisplay}</div>
            </button>
            {showDatePicker && (
              <DatePickerModal
                checkIn={search.checkIn}
                checkOut={search.checkOut}
                onCheckInChange={(date) => updateSearch({ checkIn: date })}
                onCheckOutChange={(date) => updateSearch({ checkOut: date })}
                onClose={() => setShowDatePicker(false)}
              />
            )}
          </div>
          <button
            onClick={handleGuestClick}
            className={`w-full border-t border-gray-400 p-3 flex items-center justify-between hover:bg-gray-50 transition-colors ${
              showGuestPicker ? 'ring-2 ring-gray-900 ring-inset rounded-b-lg' : 'rounded-b-lg'
            }`}
          >
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-wide">Guests</div>
              <div className="text-sm">{guestLabel}</div>
            </div>
            {showGuestPicker ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          {showGuestPicker && (
            <GuestPickerDropdown
              adults={search.adults || 1}
              children={search.children}
              infants={search.infants}
              pets={search.pets}
              maxGuests={maxGuests}
              onAdultsChange={(value) => updateSearch({ adults: value })}
              onChildrenChange={(value) => updateSearch({ children: value })}
              onInfantsChange={(value) => updateSearch({ infants: value })}
              onPetsChange={(value) => updateSearch({ pets: value })}
              onClose={() => setShowGuestPicker(false)}
            />
          )}
        </div>
        {showGuestPicker && <div className="mb-4" />}

        <div className="bg-gray-100 rounded-lg py-2 px-3 mb-4 text-center text-xs text-gray-600">
          $0 today · Free cancellation before <span className="font-semibold">{cancellationDate}</span>
        </div>

        <ReserveButton />

        <p className="text-center text-sm text-gray-600 mt-4">You won't be charged yet</p>
      </div>

      <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-600 hover:text-gray-900 cursor-pointer">
        <Flag className="w-4 h-4" />
        <span className="underline">Report this listing</span>
      </div>
    </div>
  );
}
