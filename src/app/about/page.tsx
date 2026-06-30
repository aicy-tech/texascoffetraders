"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Coffee, Award, Users, Globe, ShieldCheck } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { icon: <Coffee className="w-6 h-6" />, value: "100+", label: "Coffee Varieties" },
  { icon: <Award className="w-6 h-6" />, value: "30+", label: "Years Roasting" },
  { icon: <Users className="w-6 h-6" />, value: "50k+", label: "Happy Customers" },
  { icon: <Globe className="w-6 h-6" />, value: "20+", label: "Direct Trade Partners" },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".reveal",
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="flex-1" ref={containerRef}>
      <Navbar />

      {/* About Hero */}
      <section className="relative py-24 md:py-32 bg-brand-pink-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionHeading
            title="Our Story: From Bean to Cup"
            subtitle="About Us"
            centered
            className="mb-8"
          />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 1994, Texas Coffee Traders began with a simple mission: to bring the world&apos;s finest coffees to the heart of Austin, one small batch at a time.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-brand-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-pink-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <SectionHeading
                title="A Commitment to Craft and Community"
                subtitle="Our Mission"
              />
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Texas Coffee Traders, we believe coffee is more than just a morning ritual—it&apos;s a craft that connects global farmers with our local neighborhood. We travel the world to source the highest quality green beans, ensuring fair trade practices and sustainable farming.
                </p>
                <p>
                  Every bean is roasted daily in our East Austin facility, where we combine traditional techniques with modern precision to unlock the unique flavor profile of every origin.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-pink-100 flex items-center justify-center text-brand-pink-600">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-near-black">{stat.value}</div>
                      <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=1000"
                alt="Roasting coffee beans"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-pink-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionHeading
            title="What We Stand For"
            subtitle="Our Values"
            centered
          />
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="reveal bg-white p-10 rounded-2xl shadow-sm border border-brand-pink-100">
              <div className="w-16 h-16 bg-brand-pink-100 rounded-full flex items-center justify-center text-brand-pink-600 mx-auto mb-8">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                We never compromise on quality. From sourcing to brewing, every step is executed with meticulous attention to detail.
              </p>
            </div>
            <div className="reveal bg-white p-10 rounded-2xl shadow-sm border border-brand-pink-100">
              <div className="w-16 h-16 bg-brand-pink-100 rounded-full flex items-center justify-center text-brand-pink-600 mx-auto mb-8">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize Organic, Fair Trade, and Bird Friendly certifications to support the health of our planet and its people.
              </p>
            </div>
            <div className="reveal bg-white p-10 rounded-2xl shadow-sm border border-brand-pink-100">
              <div className="w-16 h-16 bg-brand-pink-100 rounded-full flex items-center justify-center text-brand-pink-600 mx-auto mb-8">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-gray-600 leading-relaxed">
                We love sharing our knowledge. Our barista classes and consultations help spread the joy of specialty coffee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Space Photo Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="A Space for Everyone"
            subtitle="The Cafe"
            centered
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
            <div className="reveal relative aspect-square rounded-2xl overflow-hidden shadow-md col-span-2 row-span-2">
              <Image
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000"
                alt="Cafe Interior"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="reveal relative aspect-square rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=1000"
                alt="Barista at work"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="reveal relative aspect-square rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=600"
                alt="Fresh coffee"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="reveal relative aspect-square rounded-2xl overflow-hidden shadow-md col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1000"
                alt="People in cafe"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
