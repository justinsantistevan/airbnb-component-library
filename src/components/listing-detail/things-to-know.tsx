import { CalendarX2, Key, ShieldCheck } from 'lucide-react';

interface ThingsToKnowProps {
  cancellationDate: string;
  houseRules: {
    checkInTime: string;
    checkOutTime: string;
    maxGuests: number;
  };
  safetyInfo: string[];
}

export function ThingsToKnow({ cancellationDate, houseRules, safetyInfo }: ThingsToKnowProps) {
  return (
    <div className="py-12 border-t border-gray-200">
      <h2 className="text-2xl font-semibold mb-8">Things to know</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <CalendarX2 className="w-8 h-8 mb-4" strokeWidth={1.5} />
          <h3 className="font-semibold mb-3">Cancellation policy</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Free cancellation before {cancellationDate}. Cancel before check-in on May 15 for a partial refund.
            Review this host's full policy for details.
          </p>
          <button className="mt-3 text-sm font-semibold underline">Learn more</button>
        </div>

        <div>
          <Key className="w-8 h-8 mb-4" strokeWidth={1.5} />
          <h3 className="font-semibold mb-3">House rules</h3>
          <div className="text-gray-600 text-sm space-y-1">
            <p>Check-in after {houseRules.checkInTime}</p>
            <p>Checkout before {houseRules.checkOutTime}</p>
            <p>{houseRules.maxGuests} guests maximum</p>
          </div>
          <button className="mt-3 text-sm font-semibold underline">Learn more</button>
        </div>

        <div>
          <ShieldCheck className="w-8 h-8 mb-4" strokeWidth={1.5} />
          <h3 className="font-semibold mb-3">Safety & property</h3>
          <div className="text-gray-600 text-sm space-y-1">
            {safetyInfo.map((info, index) => (
              <p key={index}>{info}</p>
            ))}
          </div>
          <button className="mt-3 text-sm font-semibold underline">Learn more</button>
        </div>
      </div>
    </div>
  );
}
