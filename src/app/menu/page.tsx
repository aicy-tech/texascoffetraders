"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Coffee, Cloud, Leaf, Waves, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", name: "Full Menu" },
  { id: "coffee", name: "Coffee & Espresso" },
  { id: "cold", name: "Cold Brew & Tea" },
  { id: "food", name: "Pastries & Food" },
];

const menuItems = [
  {
    id: 1,
    name: "Austin Roast",
    category: "coffee",
    price: "$18.50",
    description: "Our signature dark roast with notes of dark chocolate and toasted nuts. Available as whole bean or ground.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    name: "Dusty Rose Latte",
    category: "coffee",
    price: "$6.25",
    description: "Espresso with steamed milk, infused with rose petals and honey. Our most popular seasonal drink.",
    image: "https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Classic Cold Brew",
    category: "cold",
    price: "$5.50",
    description: "Steeped for 24 hours for a smooth, bold, and refreshing finish. Served over ice.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Butter Croissant",
    category: "food",
    price: "$4.50",
    description: "Flaky, buttery, and baked fresh daily by local Austin artisans.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    name: "Matcha Ceremonial Latte",
    category: "cold",
    price: "$5.95",
    description: "Premium grade matcha whisked with your choice of milk. Earthy and energizing.",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    name: "Avocado Sourdough Toast",
    category: "food",
    price: "$12.00",
    description: "Fresh avocado, chili flakes, sea salt, and a drizzle of olive oil on toasted sourdough.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800"
  }
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <main className="flex-1">
      <Navbar />

      {/* Menu Header */}
      <section className="relative py-24 md:py-32 bg-near-black text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionHeading
            title="Our Crafted Menu"
            subtitle="The Selection"
            centered
            className="mb-8"
          />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From world-class beans roasted on-site to artisanal pastries, every item is crafted with love and precision.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Menu Filter */}
      <section className="py-12 bg-white sticky top-[70px] z-30 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-brand-pink-500 text-white shadow-md scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-brand-pink-100 hover:text-brand-pink-600"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredItems.map((item) => (
              <div key={item.id} className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-near-black">
                    {item.price}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-pink-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full group/btn">
                    Details <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders / Wholesale */}
      <section className="py-24 bg-brand-pink-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-near-black rounded-3xl p-10 md:p-16 text-white relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 italic tracking-tight">Looking for Wholesale?</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Bring Texas Coffee Traders to your office, restaurant, or event. We offer competitive pricing on bulk beans and equipment.
                </p>
                <Button className="w-full sm:w-auto">Inquire Today</Button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <Cloud className="mx-auto mb-4 text-brand-pink-400" size={32} />
                  <div className="text-sm font-bold uppercase tracking-wider">Office</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <Waves className="mx-auto mb-4 text-brand-pink-400" size={32} />
                  <div className="text-sm font-bold uppercase tracking-wider">Cafe</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <Leaf className="mx-auto mb-4 text-brand-pink-400" size={32} />
                  <div className="text-sm font-bold uppercase tracking-wider">Eco-Friendly</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <Coffee className="mx-auto mb-4 text-brand-pink-400" size={32} />
                  <div className="text-sm font-bold uppercase tracking-wider">Bulk</div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink-500/10 rounded-full blur-[100px]" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
