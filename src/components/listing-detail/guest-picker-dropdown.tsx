import { Minus, Plus } from 'lucide-react';

interface GuestPickerDropdownProps {
  adults: number;
  children: number;
  infants: number;
  pets: number;
  maxGuests: number;
  onAdultsChange: (value: number) => void;
  onChildrenChange: (value: number) => void;
  onInfantsChange: (value: number) => void;
  onPetsChange: (value: number) => void;
  onClose: () => void;
}

interface CounterRowProps {
  label: string;
  sublabel: string;
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
  minValue?: number;
  maxReached?: boolean;
}

function CounterRow({ label, sublabel, value, onDecrease, onIncrease, minValue = 0, maxReached }: CounterRowProps) {
  const canDecrease = value > minValue;
  const canIncrease = !maxReached;

  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <div className="font-medium">{label}</div>
        <div className="text-sm text-gray-500">{sublabel}</div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onDecrease}
          disabled={!canDecrease}
          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
            canDecrease
              ? 'border-gray-400 hover:border-gray-900 text-gray-600 hover:text-gray-900'
              : 'border-gray-200 text-gray-200 cursor-not-allowed'
          }`}
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-6 text-center">{value}</span>
        <button
          onClick={onIncrease}
          disabled={!canIncrease}
          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
            canIncrease
              ? 'border-gray-400 hover:border-gray-900 text-gray-600 hover:text-gray-900'
              : 'border-gray-200 text-gray-200 cursor-not-allowed'
          }`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export function GuestPickerDropdown({
  adults,
  children,
  infants,
  pets,
  maxGuests,
  onAdultsChange,
  onChildrenChange,
  onInfantsChange,
  onPetsChange,
  onClose,
}: GuestPickerDropdownProps) {
  const totalMainGuests = adults + children;
  const maxReached = totalMainGuests >= maxGuests;

  return (
    <div className="absolute top-full left-0 right-0 bg-white rounded-b-xl shadow-lg border border-t-0 border-gray-200 p-6 z-50">
      <CounterRow
        label="Adults"
        sublabel="Age 13+"
        value={adults}
        onDecrease={() => onAdultsChange(Math.max(1, adults - 1))}
        onIncrease={() => onAdultsChange(adults + 1)}
        minValue={1}
        maxReached={maxReached}
      />
      <div className="border-t border-gray-200" />
      <CounterRow
        label="Children"
        sublabel="Ages 2-12"
        value={children}
        onDecrease={() => onChildrenChange(Math.max(0, children - 1))}
        onIncrease={() => onChildrenChange(children + 1)}
        maxReached={maxReached}
      />
      <div className="border-t border-gray-200" />
      <CounterRow
        label="Infants"
        sublabel="Under 2"
        value={infants}
        onDecrease={() => onInfantsChange(Math.max(0, infants - 1))}
        onIncrease={() => onInfantsChange(infants + 1)}
        maxReached={infants >= 5}
      />
      <div className="border-t border-gray-200" />
      <div className="py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">Pets</div>
            <div className="text-sm text-gray-500 underline cursor-pointer">Bringing a service animal?</div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onPetsChange(Math.max(0, pets - 1))}
              disabled={pets <= 0}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                pets > 0
                  ? 'border-gray-400 hover:border-gray-900 text-gray-600 hover:text-gray-900'
                  : 'border-gray-200 text-gray-200 cursor-not-allowed'
              }`}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-6 text-center">{pets}</span>
            <button
              onClick={() => onPetsChange(pets + 1)}
              disabled={pets >= 5}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                pets < 5
                  ? 'border-gray-400 hover:border-gray-900 text-gray-600 hover:text-gray-900'
                  : 'border-gray-200 text-gray-200 cursor-not-allowed'
              }`}
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        This place has a maximum of {maxGuests} guests, not including infants. Pets aren't allowed.
      </p>

      <div className="flex justify-end mt-4">
        <button
          onClick={onClose}
          className="text-sm font-semibold underline hover:text-gray-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
