"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { listings, agentDetails } from "@/lib/data";
import { MapPin, Bed, Bath, Maximize, Calendar, Home, CheckCircle2, ArrowLeft, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";

export default function ListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const listing = listings.find((l) => l.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!listing) {
    notFound();
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % listing.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + listing.images.length) % listing.images.length);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back Button & Header */}
          <Link href="/listings" className="inline-flex items-center text-gray-500 hover:text-brand-orange-600 font-medium mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Listings
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column: Images & Info */}
            <div className="lg:col-span-2 space-y-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl group">
                  <Image
                    src={listing.images[activeImage]}
                    alt={listing.title}
                    fill
                    className="object-cover transition-opacity duration-500"
                  />
                  {listing.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-near-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-near-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {listing.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? 'border-brand-orange-500 scale-95 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <Image src={img} alt={`${listing.title} ${i + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Title & Stats */}
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand-orange-100 text-brand-orange-700 text-xs font-bold uppercase tracking-wider rounded-full">
                    {listing.type}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full">
                    Active Listing
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-near-black mb-4">{listing.title}</h1>
                <div className="flex items-center text-gray-500 text-lg mb-8">
                  <MapPin size={20} className="mr-2 text-brand-orange-500" />
                  {listing.address}, {listing.city}, {listing.state} {listing.zip}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm font-medium mb-1 flex items-center">
                      <Bed size={16} className="mr-2" /> Bedrooms
                    </span>
                    <span className="text-2xl font-bold text-near-black">{listing.beds}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm font-medium mb-1 flex items-center">
                      <Bath size={16} className="mr-2" /> Bathrooms
                    </span>
                    <span className="text-2xl font-bold text-near-black">{listing.baths}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm font-medium mb-1 flex items-center">
                      <Maximize size={16} className="mr-2" /> Square Feet
                    </span>
                    <span className="text-2xl font-bold text-near-black">{listing.sqft.toLocaleString()}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm font-medium mb-1 flex items-center">
                      <Calendar size={16} className="mr-2" /> Year Built
                    </span>
                    <span className="text-2xl font-bold text-near-black">{listing.yearBuilt}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-near-black">Description</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {listing.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-near-black">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {listing.features.map((feature, i) => (
                    <div key={i} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <CheckCircle2 size={20} className="text-brand-orange-500 mr-3 shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Placeholder */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-near-black">Location</h2>
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-gray-100 grayscale bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-12">
                    <MapPin size={48} className="mx-auto mb-4 text-gray-300" />
                    <p className="text-gray-400 font-medium">Interactive Map Integration for {listing.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Inquiry Form & Agent */}
            <div className="space-y-8">
              {/* Pricing Card */}
              <div className="bg-near-black text-white p-8 rounded-3xl shadow-xl sticky top-32">
                <div className="mb-6">
                  <div className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">List Price</div>
                  <div className="text-4xl font-bold">${listing.price.toLocaleString()}</div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold border-b border-white/10 pb-4">Schedule a Tour</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-brand-orange-500 transition-colors"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-brand-orange-500 transition-colors"
                      required
                    />
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-brand-orange-500 transition-colors"
                    ></textarea>
                    <Button className="w-full py-4 text-lg">Send Inquiry</Button>
                  </form>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-brand-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                      HL
                    </div>
                    <div>
                      <div className="font-bold text-lg">{agentDetails.name}</div>
                      <div className="text-gray-400 text-sm">{agentDetails.title}</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a href={`tel:${agentDetails.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-brand-orange-500 transition-colors">
                      <Phone size={18} /> {agentDetails.phone}
                    </a>
                    <a href={`mailto:${agentDetails.email}`} className="flex items-center gap-3 text-gray-300 hover:text-brand-orange-500 transition-colors">
                      <Mail size={18} /> {agentDetails.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
