import { useState, useRef } from 'react';
import { Home, Heart, Star, Search, Menu, Globe, ChevronRight, SlidersHorizontal, Wifi, Tv, Car, Utensils, Wind, Snowflake, Bath, Coffee, DoorOpen, Trees, ShieldCheck, Award, Calendar } from 'lucide-react';

interface ComponentDocProps {
  title: string;
  description: string;
  location: string;
  children: React.ReactNode;
}

function ComponentDoc({ title, description, location, children }: ComponentDocProps) {
  return (
    <div className="border border-airbnb-light-gray rounded-xl overflow-hidden">
      <div className="px-5 py-4 border-b border-airbnb-light-gray bg-airbnb-pale">
        <h4 className="font-semibold text-airbnb-dark">{title}</h4>
        <p className="text-sm text-airbnb-gray">{description}</p>
        <p className="text-xs text-airbnb-gray font-mono mt-1">{location}</p>
      </div>
      <div className="p-6 bg-white overflow-x-auto">{children}</div>
    </div>
  );
}

function MockNavbar() {
  return (
    <div className="bg-airbnb-pale rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-airbnb-red rounded-full" />
          <span className="font-semibold text-airbnb-dark">santibnb</span>
        </div>
        <div className="flex items-center gap-4">
          {['Homes', 'Experiences', 'Services'].map((tab, i) => (
            <button key={tab} className={`flex flex-col items-center gap-1 px-3 py-1 ${i === 0 ? 'border-b-2 border-airbnb-dark' : ''}`}>
              <Home className="w-4 h-4 text-airbnb-dark" />
              <span className={`text-xs ${i === 0 ? 'font-semibold text-airbnb-dark' : 'text-airbnb-gray'}`}>{tab}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-airbnb-dark">Become a host</span>
          <Globe className="w-4 h-4 text-airbnb-dark" />
          <Menu className="w-4 h-4 text-airbnb-dark" />
        </div>
      </div>
    </div>
  );
}

function MockSearchBar() {
  return (
    <div className="bg-airbnb-pale rounded-lg p-4">
      <div className="flex items-center bg-white rounded-full border border-gray-200 shadow-sm h-14">
        <div className="flex-1 px-6 border-r border-gray-200">
          <div className="text-xs font-semibold text-airbnb-dark">Where</div>
          <div className="text-sm text-airbnb-gray">Search destinations</div>
        </div>
        <div className="flex-1 px-6 border-r border-gray-200">
          <div className="text-xs font-semibold text-airbnb-dark">When</div>
          <div className="text-sm text-airbnb-gray">Add dates</div>
        </div>
        <div className="flex-1 px-6 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-airbnb-dark">Who</div>
            <div className="text-sm text-airbnb-gray">Add guests</div>
          </div>
          <div className="w-10 h-10 bg-airbnb-red rounded-full flex items-center justify-center">
            <Search className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MockCategoryBar() {
  const categories = [
    { icon: Home, name: 'Amazing views' },
    { icon: Trees, name: 'Cabins' },
    { icon: Snowflake, name: 'Arctic' },
    { icon: Bath, name: 'Luxe' },
    { icon: Coffee, name: 'Bed & breakfasts' },
  ];

  return (
    <div className="bg-white rounded-lg p-4 border border-airbnb-light-gray">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-8">
          {categories.map((cat, i) => (
            <div key={cat.name} className={`flex flex-col items-center gap-2 pb-2 ${i === 0 ? 'border-b-2 border-airbnb-dark' : 'border-b-2 border-transparent'}`}>
              <cat.icon className="w-5 h-5 text-airbnb-dark" />
              <span className={`text-xs whitespace-nowrap ${i === 0 ? 'font-semibold text-airbnb-dark' : 'text-airbnb-gray'}`}>{cat.name}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 px-3 py-2 border border-airbnb-light-gray rounded-xl">
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-xs font-semibold">Filters</span>
        </div>
      </div>
    </div>
  );
}

function MockListingCard() {
  return (
    <div className="w-56">
      <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-200 mb-2">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Listing"
          className="w-full h-full object-cover"
        />
        <button className="absolute top-3 right-3">
          <Heart className="w-6 h-6 text-white fill-black/40" />
        </button>
        <div className="absolute top-3 left-3 bg-white/95 rounded-full px-2 py-1">
          <span className="text-xs font-semibold text-airbnb-dark">Guest favorite</span>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}`} />
          ))}
        </div>
      </div>
      <h3 className="text-[15px] font-medium text-airbnb-dark truncate">Modern Loft in Downtown</h3>
      <div className="flex items-center gap-1 text-[13px]">
        <span className="text-airbnb-gray">$185 night</span>
        <span className="text-airbnb-gray">&middot;</span>
        <Star className="w-3 h-3 fill-airbnb-dark text-airbnb-dark" />
        <span className="text-airbnb-dark">4.92</span>
      </div>
    </div>
  );
}

function MockPhotoGallery() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 h-64 rounded-xl overflow-hidden">
      <div className="col-span-2 row-span-2 bg-gray-200">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Main"
          className="w-full h-full object-cover"
        />
      </div>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-gray-200">
          <img
            src={`https://images.pexels.com/photos/${1571460 + i * 100}/pexels-photo-${1571460 + i * 100}.jpeg?auto=compress&cs=tinysrgb&w=300`}
            alt={`Gallery ${i}`}
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=300'; }}
          />
        </div>
      ))}
    </div>
  );
}

function MockReserveCard() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="w-80 border border-gray-300 rounded-xl shadow-lg p-5">
      <div className="mb-5">
        <span className="text-2xl font-semibold">$185</span>
        <span className="text-gray-600"> night</span>
      </div>
      <div className="border border-gray-400 rounded-lg mb-4">
        <div className="grid grid-cols-2 border-b border-gray-400">
          <div className="p-3 border-r border-gray-400">
            <div className="text-[10px] font-bold uppercase">Check-in</div>
            <div className="text-sm">12/15/2024</div>
          </div>
          <div className="p-3">
            <div className="text-[10px] font-bold uppercase">Checkout</div>
            <div className="text-sm">12/20/2024</div>
          </div>
        </div>
        <div className="p-3 flex justify-between items-center">
          <div>
            <div className="text-[10px] font-bold uppercase">Guests</div>
            <div className="text-sm">2 guests</div>
          </div>
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      </div>
      <button
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        className="relative w-full py-3 text-white font-semibold rounded-lg overflow-hidden transition-all duration-200 group"
        style={{
          background: `linear-gradient(90deg, #E61E4D 0%, #D70466 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #FF385C 0%, transparent 50%), linear-gradient(90deg, #BD1E59 0%, #D70466 50%, #E61E4D 100%)`,
          }}
        />
        <span className="relative z-10">Reserve</span>
      </button>
      <p className="text-center text-sm text-gray-600 mt-3">You won't be charged yet</p>
    </div>
  );
}

function MockAmenities() {
  const amenities = [
    { icon: Wifi, name: 'Wifi' },
    { icon: Tv, name: 'TV' },
    { icon: Car, name: 'Free parking' },
    { icon: Utensils, name: 'Kitchen' },
    { icon: Wind, name: 'Air conditioning' },
    { icon: Snowflake, name: 'Heating' },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {amenities.map((a) => (
        <div key={a.name} className="flex items-center gap-4">
          <a.icon className="w-6 h-6 text-airbnb-dark" />
          <span className="text-airbnb-dark">{a.name}</span>
        </div>
      ))}
    </div>
  );
}

function MockHostInfo() {
  return (
    <div className="flex items-center gap-4 py-6 border-b border-airbnb-light-gray">
      <div className="relative">
        <div className="w-14 h-14 rounded-full bg-gray-300 overflow-hidden">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Host" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-airbnb-red rounded-full flex items-center justify-center">
          <ShieldCheck className="w-3 h-3 text-white" />
        </div>
      </div>
      <div>
        <p className="font-semibold text-airbnb-dark">Hosted by Michael</p>
        <p className="text-sm text-airbnb-gray">Superhost &middot; 3 years hosting</p>
      </div>
    </div>
  );
}

function MockHighlights() {
  const highlights = [
    { icon: DoorOpen, title: 'Self check-in', desc: 'Check yourself in with the lockbox.' },
    { icon: Award, title: 'Michael is a Superhost', desc: 'Superhosts are experienced, highly rated hosts.' },
    { icon: Calendar, title: 'Free cancellation before Dec 10', desc: 'Get a full refund if you change your mind.' },
  ];

  return (
    <div className="space-y-6">
      {highlights.map((h) => (
        <div key={h.title} className="flex gap-4">
          <h.icon className="w-6 h-6 text-airbnb-dark shrink-0" />
          <div>
            <p className="font-medium text-airbnb-dark">{h.title}</p>
            <p className="text-sm text-airbnb-gray">{h.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function MockReviews() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Star className="w-5 h-5 fill-airbnb-dark text-airbnb-dark" />
        <span className="text-xl font-semibold">4.92</span>
        <span className="text-airbnb-gray">&middot;</span>
        <span className="text-xl font-semibold">128 reviews</span>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[1, 2].map((i) => (
          <div key={i} className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div>
                <p className="font-medium text-airbnb-dark">Guest Name</p>
                <p className="text-xs text-airbnb-gray">November 2024</p>
              </div>
            </div>
            <p className="text-sm text-airbnb-dark line-clamp-3">Great place to stay! The location was perfect and the host was very responsive. Would definitely stay again.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockFooter() {
  return (
    <div className="bg-airbnb-pale rounded-lg p-4">
      <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
        <div>
          <p className="font-semibold text-airbnb-dark mb-2">Support</p>
          <p className="text-airbnb-dark">Help Center</p>
          <p className="text-airbnb-dark">AirCover</p>
        </div>
        <div>
          <p className="font-semibold text-airbnb-dark mb-2">Hosting</p>
          <p className="text-airbnb-dark">Airbnb your home</p>
          <p className="text-airbnb-dark">Resources</p>
        </div>
        <div>
          <p className="font-semibold text-airbnb-dark mb-2">Airbnb</p>
          <p className="text-airbnb-dark">Newsroom</p>
          <p className="text-airbnb-dark">Careers</p>
        </div>
      </div>
      <div className="border-t border-airbnb-light-gray pt-3 flex items-center justify-between text-xs">
        <span className="text-airbnb-dark">2025 Airbnb, Inc. &middot; Terms &middot; Privacy</span>
        <div className="flex items-center gap-3 text-airbnb-dark">
          <Globe className="w-4 h-4" />
          <span>English (US)</span>
          <span>$ USD</span>
        </div>
      </div>
    </div>
  );
}

export function CustomComponentsSection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-airbnb-dark mb-2">Custom Components</h2>
      <p className="text-airbnb-gray mb-8">Application-specific components built for this project</p>

      <div className="space-y-8">
        <ComponentDoc
          title="Navbar"
          description="Main navigation header with logo, category tabs, and user actions"
          location="src/components/navbar/navbar.tsx"
        >
          <MockNavbar />
        </ComponentDoc>

        <ComponentDoc
          title="SearchBarExpanded"
          description="Full-width search bar with destination, dates, and guest selection"
          location="src/components/search/search-bar-expanded.tsx"
        >
          <MockSearchBar />
        </ComponentDoc>

        <ComponentDoc
          title="CategoryBar"
          description="Horizontally scrollable category filter with icons"
          location="src/components/category-bar/category-bar.tsx"
        >
          <MockCategoryBar />
        </ComponentDoc>

        <ComponentDoc
          title="ListingCard"
          description="Property card with image carousel, wishlist button, and pricing"
          location="src/components/listing-card/listing-card.tsx"
        >
          <MockListingCard />
        </ComponentDoc>

        <ComponentDoc
          title="PhotoGallery"
          description="5-image grid layout for listing detail hero section"
          location="src/components/listing-detail/photo-gallery.tsx"
        >
          <MockPhotoGallery />
        </ComponentDoc>

        <ComponentDoc
          title="ReserveCard"
          description="Sticky booking widget with date selection and reservation button"
          location="src/components/listing-detail/reserve-card.tsx"
        >
          <MockReserveCard />
        </ComponentDoc>

        <ComponentDoc
          title="HostInfo"
          description="Host profile display with avatar, name, and credentials"
          location="src/components/listing-detail/host-info.tsx"
        >
          <MockHostInfo />
        </ComponentDoc>

        <ComponentDoc
          title="Highlights"
          description="Key property features with icons and descriptions"
          location="src/components/listing-detail/highlights.tsx"
        >
          <MockHighlights />
        </ComponentDoc>

        <ComponentDoc
          title="Amenities"
          description="Two-column grid of property amenities with icons"
          location="src/components/listing-detail/amenities.tsx"
        >
          <MockAmenities />
        </ComponentDoc>

        <ComponentDoc
          title="Reviews"
          description="Rating summary and guest review cards"
          location="src/components/listing-detail/reviews.tsx"
        >
          <MockReviews />
        </ComponentDoc>

        <ComponentDoc
          title="Footer"
          description="Site-wide footer with links, language, and currency settings"
          location="src/components/footer/footer.tsx"
        >
          <MockFooter />
        </ComponentDoc>
      </div>
    </div>
  );
}
