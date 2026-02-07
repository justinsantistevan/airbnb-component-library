import { useState, useRef, useEffect } from 'react';
import { Globe, Menu, User } from 'lucide-react';

const menuItems = [
  { label: 'Sign up', bold: true },
  { label: 'Log in', bold: false },
  { divider: true },
  { label: 'Gift cards', bold: false },
  { label: 'Airbnb your home', bold: false },
  { label: 'Help Center', bold: false },
];

export function UserMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-1">
      <button className="hidden lg:block px-4 py-2.5 text-sm font-semibold text-airbnb-dark rounded-full hover:bg-airbnb-pale transition-colors">
        Airbnb your home
      </button>
      <button className="p-2.5 rounded-full hover:bg-airbnb-pale transition-colors">
        <Globe className="w-4 h-4 text-airbnb-dark" strokeWidth={2} />
      </button>
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2.5 py-1.5 pl-3 pr-1.5 rounded-full border border-airbnb-light-gray hover:shadow-airbnb-hover transition-shadow"
        >
          <Menu className="w-4 h-4 text-airbnb-dark" strokeWidth={2} />
          <div className="w-7 h-7 rounded-full bg-airbnb-gray flex items-center justify-center">
            <User className="w-4 h-4 text-white" strokeWidth={2} />
          </div>
        </button>
        {open && (
          <div className="absolute right-0 top-full mt-2 w-60 bg-white rounded-xl shadow-airbnb-card py-2 z-50">
            {menuItems.map((item, i) =>
              'divider' in item ? (
                <div key={i} className="my-1 border-t border-airbnb-light-gray" />
              ) : (
                <button
                  key={i}
                  className="w-full text-left px-4 py-2.5 text-sm hover:bg-airbnb-pale transition-colors"
                  style={{ fontWeight: item.bold ? 600 : 400 }}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}
