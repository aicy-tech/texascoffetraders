"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { Coffee, Award, Users, ArrowRight, Star, Heart } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const featuredItems = [
  {
    name: "Austin Roast",
    category: "Whole Bean",
    price: "$18.50",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800",
    description: "Our signature dark roast with notes of dark chocolate and toasted nuts."
  },
  {
    name: "Dusty Rose Latte",
    category: "Seasonal",
    price: "$6.25",
    image: "https://images.unsplash.com/photo-1536939459926-301728717817?auto=format&fit=crop&q=80&w=800",
    description: "Espresso with steamed milk, infused with rose petals and honey."
  },
  {
    name: "Classic Cold Brew",
    category: "Signature",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
    description: "Steeped for 24 hours for a smooth, bold, and refreshing finish."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Local Artist",
    content: "The best atmosphere in Austin. I come here every morning to get inspired. Their Dusty Rose Latte is a dream!",
    stars: 5
  },
  {
    name: "David Chen",
    role: "Tech Lead",
    content: "Consistently great coffee and fast Wi-Fi. The baristas know exactly how to pull a perfect shot.",
    stars: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Coffee Aficionado",
    content: "I've tried roasters all over the world, but Texas Coffee Traders remains my absolute favorite.",
    stars: 5
  }
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline();
      tl.from(".hero-text", { y: 60, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" })
        .from(".hero-image", { scale: 1.1, opacity: 0, duration: 1.5, ease: "power2.out" }, "-=0.8");

      // Featured Items Reveal
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

  return (
    <main className="flex-1">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="hero-text inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase text-brand-pink-600 bg-brand-pink-100 rounded-full">
                Austin&apos;s Favorite Roastery
              </span>
              <h1 className="hero-text text-5xl md:text-7xl font-bold leading-tight mb-8">
                Freshly Roasted <span className="text-brand-pink-500">Coffee</span> in the Heart of Austin
              </h1>
              <p className="hero-text text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                From exotic farms to your favorite mug, we&apos;ve been roasting over 100 varieties of premium beans daily since 1994. Experience the craft of true coffee.
              </p>
              <div className="hero-text flex flex-col sm:flex-row gap-4">
                <Link href="/menu">
                  <Button size="lg" className="w-full sm:w-auto">
                    View Our Menu
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Visit Us Today
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hero-image relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200"
                alt="Texas Coffee Traders interior"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-pink-50/50 -z-10 rounded-l-[100px]" />
      </section>

      {/* Trust Stats */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-near-black mb-1">100+</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Varieties</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-near-black mb-1">30+</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Years Exp</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-near-black mb-1">50k+</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Customers</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-near-black mb-1">5k+</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section ref={featuredRef} className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionHeading
              title="Roaster's Favorites"
              subtitle="Curated Selection"
              className="mb-0"
            />
            <Link href="/menu" className="mt-6 md:mt-0 group flex items-center text-brand-pink-600 font-bold hover:text-brand-pink-700 transition-colors">
              Explore Full Menu <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {featuredItems.map((item, i) => (
              <div key={i} className="featured-card group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
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
                <div className="p-8">
                  <div className="text-xs font-bold text-brand-pink-500 uppercase tracking-widest mb-3">{item.category}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-pink-600 transition-colors">{item.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1000"
                  alt="Coffee beans close up"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-brand-pink-500 rounded-3xl -z-10" />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                title="Small Batch Roasting, Big Hearted Community"
                subtitle="Our Ethos"
              />
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
                <p>
                  At Texas Coffee Traders, we believe coffee is an adventure. Since 1994, we&apos;ve been traveling the globe to find the most unique, sustainable, and high-quality beans to bring back to East Austin.
                </p>
                <p>
                  Our roasting process is a blend of science and soul. We roast daily in small batches to ensure that every cup you pour or latte we steam is at the peak of its flavor profile.
                </p>
              </div>
              <Link href="/about">
                <Button variant="secondary" size="lg">
                  Read Our Full Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-brand-pink-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="What Our Community Says"
            subtitle="Testimonials"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-brand-pink-100 flex flex-col justify-between">
                <div>
                  <div className="flex text-brand-pink-500 mb-6">
                    {[...Array(t.stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 italic text-lg leading-relaxed mb-8">
                    &quot;{t.content}&quot;
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-brand-pink-100 rounded-full flex items-center justify-center text-brand-pink-600">
                    <Heart size={20} fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-bold text-near-black">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-near-black text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready for a better cup?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Visit us in East Austin or order online for local delivery and fresh beans shipped right to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="px-12">
                Visit the Cafe
              </Button>
            </Link>
            <Link href="/menu">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-near-black px-12">
                View Menu
              </Button>
            </Link>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-pink-500/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-pink-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </section>

      <Footer />
    </main>
  );
}
