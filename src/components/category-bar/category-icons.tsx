import type { LucideProps } from 'lucide-react';
import {
  Mountain,
  Waves,
  TreePine,
  Fence,
  Flame,
  Home,
  Droplets,
  DoorOpen,
  Fish,
  Castle,
  Trees,
  Gem,
  Snowflake,
  Tent,
  Wheat,
  MountainSnow,
  Wine,
  Sailboat,
  Diamond,
  Sparkles,
} from 'lucide-react';
import type { FC } from 'react';

const iconMap: Record<string, FC<LucideProps>> = {
  Mountain,
  Waves,
  TreePine,
  Fence,
  Flame,
  Home,
  Droplets,
  DoorOpen,
  Fish,
  Castle,
  Trees,
  Gem,
  Snowflake,
  Tent,
  Wheat,
  MountainSnow,
  Wine,
  Sailboat,
  Diamond,
  Sparkles,
};

export function CategoryIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
