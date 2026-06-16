import { MUMBAI_PROPERTIES } from '@/lib/data';
import { PropertyCard } from '@/components/property-card';

export default function RentPage() {
  const properties = MUMBAI_PROPERTIES.filter(p => p.purpose === 'rent');

  return (
    <div className="py-12 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="font-display font-bold text-4xl md:text-5xl text-stone-900 mb-4">Properties for Rent in Mumbai</h1>
          <p className="text-lg text-stone-600">Find the perfect rental home. We offer fully-furnished apartments, cozy studios, and premium living spaces across Mumbai.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} priority={index < 3} />
          ))}
        </div>
      </div>
    </div>
  );
}
