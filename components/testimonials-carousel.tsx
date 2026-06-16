'use client';

import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Homeowner in Bandra West',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    review: "Dream Square Property found us the perfect sea-facing apartment. Their team was professional, transparent, and guided us through the paperwork seamlessly. We couldn't be happier!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Amit Patel',
    role: 'Investor in BKC',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    review: "I have used multiple brokers in Mumbai, but Dream Square Property stands out. They understand the market dynamics and negotiated a great deal for my commercial investment.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah & Michael',
    role: 'Rented in Powai',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
    review: "Relocating from the US to Mumbai was daunting, but Dream Square Property made finding a rental stress-free. The apartment is exactly as shown in the pictures.",
    rating: 5,
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Homeowner in Juhu',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    review: "A truly premium experience. From property shortlisting to the final handover, the team at Dream Square Property was patient, understanding, and incredibly helpful.",
    rating: 5,
  }
];

export function TestimonialsCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-end mb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-stone-900 tracking-tight mb-4">
            Hear from our clients
          </h2>
          <p className="text-stone-500 text-lg max-w-2xl">
            Real stories from people who found their perfect Mumbai homes with us.
          </p>
        </div>
        <div className="hidden md:flex gap-3 pb-2">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border-2 border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border-2 border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 hover:text-stone-900 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {TESTIMONIALS.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="snap-start shrink-0 w-[300px] sm:w-[380px] bg-white border border-stone-100 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-stone-200/40 flex flex-col justify-between"
          >
            <div>
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-stone-700 text-lg md:text-xl font-medium mb-8 leading-relaxed">
                "{testimonial.review}"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 bg-stone-100">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-bold text-stone-900">{testimonial.name}</h4>
                <p className="text-sm text-stone-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile controls */}
      <div className="flex md:hidden justify-center gap-4 mt-2 mb-8">
        <button 
          onClick={scrollLeft}
          className="w-12 h-12 rounded-full border-2 border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 focus:outline-none transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={scrollRight}
          className="w-12 h-12 rounded-full border-2 border-stone-200 flex items-center justify-center text-stone-600 hover:bg-stone-100 focus:outline-none transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
