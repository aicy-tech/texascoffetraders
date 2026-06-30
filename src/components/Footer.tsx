import Link from "next/link";
import { Coffee, Mail, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-near-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-pink-500 rounded-full flex items-center justify-center text-white">
                <Coffee size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight">Texas Coffee Traders</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              East Austin&apos;s original artisanal coffee roastery. Dedicated to the craft since 1994, bringing you the world&apos;s finest beans.
            </p>
            <div className="flex space-x-4">
              {/* Using plain icons or text for now to avoid lucide version issues */}
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-pink-500 transition-colors">
                <span className="text-xs font-bold">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-pink-500 transition-colors">
                <span className="text-xs font-bold">FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-pink-500 transition-colors">
                <span className="text-xs font-bold">TW</span>
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-brand-pink-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-brand-pink-500 transition-colors">About Our Story</Link></li>
              <li><Link href="/menu" className="text-gray-400 hover:text-brand-pink-500 transition-colors">View Menu</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-brand-pink-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-bold mb-6">Visit Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin className="text-brand-pink-500 shrink-0 mt-1" size={18} />
                <span>1400 E 4th St,<br />Austin, TX 78702</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-brand-pink-500 shrink-0" size={18} />
                <span>(512) 476-2233</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-brand-pink-500 shrink-0" size={18} />
                <span>info@texascoffeetraders.com</span>
              </li>
            </ul>
          </div>

          {/* Hours Col */}
          <div>
            <h4 className="text-lg font-bold mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-3">
                <Clock className="text-brand-pink-500 shrink-0" size={18} />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-300">Mon - Fri</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="text-brand-pink-500 shrink-0" size={18} />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-300">Sat - Sun</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {currentYear} Texas Coffee Traders. Handcrafted in Austin, TX.</p>
        </div>
      </div>
    </footer>
  );
}
