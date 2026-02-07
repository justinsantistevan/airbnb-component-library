import type { Host } from '@/data/types';
import { Award } from 'lucide-react';

interface HostInfoProps {
  host: Host;
}

export function HostInfo({ host }: HostInfoProps) {
  return (
    <div className="py-6 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={host.avatar}
            alt={host.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          {host.isSuperhost && (
            <div className="absolute -bottom-1 -right-1 bg-airbnb-red rounded-full p-0.5">
              <Award className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
        <div>
          <div className="font-semibold">Hosted by {host.name}</div>
          <div className="text-sm text-gray-600">
            {host.isSuperhost && 'Superhost · '}
            {host.hostingDuration}
          </div>
        </div>
      </div>
    </div>
  );
}
