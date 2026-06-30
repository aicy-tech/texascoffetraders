import Link from "next/link";
import { Home, Mail, MapPin, Phone, Clock, Instagram, Linkedin, Facebook } from "lucide-react";
import { agentDetails } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-near-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-brand-orange-500 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-lg">
                <Home size={24} />
              </div>
              <div className="flex flex-col text-white">
                <span className="text-xl font-bold leading-none tracking-tight">Harry</span>
                <span className="text-[10px] font-bold text-brand-orange-500 uppercase tracking-[0.2em] leading-none mt-1">Real Estate</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Providing premium real estate services in Dallas, TX. Helping buyers find their dream homes and sellers achieve top dollar for their properties since 2009.
            </p>
            <div className="flex space-x-4">
              <a href={agentDetails.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange-500 transition-all hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href={agentDetails.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange-500 transition-all hover:-translate-y-1">
                <Facebook size={18} />
              </a>
              <a href={agentDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange-500 transition-all hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-gray-400 hover:text-brand-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/listings" className="text-gray-400 hover:text-brand-orange-500 transition-colors">Browse Listings</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-brand-orange-500 transition-colors">About Harry</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-brand-orange-500 transition-colors">Contact Us</Link></li>
              <li><Link href="/contact?type=valuation" className="text-gray-400 hover:text-brand-orange-500 transition-colors">Free Home Valuation</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="text-brand-orange-500 shrink-0 mt-1" size={18} />
                <span>{agentDetails.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="text-brand-orange-500 shrink-0" size={18} />
                <span>{agentDetails.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="text-brand-orange-500 shrink-0" size={18} />
                <span>{agentDetails.email}</span>
              </li>
            </ul>
          </div>

          {/* Licenses Col */}
          <div>
            <h4 className="text-lg font-bold mb-6">Legal</h4>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Texas Real Estate Commission Information About Brokerage Services
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              TREC Consumer Protection Notice
            </p>
            <div className="mt-6">
              <h5 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-3">Office Hours</h5>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sat:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sun:</span>
                  <span>By Appointment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {currentYear} Harry Real Estate. All rights reserved. Licensed in Texas.</p>
        </div>
      </div>
    </footer>
  );
}
