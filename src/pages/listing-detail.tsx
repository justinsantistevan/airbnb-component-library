import { sampleListingDetail } from '@/data/listing-detail';
import { PhotoGallery } from '@/components/listing-detail/photo-gallery';
import { ListingHeader } from '@/components/listing-detail/listing-header';
import { ListingInfo } from '@/components/listing-detail/listing-info';
import { HostInfo } from '@/components/listing-detail/host-info';
import { Highlights } from '@/components/listing-detail/highlights';
import { Description } from '@/components/listing-detail/description';
import { Bedrooms } from '@/components/listing-detail/bedrooms';
import { Amenities } from '@/components/listing-detail/amenities';
import { Reviews } from '@/components/listing-detail/reviews';
import { MeetHost } from '@/components/listing-detail/meet-host';
import { ThingsToKnow } from '@/components/listing-detail/things-to-know';
import { ReserveCard } from '@/components/listing-detail/reserve-card';
import { Navbar } from '@/components/navbar/navbar';
import { Footer } from '@/components/footer/footer';

export function ListingDetailPage() {
  const listing = sampleListingDetail;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <ListingHeader title={listing.title} />
          <PhotoGallery images={listing.images} />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 mt-8">
            <div>
              <ListingInfo
                subtitle={listing.subtitle}
                guests={listing.guests}
                bedrooms={listing.bedrooms}
                beds={listing.beds}
                baths={listing.baths}
                rating={listing.rating}
                reviewCount={listing.reviewCount}
                isGuestFavorite={listing.isGuestFavorite}
              />
              <HostInfo host={listing.host} />
              <Highlights highlights={listing.highlights} />
              <Description
                description={listing.description}
                spaceDescription={listing.spaceDescription}
              />
              <Bedrooms bedrooms={listing.bedroomList} />
              <Amenities
                amenities={listing.amenities}
                totalAmenities={listing.totalAmenities}
              />
            </div>

            <div className="hidden lg:block">
              <ReserveCard
                price={listing.price}
                originalPrice={listing.originalPrice}
                priceLabel={listing.priceLabel}
                cancellationDate={listing.cancellationDate}
              />
            </div>
          </div>

          <Reviews
            rating={listing.rating}
            reviewCount={listing.reviewCount}
            categoryRatings={listing.categoryRatings}
            reviews={listing.reviews}
            isGuestFavorite={listing.isGuestFavorite}
          />

          <MeetHost host={listing.host} />

          <ThingsToKnow
            cancellationDate={listing.cancellationDate}
            houseRules={listing.houseRules}
            safetyInfo={listing.safetyInfo}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
