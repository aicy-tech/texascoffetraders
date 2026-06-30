"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { listings } from "@/lib/data";
import { MapPin, Bed, Bath, Maximize, Search, SlidersHorizontal, X } from "lucide-react";

function ListingsContent() {
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [typeFilter, setTypeFilter] = useState(searchParams.get("type") || "all");
  const [priceRange, setPriceRange] = useState("all");
  const [bedsFilter, setBedsFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Set initial filters from URL
  useEffect(() => {
    const q = searchParams.get("q");
    const t = searchParams.get("type");
    if (q) setSearchQuery(q);
    if (t) setTypeFilter(t);
  }, [searchParams]);

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const matchesSearch =
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.city.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = typeFilter === "all" || listing.type === typeFilter;

      const matchesPrice = priceRange === "all" || (
        priceRange === "under-1m" ? listing.price < 1000000 :
        priceRange === "1m-3m" ? (listing.price >= 1000000 && listing.price <= 3000000) :
        priceRange === "over-3m" ? listing.price > 3000000 : true
      );

      const matchesBeds = bedsFilter === "all" || (
        bedsFilter === "4+" ? listing.beds >= 4 :
        listing.beds === parseInt(bedsFilter)
      );

      return matchesSearch && matchesType && matchesPrice && matchesBeds;
    });
  }, [searchQuery, typeFilter, priceRange, bedsFilter]);

  const clearFilters = () => {
    setSearchQuery("");
    setTypeFilter("all");
    setPriceRange("all");
    setBedsFilter("all");
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <SectionHeading
          title="Available Properties"
          subtitle="Explore Dallas"
          className="mb-0"
        />
        <div className="flex items-center gap-4">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search address..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:border-brand-orange-500 outline-none transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            className="rounded-full flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={18} />
            Filters
          </Button>
        </div>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="mb-12 p-8 bg-gray-50 rounded-3xl border border-gray-100 grid grid-cols-1 md:grid-cols-4 gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="space-y-2">
            <label className="text-sm font-bold text-near-black">Property Type</label>
            <select
              className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-brand-orange-500"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="House">House</option>
              <option value="Luxury">Luxury</option>
              <option value="Condo">Condo</option>
              <option value="Townhouse">Townhouse</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-near-black">Price Range</label>
            <select
              className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-brand-orange-500"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="all">Any Price</option>
              <option value="under-1m">Under $1M</option>
              <option value="1m-3m">$1M - $3M</option>
              <option value="over-3m">$3M+</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-near-black">Bedrooms</label>
            <select
              className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:border-brand-orange-500"
              value={bedsFilter}
              onChange={(e) => setBedsFilter(e.target.value)}
            >
              <option value="all">Any</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4+">4+ Bedrooms</option>
            </select>
          </div>
          <div className="flex items-end">
            <Button variant="ghost" className="w-full rounded-xl text-gray-500" onClick={clearFilters}>
              <X size={18} className="mr-2" /> Clear All
            </Button>
          </div>
        </div>
      )}

      {/* Grid */}
      {filteredListings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map((listing) => (
            <Link href={`/listings/${listing.id}`} key={listing.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
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
      ) : (
        <div className="py-24 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
            <Search size={32} />
          </div>
          <h3 className="text-2xl font-bold text-near-black mb-2">No properties found</h3>
          <p className="text-gray-500 mb-8">Try adjusting your filters or search query to find more results.</p>
          <Button onClick={clearFilters}>Clear All Filters</Button>
        </div>
      )}
    </div>
  );
}

export default function ListingsPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />
      <Suspense fallback={<div className="container mx-auto px-4 py-24 text-center">Loading properties...</div>}>
        <ListingsContent />
      </Suspense>
      <Footer />
    </main>
  );
}
