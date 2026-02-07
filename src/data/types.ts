export interface Listing {
  id: string;
  title: string;
  price: number;
  priceLabel: string;
  rating: number;
  images: string[];
  isGuestFavorite: boolean;
}

export interface Host {
  name: string;
  avatar: string;
  isSuperhost: boolean;
  hostingDuration: string;
  reviewCount: number;
  rating: number;
  yearsHosting: number;
  bornDecade: string;
  school: string;
  bio: string;
  responseRate: string;
  responseTime: string;
}

export interface Bedroom {
  name: string;
  image: string;
  beds: string;
}

export interface Review {
  id: string;
  reviewerName: string;
  reviewerAvatar: string;
  reviewerLocation: string;
  rating: number;
  date: string;
  stayType: string;
  text: string;
}

export interface CategoryRating {
  category: string;
  rating: number;
  icon: string;
}

export interface ListingDetail {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  propertyType: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  price: number;
  originalPrice: number;
  priceLabel: string;
  rating: number;
  reviewCount: number;
  isGuestFavorite: boolean;
  images: string[];
  host: Host;
  highlights: { icon: string; title: string; description: string }[];
  description: string;
  spaceDescription: string;
  bedroomList: Bedroom[];
  amenities: { icon: string; name: string }[];
  totalAmenities: number;
  categoryRatings: CategoryRating[];
  reviews: Review[];
  cancellationDate: string;
  houseRules: {
    checkInTime: string;
    checkOutTime: string;
    maxGuests: number;
  };
  safetyInfo: string[];
}

export interface ListingSection {
  id: string;
  title: string;
  listings: Listing[];
}

export interface Destination {
  name: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface SearchState {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  adults: number;
  children: number;
  infants: number;
  pets: number;
}
