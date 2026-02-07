import { Navbar } from '@/components/navbar/navbar';
import { SearchBarExpanded } from '@/components/search/search-bar-expanded';
import { ListingSection } from '@/components/listing-section/listing-section';
import { InspirationSection } from '@/components/inspiration/inspiration-section';
import { Footer } from '@/components/footer/footer';
import { listingSections } from '@/data/listings';

export function HomeExperimentsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SearchBarExpanded showFeelingLucky />
      <main className="flex-1">
        <div className="max-w-[2520px] mx-auto w-full">
          {listingSections.map((section, index) => (
            <ListingSection key={section.id} section={section} highlightFirst={index === 0} />
          ))}
        </div>
        <InspirationSection />
      </main>
      <Footer />
    </div>
  );
}
