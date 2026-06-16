import Link from 'next/link';
import { Home, MapPin } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 border-t border-stone-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl md:text-2xl text-white">Dream Square Property</span>
            </div>
            <p className="text-stone-400 mb-6">
              Mumbai&apos;s premier real estate partner. Find your perfect luxury apartment, villa, or commercial space with zero hassle.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/buy" className="hover:text-orange-500 transition-colors">Buy Property</Link></li>
              <li><Link href="/rent" className="hover:text-orange-500 transition-colors">Rent Property</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">List Your Property</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6">Office Address</h3>
            <ul className="space-y-4 flex flex-col">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                <span>Tower C, Bandra Kurla Complex (BKC), Bandra East, Mumbai, Maharashtra 400051</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 text-stone-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Dream Square Property. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
