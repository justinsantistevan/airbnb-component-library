import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { SearchState } from '@/data/types';

type Page = 'home' | 'home-classic' | 'listing-detail' | 'style-guide';

interface AppContextValue {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  selectedListingId: string | null;
  viewListing: (listingId: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (id: string | null) => void;
  wishlist: Set<string>;
  toggleWishlist: (listingId: string) => void;
  search: SearchState;
  updateSearch: (updates: Partial<SearchState>) => void;
  resetSearch: () => void;
}

const defaultSearch: SearchState = {
  location: '',
  checkIn: null,
  checkOut: null,
  adults: 0,
  children: 0,
  infants: 0,
  pets: 0,
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState<SearchState>(defaultSearch);

  const viewListing = useCallback((listingId: string) => {
    setSelectedListingId(listingId);
    setCurrentPage('listing-detail');
    window.scrollTo(0, 0);
  }, []);

  const toggleWishlist = useCallback((listingId: string) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      if (next.has(listingId)) {
        next.delete(listingId);
      } else {
        next.add(listingId);
      }
      return next;
    });
  }, []);

  const updateSearch = useCallback((updates: Partial<SearchState>) => {
    setSearch((prev) => ({ ...prev, ...updates }));
  }, []);

  const resetSearch = useCallback(() => {
    setSearch(defaultSearch);
  }, []);

  const value = useMemo(
    () => ({
      currentPage,
      setCurrentPage,
      selectedListingId,
      viewListing,
      selectedCategory,
      setSelectedCategory,
      wishlist,
      toggleWishlist,
      search,
      updateSearch,
      resetSearch,
    }),
    [currentPage, selectedListingId, viewListing, selectedCategory, wishlist, toggleWishlist, search, updateSearch, resetSearch]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
