import { AppProvider, useApp } from '@/store/app-context';
import { HomePage } from '@/pages/home';
import { HomeExperimentsPage } from '@/pages/home-experiments';
import { ListingDetailPage } from '@/pages/listing-detail';
import { StyleGuidePage } from '@/pages/style-guide';

function AppContent() {
  const { currentPage } = useApp();

  if (currentPage === 'style-guide') {
    return <StyleGuidePage />;
  }

  if (currentPage === 'listing-detail') {
    return <ListingDetailPage />;
  }

  if (currentPage === 'home-classic') {
    return <HomePage />;
  }

  return <HomeExperimentsPage />;
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
