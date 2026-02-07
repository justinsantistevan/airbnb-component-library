import { useApp } from '@/store/app-context';
import { ArrowLeft } from 'lucide-react';
import { DesignTokensSection } from '@/components/style-guide/design-tokens';
import { ShadcnComponentsSection } from '@/components/style-guide/shadcn-components';
import { CustomComponentsSection } from '@/components/style-guide/custom-components';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'design-tokens', label: 'Design Tokens' },
  { id: 'shadcn-ui', label: 'Shadcn/UI Components' },
  { id: 'custom-components', label: 'Custom Components' },
];

export function StyleGuidePage() {
  const { setCurrentPage } = useApp();
  const [activeSection, setActiveSection] = useState('design-tokens');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-airbnb-light-gray">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => setCurrentPage('home')}
            className="p-2 rounded-full hover:bg-airbnb-pale transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-airbnb-dark" />
          </button>
          <div>
            <h1 className="text-xl font-semibold text-airbnb-dark">Component Library</h1>
            <p className="text-sm text-airbnb-gray">Design system and UI components</p>
          </div>
        </div>
      </header>

      <div className="flex">
        <nav className="hidden lg:block w-64 shrink-0 sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto border-r border-airbnb-light-gray p-6">
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === section.id
                      ? 'bg-airbnb-pale text-airbnb-dark font-medium'
                      : 'text-airbnb-gray hover:bg-airbnb-pale hover:text-airbnb-dark'
                  }`}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex-1 max-w-5xl px-6 lg:px-12 py-12">
          <section id="design-tokens" className="mb-20">
            <DesignTokensSection />
          </section>

          <section id="shadcn-ui" className="mb-20">
            <ShadcnComponentsSection />
          </section>

          <section id="custom-components" className="mb-20">
            <CustomComponentsSection />
          </section>
        </main>
      </div>
    </div>
  );
}
