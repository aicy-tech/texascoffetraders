import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { agentDetails } from "@/lib/data";
import { Award, CheckCircle2, ShieldCheck, TrendingUp, Users, Heart } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Integrity First",
      description: "We believe in honest communication and transparent transactions, putting your interests above all else.",
      icon: ShieldCheck
    },
    {
      title: "Market Expertise",
      description: "Deep knowledge of Dallas neighborhoods ensures you get the best value, whether buying or selling.",
      icon: TrendingUp
    },
    {
      title: "Client Focused",
      description: "Every client is unique. We tailor our approach to meet your specific goals and lifestyle needs.",
      icon: Users
    },
    {
      title: "Community Driven",
      description: "We don't just sell homes; we build communities. A portion of every sale goes back to local Dallas charities.",
      icon: Heart
    }
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-brand-orange-700 bg-brand-orange-100 rounded-full">
                Our Story
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-near-black mb-8 leading-tight">
                Experience, Dedication, <span className="text-brand-orange-500">Results.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                Harry Real Estate was founded on the principle that real estate is more than just a transaction — it&apos;s about people, their dreams, and their futures.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
                  <Award className="text-brand-orange-500" size={24} />
                  <span className="font-bold text-near-black">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
                  <Users className="text-brand-orange-500" size={24} />
                  <span className="font-bold text-near-black">500+ Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl z-10">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000"
                  alt="Harry Lewis - Senior Real Estate Consultant"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-brand-orange-500 rounded-[3rem] -z-10 opacity-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Meet Harry Lewis"
              subtitle="The Agent"
              centered
            />
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <p>
                {agentDetails.bio}
              </p>
              <p>
                Since 2009, I have witnessed Dallas transform into one of the most dynamic real estate markets in the country. My mission is to help my clients navigate this complexity with ease, providing the data-driven insights they need to make confident decisions.
              </p>
              <p>
                Whether you are a first-time homebuyer looking for a bungalow in Lakewood or a seasoned investor seeking a penthouse in Uptown, I bring the same level of passion and professionalism to every deal.
              </p>
            </div>

            <div className="mt-16 grid sm:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold text-near-black mb-6 flex items-center">
                  <Award className="text-brand-orange-500 mr-3" size={24} /> Credentials
                </h3>
                <ul className="space-y-4">
                  {agentDetails.certifications.map((cert, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="text-brand-orange-500 mr-3 shrink-0 mt-1" size={18} />
                      <span className="text-gray-700 font-medium">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold text-near-black mb-6 flex items-center">
                  <TrendingUp className="text-brand-orange-500 mr-3" size={24} /> Track Record
                </h3>
                <ul className="space-y-4">
                  {agentDetails.stats.map((stat, i) => (
                    <li key={i} className="flex items-center justify-between">
                      <span className="text-gray-500">{stat.label}</span>
                      <span className="text-near-black font-bold">{stat.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 bg-near-black text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Core Values"
            subtitle="The Foundation"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, i) => (
              <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-brand-orange-500 rounded-2xl flex items-center justify-center text-white mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-near-black mb-8">Work with a Pro</h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Ready to start your real estate journey with Harry? Let&apos;s discuss your goals and how we can achieve them together.
          </p>
          <Link href="/contact">
            <Button size="lg" className="px-12">Contact Harry Today</Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
