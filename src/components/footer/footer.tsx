import { Globe, ChevronUp, Palette, Home } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useApp } from '@/store/app-context';

const footerSections = [
  {
    title: 'Support',
    links: ['Help Center', 'AirCover', 'Anti-discrimination', 'Disability support', 'Cancellation options', 'Report neighborhood concern'],
  },
  {
    title: 'Hosting',
    links: ['Airbnb your home', 'AirCover for Hosts', 'Hosting resources', 'Community forum', 'Hosting responsibly', 'Airbnb-friendly apartments'],
  },
  {
    title: 'Airbnb',
    links: ['Newsroom', 'New features', 'Careers', 'Investors', 'Gift cards', 'Airbnb.org emergency stays'],
  },
];

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { setCurrentPage } = useApp();

  return (
    <footer className="bg-airbnb-pale border-t border-airbnb-light-gray">
      <div className="px-6 xl:px-20 lg:px-10 max-w-[2520px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 py-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <button
                className="md:cursor-default flex items-center justify-between w-full md:mb-4"
                onClick={() =>
                  setExpandedSection(expandedSection === section.title ? null : section.title)
                }
              >
                <h3 className="text-sm font-semibold text-airbnb-dark py-3 md:py-0">
                  {section.title}
                </h3>
                <ChevronUp
                  className={cn(
                    'w-4 h-4 text-airbnb-dark md:hidden transition-transform',
                    expandedSection === section.title ? 'rotate-0' : 'rotate-180'
                  )}
                />
              </button>
              <ul
                className={cn(
                  'space-y-3 md:block overflow-hidden transition-all',
                  expandedSection === section.title ? 'max-h-96 pb-4' : 'max-h-0 md:max-h-none'
                )}
              >
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-airbnb-dark hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t border-airbnb-light-gray md:hidden" />
            </div>
          ))}
        </div>

        <div className="border-t border-airbnb-light-gray py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1 text-sm text-airbnb-dark">
            <span>&copy; 2025 Airbnb, Inc.</span>
            <span className="mx-1">&middot;</span>
            <a href="#" className="hover:underline">Terms</a>
            <span className="mx-1">&middot;</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span className="mx-1">&middot;</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span className="mx-1">&middot;</span>
            <a href="#" className="hover:underline">Your Privacy Choices</a>
          </div>
          <div className="flex items-center gap-4 text-sm font-semibold text-airbnb-dark">
            <button
              onClick={() => {
                setCurrentPage('home-classic');
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-2 hover:underline"
            >
              <Home className="w-4 h-4" />
              Classic Home
            </button>
            <button
              onClick={() => {
                setCurrentPage('style-guide');
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-2 hover:underline"
            >
              <Palette className="w-4 h-4" />
              Style Guide
            </button>
            <button className="flex items-center gap-2 hover:underline">
              <Globe className="w-4 h-4" />
              English (US)
            </button>
            <button className="hover:underline">$ USD</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
