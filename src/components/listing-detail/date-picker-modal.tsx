import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Keyboard } from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, isAfter, isBefore, startOfDay } from 'date-fns';

interface DatePickerModalProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onCheckInChange: (date: Date | null) => void;
  onCheckOutChange: (date: Date | null) => void;
  onClose: () => void;
}

export function DatePickerModal({
  checkIn,
  checkOut,
  onCheckInChange,
  onCheckOutChange,
  onClose,
}: DatePickerModalProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const nextMonth = addMonths(currentMonth, 1);
  const today = startOfDay(new Date());

  const handlePrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const handleNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleDateClick = (date: Date) => {
    if (isBefore(date, today)) return;

    if (!checkIn || (checkIn && checkOut)) {
      onCheckInChange(date);
      onCheckOutChange(null);
    } else if (checkIn && !checkOut) {
      if (isBefore(date, checkIn)) {
        onCheckInChange(date);
      } else {
        onCheckOutChange(date);
      }
    }
  };

  const handleClearDates = () => {
    onCheckInChange(null);
    onCheckOutChange(null);
  };

  const getNights = () => {
    if (checkIn && checkOut) {
      const diff = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
      return diff;
    }
    return 0;
  };

  const renderMonth = (month: Date) => {
    const start = startOfMonth(month);
    const end = endOfMonth(month);
    const days = eachDayOfInterval({ start, end });
    const startDay = start.getDay();

    const isDateInRange = (date: Date) => {
      if (!checkIn || !checkOut) return false;
      return isAfter(date, checkIn) && isBefore(date, checkOut);
    };

    const isDisabled = (date: Date) => isBefore(date, today);

    return (
      <div className="flex-1">
        <div className="text-center font-semibold mb-4">{format(month, 'MMMM yyyy')}</div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-500 mb-2">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="py-2">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: startDay }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {days.map((day) => {
            const isSelected = (checkIn && isSameDay(day, checkIn)) || (checkOut && isSameDay(day, checkOut));
            const isInRange = isDateInRange(day);
            const disabled = isDisabled(day);

            return (
              <button
                key={day.toISOString()}
                onClick={() => handleDateClick(day)}
                disabled={disabled}
                className={`
                  relative py-2.5 text-sm rounded-full transition-colors
                  ${disabled ? 'text-gray-300 cursor-not-allowed line-through' : 'hover:bg-gray-100 cursor-pointer'}
                  ${isSelected ? 'bg-gray-900 text-white hover:bg-gray-800' : ''}
                  ${isInRange ? 'bg-gray-100' : ''}
                  ${checkIn && isSameDay(day, checkIn) && checkOut ? 'rounded-r-none' : ''}
                  ${checkOut && isSameDay(day, checkOut) && checkIn ? 'rounded-l-none' : ''}
                `}
              >
                {format(day, 'd')}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const nights = getNights();

  return (
    <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 z-50 w-[700px]">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="text-2xl font-semibold">
            {nights > 0 ? `${nights} night${nights !== 1 ? 's' : ''}` : 'Select dates'}
          </div>
          <div className="text-gray-500 text-sm mt-1">
            {checkIn && checkOut
              ? `${format(checkIn, 'MMM d, yyyy')} - ${format(checkOut, 'MMM d, yyyy')}`
              : 'Add your travel dates for exact pricing'
            }
          </div>
        </div>

        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
          <div className={`px-4 py-3 ${checkIn ? 'border-2 border-gray-900 rounded-lg -m-px' : ''}`}>
            <div className="text-[10px] font-bold uppercase tracking-wide">Check-in</div>
            <div className="text-sm flex items-center gap-2">
              {checkIn ? format(checkIn, 'M/d/yyyy') : 'MM/DD/YYYY'}
              {checkIn && (
                <button onClick={() => onCheckInChange(null)} className="hover:bg-gray-100 rounded-full p-0.5">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
          <div className={`px-4 py-3 border-l border-gray-300 ${checkOut ? 'border-2 border-gray-900 rounded-lg -m-px' : ''}`}>
            <div className="text-[10px] font-bold uppercase tracking-wide">Checkout</div>
            <div className="text-sm flex items-center gap-2">
              {checkOut ? format(checkOut, 'M/d/yyyy') : 'MM/DD/YYYY'}
              {checkOut && (
                <button onClick={() => onCheckOutChange(null)} className="hover:bg-gray-100 rounded-full p-0.5">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex-1" />
        <button
          onClick={handleNextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex gap-8">
        {renderMonth(currentMonth)}
        {renderMonth(nextMonth)}
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Keyboard className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={handleClearDates}
            className="px-4 py-2 text-sm font-semibold underline hover:bg-gray-100 rounded-lg transition-colors"
          >
            Clear dates
          </button>
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
