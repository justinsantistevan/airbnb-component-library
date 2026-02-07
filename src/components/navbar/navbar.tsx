import { useState } from 'react';
import { Home, Compass, Bell, Globe, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app-context';

const tabs = [
  { id: 'homes', label: 'Homes', icon: Home, isNew: false },
  { id: 'experiences', label: 'Experiences', icon: Compass, isNew: true },
  { id: 'services', label: 'Services', icon: Bell, isNew: true },
];

function SantibnbLogo() {
  return (
    <img src="/santibnb_logo_final.png" alt="Santibnb" className="h-[42px] w-auto" />
  );
}

function AirbnbLogo() {
  return (
    <img src="/image.png" alt="Airbnb" className="h-[32px] w-auto" />
  );
}

interface NavbarProps {
  variant?: 'santibnb' | 'airbnb';
}

export function Navbar({ variant = 'santibnb' }: NavbarProps) {
  const [activeTab, setActiveTab] = useState('homes');
  const { setCurrentPage } = useApp();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('home');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#f7f7f7]">
      <div className="flex items-center justify-between h-20 px-6 xl:px-20 lg:px-10 max-w-[2520px] mx-auto">
        <a href="/" onClick={handleLogoClick} className="flex items-center shrink-0">
          {variant === 'airbnb' ? <AirbnbLogo /> : <SantibnbLogo />}
        </a>

        <nav className="flex items-center gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'group flex flex-col items-center gap-1 px-5 py-2 relative transition-colors',
                  isActive ? 'text-airbnb-dark' : 'text-airbnb-gray hover:text-airbnb-dark'
                )}
              >
                <div className="relative">
                  <Icon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" strokeWidth={1.5} />
                  {tab.isNew && (
                    <span className="absolute -top-2 -right-5 text-[10px] font-bold text-airbnb-red bg-red-50 px-1.5 py-0.5 rounded-full leading-none">
                      NEW
                    </span>
                  )}
                </div>
                <span className={cn('text-xs', isActive ? 'font-semibold' : 'font-medium')}>
                  {tab.label}
                </span>
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-airbnb-dark rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-1 shrink-0">
          <button className="hidden lg:block text-sm font-semibold text-airbnb-dark px-4 py-3 rounded-full hover:bg-gray-200 transition-colors">
            Become a host
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <Globe className="w-5 h-5 text-airbnb-dark" strokeWidth={1.5} />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
            <Menu className="w-5 h-5 text-airbnb-dark" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
