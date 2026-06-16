import React from 'react';
import Image from 'next/image';
import { MapPin, Heart, Bath, BedDouble, Maximize } from 'lucide-react';
import { Property } from '@/lib/data';

export function PropertyCard({ property, priority = false }: { property: Property, priority?: boolean }) {
  return (
    <div 
      className="group bg-white rounded-3xl overflow-hidden border border-stone-200 hover:border-orange-200 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image 
          src={property.image} 
          alt={property.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <div className="flex gap-2">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-stone-900 tracking-wide uppercase shadow-sm">
              {property.type}
            </div>
            <div className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm ${property.purpose === 'buy' ? 'bg-orange-600 text-white' : 'bg-stone-900 text-white'}`}>
              For {property.purpose === 'buy' ? 'Sale' : 'Rent'}
            </div>
          </div>
          <button className="p-2 bg-white/50 backdrop-blur-md hover:bg-white rounded-full text-stone-600 hover:text-red-500 transition-colors shadow-sm">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-stone-500 text-sm mb-3">
          <MapPin className="w-4 h-4" />
          <span>{property.location}</span>
        </div>
        <h3 className="font-display font-bold text-xl text-stone-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
          {property.title}
        </h3>
        <div className="font-bold text-2xl text-stone-900 mb-6">
          {property.price}
        </div>
        
        <div className="flex items-center justify-between py-4 border-t border-stone-100 text-stone-600 text-sm">
          <div className="flex items-center gap-2">
            <BedDouble className="w-4 h-4 text-stone-400" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="w-px h-4 bg-stone-300" />
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-stone-400" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="w-px h-4 bg-stone-300" />
          <div className="flex items-center gap-2">
            <Maximize className="w-4 h-4 text-stone-400" />
            <span>{property.sqft}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
