"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { listings, agentDetails, testimonials } from "@/lib/data";
import { Search, MapPin, Bed, Bath, Maximize, ArrowRight, Star, Quote, CheckCircle2 } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [propertyType, setPropertyType] = useState("all");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.append("q", searchQuery);
    if (propertyType !== "all") params.append("type", propertyType);
    router.push(`/listings?${params.toString()}`);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline();
      tl.from(".hero-text", { y: 60, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" })
        .from(".hero-image", { scale: 1.1, opacity: 0, duration: 1.5, ease: "power2.out" }, "-=0.8")
        .from(".search-bar", { y: 40, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.5");

      // Stats Reveal
      gsap.from(".stat-item", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 90%",
        }
      });

      // Featured Listings Reveal
      gsap.from(".featured-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuredRef.current,
          start: "top 80%",
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const featuredListings = listings.filter(l => l.featured).slice(0, 3);

  return (
    <main className="flex-1">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="hero-text inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-brand-orange-700 bg-brand-orange-100 rounded-full">
                Premium Real Estate in Dallas, TX
              </span>
              <h1 className="hero-text text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-near-black">
                Find Your <span className="text-brand-orange-500">Dream Home</span> in the Lone Star State
              </h1>
              <p className="hero-text text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                Discover exclusive listings in Dallas&apos;s most sought-after neighborhoods. From luxury estates to modern penthouses, we find the perfect fit for your lifestyle.
              </p>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="search-bar relative z-20 max-w-2xl bg-white p-2 rounded-2xl md:rounded-full shadow-2xl border border-gray-100 flex flex-col md:flex-row items-center gap-2">
                <div className="flex-1 flex items-center px-4 w-full">
                  <Search className="text-gray-400 mr-3 shrink-0" size={20} />
                  <input
                    type="text"
                    placeholder="Search by neighborhood or address..."
                    className="w-full py-3 outline-none text-near-black placeholder:text-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="hidden md:block w-px h-8 bg-gray-200 mx-2" />
                <div className="w-full md:w-auto px-4 md:px-0">
                  <select
                    className="w-full py-3 outline-none bg-transparent text-near-black font-medium cursor-pointer"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                  >
                    <option value="all">All Types</option>
                    <option value="House">House</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Condo">Condo</option>
                    <option value="Townhouse">Townhouse</option>
                  </select>
                </div>
                <Button type="submit" className="w-full md:w-auto rounded-xl md:rounded-full px-8 py-4">
                  Search
                </Button>
              </form>
            </div>

            <div className="hero-image relative aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                alt="Luxury Dallas Home"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-white">
                <div className="text-sm font-medium opacity-80 mb-1">Featured Listing</div>
                <div className="text-xl font-bold">University Park Estate</div>
                <div className="flex items-center mt-2 text-sm opacity-90">
                  <MapPin size={14} className="mr-1" /> Dallas, TX
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange-50/50 -z-10 rounded-l-[100px]" />
      </section>

      {/* Trust Stats */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {agentDetails.stats.map((stat, i) => (
              <div key={i} className="stat-item flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 transition-transform hover:-translate-y-1">
                <div className="text-4xl font-bold text-brand-orange-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section ref={featuredRef} className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionHeading
              title="Featured Properties"
              subtitle="Handpicked Selection"
              className="mb-0"
            />
            <Link href="/listings" className="mt-6 md:mt-0 group flex items-center text-brand-orange-600 font-bold hover:text-brand-orange-700 transition-colors">
              View All Listings <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <Link href={`/listings/${listing.id}`} key={listing.id} className="featured-card group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={listing.images[0]}
                    alt={listing.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-brand-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {listing.type}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-lg font-bold text-near-black shadow-lg">
                    ${listing.price.toLocaleString()}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-brand-orange-600 transition-colors line-clamp-1">{listing.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <MapPin size={14} className="mr-1 shrink-0" /> {listing.address}, {listing.city}
                  </div>
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Bed size={16} className="mr-2 text-brand-orange-500" />
                      <span className="font-semibold">{listing.beds}</span><span className="ml-1 opacity-60">Beds</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Bath size={16} className="mr-2 text-brand-orange-500" />
                      <span className="font-semibold">{listing.baths}</span><span className="ml-1 opacity-60">Baths</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Maximize size={16} className="mr-2 text-brand-orange-500" />
                      <span className="font-semibold">{listing.sqft.toLocaleString()}</span><span className="ml-1 opacity-60">Sqft</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story / Why Harry */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                  alt="Modern Dallas Building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-2/3 aspect-square bg-brand-orange-500 rounded-3xl -z-10 opacity-10" />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-orange-100 rounded-full -z-10" />
            </div>
            <div>
              <SectionHeading
                title="Your Trusted Partner in Dallas Real Estate"
                subtitle="Why Work With Harry"
              />
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {agentDetails.bio}
              </p>
              <ul className="space-y-4 mb-10">
                {agentDetails.certifications.map((cert, i) => (
                  <li key={i} className="flex items-center text-near-black font-medium">
                    <CheckCircle2 className="text-brand-orange-500 mr-3" size={20} />
                    {cert}
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button variant="secondary" size="lg">
                  Learn More About Harry
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-near-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-brand-orange-400 bg-brand-orange-500/10 rounded-full">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-bold">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 flex flex-col h-full">
                <div className="mb-6 flex text-brand-orange-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-300 italic text-lg leading-relaxed mb-8 flex-1">
                  &quot;{t.content}&quot;
                </p>
                <div className="flex items-center space-x-4 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 bg-brand-orange-500 rounded-full flex items-center justify-center text-white">
                    <Quote size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-orange-500/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-orange-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-near-black">Ready to find your <span className="text-brand-orange-500">perfect place</span>?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether you&apos;re buying, selling, or just exploring, Harry is here to guide you through every step of your real estate journey in Dallas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/listings">
              <Button size="lg" className="px-12">
                Browse All Listings
              </Button>
            </Link>
            <Link href="/contact?type=valuation">
              <Button variant="outline" size="lg" className="px-12">
                Get Free Valuation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
