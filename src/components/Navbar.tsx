"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Listings", href: "/listings" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-brand-orange-500 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-lg">
              <Home size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-near-black leading-none tracking-tight">
                Harry
              </span>
              <span className="text-[10px] font-bold text-brand-orange-600 uppercase tracking-[0.2em] leading-none mt-1">
                Real Estate
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold transition-colors hover:text-brand-orange-600 relative py-1",
                    pathname === link.href
                      ? "text-brand-orange-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-orange-500"
                      : "text-gray-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link href="/contact?type=valuation">
              <Button size="sm" className="rounded-full px-6">
                Free Valuation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-near-black p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={cn(
        "fixed inset-0 top-0 bg-white z-[60] md:hidden flex flex-col transition-transform duration-500 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between p-6 border-b">
           <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
            <div className="w-8 h-8 bg-brand-orange-500 rounded flex items-center justify-center text-white">
              <Home size={18} />
            </div>
            <span className="text-lg font-bold text-near-black">Harry Real Estate</span>
          </Link>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-3xl font-bold transition-colors",
                pathname === link.href ? "text-brand-orange-600" : "text-near-black"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact?type=valuation" className="w-full px-12" onClick={() => setIsOpen(false)}>
            <Button size="lg" className="w-full">
              Get Free Valuation
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
