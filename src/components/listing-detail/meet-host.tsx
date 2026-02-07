import { Star, BadgeCheck, MapPin, GraduationCap, ShieldAlert } from 'lucide-react';
import type { Host } from '@/data/types';

interface MeetHostProps {
  host: Host;
}

export function MeetHost({ host }: MeetHostProps) {
  return (
    <div className="py-12 border-t border-gray-200">
      <h2 className="text-2xl font-semibold mb-8">Meet your host</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-gray-50 rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start gap-8">
              <div className="text-center">
                <div className="relative inline-block">
                  <img
                    src={host.avatar}
                    alt={host.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-airbnb-red rounded-full p-1">
                    <BadgeCheck className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mt-3">{host.name}</h3>
                {host.isSuperhost && (
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mt-1">
                    <BadgeCheck className="w-4 h-4" />
                    <span>Superhost</span>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold">{host.reviewCount}</div>
                  <div className="text-xs text-gray-600">Reviews</div>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="text-2xl font-bold flex items-center gap-1">
                    {host.rating.toFixed(1)}
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="text-2xl font-bold">{host.yearsHosting}</div>
                  <div className="text-xs text-gray-600">Months hosting</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-gray-600" />
              <span>Born in the {host.bornDecade}</span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-gray-600" />
              <span>Where I went to school: {host.school}</span>
            </div>
          </div>

          <p className="mt-6 text-gray-700 leading-relaxed">{host.bio}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">{host.name} is a Superhost</h3>
          <p className="text-gray-600 mb-6">
            Superhosts are experienced, highly rated hosts who are committed to providing great
            stays for guests.
          </p>

          <h4 className="text-lg font-semibold mb-2">Host details</h4>
          <p className="text-gray-600">Response rate: {host.responseRate}</p>
          <p className="text-gray-600 mb-6">Responds {host.responseTime}</p>

          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            Message host
          </button>

          <div className="flex items-start gap-3 mt-8 p-4 bg-gray-50 rounded-lg">
            <ShieldAlert className="w-6 h-6 text-airbnb-red shrink-0" />
            <p className="text-sm text-gray-600">
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
