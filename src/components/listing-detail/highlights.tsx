import { Trophy, DoorOpen, Calendar, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  DoorOpen,
  Calendar,
};

interface Highlight {
  icon: string;
  title: string;
  description: string;
}

interface HighlightsProps {
  highlights: Highlight[];
}

export function Highlights({ highlights }: HighlightsProps) {
  return (
    <div className="py-6 border-b border-gray-200 space-y-6">
      {highlights.map((highlight, index) => {
        const Icon = iconMap[highlight.icon] || Trophy;
        return (
          <div key={index} className="flex gap-4">
            <Icon className="w-6 h-6 shrink-0" />
            <div>
              <div className="font-semibold">{highlight.title}</div>
              <div className="text-sm text-gray-600">{highlight.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
