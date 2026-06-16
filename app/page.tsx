import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Search, ArrowRight, ShieldCheck, Clock, Sparkles, Send, Phone, Map, BadgePercent, Headset, Check, Home as HomeIcon } from 'lucide-react';
import { MUMBAI_PROPERTIES } from '@/lib/data';
import { PropertyCard } from '@/components/property-card';

const TestimonialsCarousel = dynamic(
  () => import('@/components/testimonials-carousel').then((mod) => mod.TestimonialsCarousel),
  { ssr: true }
);

export default function Home() {
  const featuredProperties = MUMBAI_PROPERTIES.filter(p => p.featured);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 md:pb-32 overflow-hidden bg-stone-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
          <div className="absolute top-0 right-1/2 -mr-48 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mt-12 mb-16">
            <h1 
              className="font-display font-bold text-5xl md:text-7xl text-stone-900 tracking-tight leading-[1.1] mb-6 animate-float"
            >
              Find your perfect <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500">
                home in Mumbai
              </span>
            </h1>
            <p 
              className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto"
            >
              Discover premium apartments, sea-facing villas, and independent houses across Mumbai&apos;s finest localities.
            </p>
          </div>


          <div 
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-stone-500 font-medium"
          >
            <span className="text-stone-400">Popular:</span>
            <span className="hover:text-orange-600 cursor-pointer transition-colors">Bandra West</span>
            <span className="hover:text-orange-600 cursor-pointer transition-colors">BKC</span>
            <span className="hover:text-orange-600 cursor-pointer transition-colors">Juhu</span>
            <span className="hover:text-orange-600 cursor-pointer transition-colors">Worli</span>
            <span className="hover:text-orange-600 cursor-pointer transition-colors">Powai</span>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-stone-900 tracking-tight mb-4">
                Exclusive properties
              </h2>
              <p className="text-stone-500 text-lg max-w-2xl">
                Explore our finest selection of homes tailored to the Mumbai lifestyle.
              </p>
            </div>
            <Link href="/buy" className="hidden md:flex items-center gap-2 text-orange-600 font-medium hover:gap-3 transition-all">
              View all listings <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={property.id} property={property} priority={index < 3} />
            ))}
          </div>
          
          <Link href="/buy" className="md:hidden mt-10 w-full inline-flex justify-center py-4 border-2 border-stone-200 rounded-2xl font-medium text-stone-600 hover:border-stone-300 transition-colors">
            View all properties
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-stone-100 border-t border-stone-200 overflow-hidden">
        <TestimonialsCarousel />
      </section>

      {/* Why Choose Us */}
      <section className="pt-20 pb-40 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-stone-900 tracking-tight mb-4">
              Why Choose Dream Square Property
            </h2>
            <p className="text-stone-500 text-lg">
              We redefine luxury real estate in Mumbai with unmatched transparency and premium service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 text-center flex flex-col items-center transition-all hover:shadow-lg hover:border-orange-100">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl text-stone-900 mb-3">100% Verified Listings</h3>
              <p className="text-stone-500">Every property goes through a rigorous physical inspection and legal check before making it to our platform.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 text-center flex flex-col items-center transition-all hover:shadow-lg hover:border-orange-100">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl text-stone-900 mb-3">Lightning Fast Process</h3>
              <p className="text-stone-500">End-to-end digital documentation and dedicated relationship managers speed up your buying experience.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 text-center flex flex-col items-center transition-all hover:shadow-lg hover:border-orange-100">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Map className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl text-stone-900 mb-3">Deep Locality Insights</h3>
              <p className="text-stone-500">Get data-driven insights about neighborhoods, connectivity, and future infrastructure developments.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 text-center flex flex-col items-center transition-all hover:shadow-lg hover:border-orange-100">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <BadgePercent className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl text-stone-900 mb-3">Best Price Guarantee</h3>
              <p className="text-stone-500">We negotiate directly with top developers to bring you exclusive offers and guaranteed lowest market prices.</p>
            </div>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 text-center flex flex-col items-center transition-all hover:shadow-lg hover:border-orange-100">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Headset className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl text-stone-900 mb-3">24/7 Priority Support</h3>
              <p className="text-stone-500">Your dedicated property consultant is available round the clock to assist you with any queries or site visits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beautiful Contact Form */}
      <section id="contact" className="relative z-20 -mt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-stone-900/10 border border-stone-100 overflow-hidden flex flex-col lg:flex-row">
            {/* Left side / Contact info & graphic */}
            <div className="lg:w-2/5 bg-stone-900 p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                  Let&apos;s talk about your dream home
                </h3>
                <p className="text-stone-400 mb-10">
                  Schedule a free consultation with our luxury real estate experts. We typically respond within 1 hour.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-stone-300">
                    <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-500 font-medium">Direct Line</p>
                      <p className="text-white font-medium">Request a callback</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-stone-300">
                    <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center shrink-0">
                      <Send className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-500 font-medium">Email Support</p>
                      <p className="text-white font-medium">Submit your details</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative z-10 mt-16 pt-10 border-t border-stone-800">
                <p className="text-stone-400 text-sm">
                  &quot;Dream Square Property made finding our Bandra apartment incredibly seamless and transparent. Highly recommended!&quot;
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-stone-900 bg-stone-700 flex items-center justify-center overflow-hidden text-[10px] text-white/50 font-bold">
                         P{i}
                      </div>
                    ))}
                  </div>
                  <span className="text-white font-medium text-sm">Join 500+ happy clients</span>
                </div>
              </div>
            </div>
            
            {/* Right side / Form */}
            <div className="lg:w-3/5 p-10 lg:p-14">
              <form className="space-y-6" action="#">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-900">First Name</label>
                    <input type="text" placeholder="John" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-stone-900 placeholder:text-stone-400" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-stone-900">Last Name</label>
                    <input type="text" placeholder="Doe" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-stone-900 placeholder:text-stone-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-900">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-stone-900 placeholder:text-stone-400" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-900">What are you looking for?</label>
                  <select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-stone-900 appearance-none cursor-pointer">
                    <option value="">Select a property type...</option>
                    <option value="buy">Buying an Apartment/Villa</option>
                    <option value="rent">Renting a Property</option>
                    <option value="sell">Selling a Property</option>
                    <option value="consult">General Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-stone-900">Message</label>
                  <textarea rows={4} placeholder="Tell us about your requirements (e.g., specific area, budget, number of bedrooms)..." className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-stone-900 placeholder:text-stone-400 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-orange-600/20">
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
