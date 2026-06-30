"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { agentDetails } from "@/lib/data";
import { Phone, Mail, MapPin, Send, MessageSquare, User, Home, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(1, "Please select an interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: searchParams.get("type") === "valuation" ? "Free Home Valuation" : "Buying a Home",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-12 rounded-[2rem] shadow-xl border border-gray-100 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-3xl font-bold text-near-black mb-4">Message Sent!</h3>
        <p className="text-gray-500 text-lg mb-8">
          Thank you for reaching out, {isSuccess}. Harry will get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSuccess(false)}>Send Another Message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-near-black flex items-center gap-2">
            <User size={16} className="text-brand-orange-500" /> Full Name
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="John Doe"
            className={`w-full p-4 rounded-xl border outline-none transition-all ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-brand-orange-500'}`}
          />
          {errors.name && <p className="text-red-500 text-xs font-medium">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-near-black flex items-center gap-2">
            <Mail size={16} className="text-brand-orange-500" /> Email Address
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="john@example.com"
            className={`w-full p-4 rounded-xl border outline-none transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-brand-orange-500'}`}
          />
          {errors.email && <p className="text-red-500 text-xs font-medium">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-near-black flex items-center gap-2">
            <Phone size={16} className="text-brand-orange-500" /> Phone Number
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="(214) 555-0123"
            className={`w-full p-4 rounded-xl border outline-none transition-all ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-brand-orange-500'}`}
          />
          {errors.phone && <p className="text-red-500 text-xs font-medium">{errors.phone.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-near-black flex items-center gap-2">
            <Home size={16} className="text-brand-orange-500" /> I&apos;m interested in
          </label>
          <select
            {...register("subject")}
            className={`w-full p-4 rounded-xl border outline-none transition-all ${errors.subject ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-brand-orange-500'}`}
          >
            <option value="Buying a Home">Buying a Home</option>
            <option value="Selling a Home">Selling a Home</option>
            <option value="Free Home Valuation">Free Home Valuation</option>
            <option value="Investment Property">Investment Property</option>
            <option value="Other">Other</option>
          </select>
          {errors.subject && <p className="text-red-500 text-xs font-medium">{errors.subject.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold text-near-black flex items-center gap-2">
          <MessageSquare size={16} className="text-brand-orange-500" /> Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell Harry about your real estate goals..."
          className={`w-full p-4 rounded-xl border outline-none transition-all ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-brand-orange-500'}`}
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs font-medium">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full py-5 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all">
        {isSubmitting ? "Sending..." : "Send Message"} <Send size={20} className="ml-2" />
      </Button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />

      <div className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="space-y-12 lg:sticky lg:top-32">
              <div>
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-brand-orange-700 bg-brand-orange-100 rounded-full">
                  Contact Us
                </span>
                <h1 className="text-5xl md:text-6xl font-bold text-near-black mb-8 leading-tight">
                  Let&apos;s Start a <span className="text-brand-orange-500">Conversation.</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ready to buy, sell, or just have questions about the Dallas market? Harry is here to help. Reach out via the form or through our direct contact channels.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-brand-orange-100 rounded-2xl flex items-center justify-center text-brand-orange-600 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-near-black mb-1">Phone</h3>
                    <p className="text-gray-500 mb-1">Available Mon-Sat, 9am-6pm</p>
                    <a href={`tel:${agentDetails.phone}`} className="text-xl font-bold text-brand-orange-600 hover:underline">{agentDetails.phone}</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-brand-orange-100 rounded-2xl flex items-center justify-center text-brand-orange-600 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-near-black mb-1">Email</h3>
                    <p className="text-gray-500 mb-1">We usually respond within 24 hours</p>
                    <a href={`mailto:${agentDetails.email}`} className="text-xl font-bold text-brand-orange-600 hover:underline">{agentDetails.email}</a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-brand-orange-100 rounded-2xl flex items-center justify-center text-brand-orange-600 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-near-black mb-1">Office</h3>
                    <p className="text-gray-500 mb-1">Visit us in downtown Dallas</p>
                    <address className="text-xl font-bold text-near-black not-italic">{agentDetails.address}</address>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Follow Harry</h3>
                <div className="flex gap-4">
                   <a href={agentDetails.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-brand-orange-500 hover:text-white transition-all">
                    <span className="font-bold">IG</span>
                  </a>
                  <a href={agentDetails.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-brand-orange-500 hover:text-white transition-all">
                    <span className="font-bold">FB</span>
                  </a>
                  <a href={agentDetails.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-brand-orange-500 hover:text-white transition-all">
                    <span className="font-bold">LI</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <Suspense fallback={<div>Loading form...</div>}>
                <ContactFormContent />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section Placeholder */}
      <section className="h-[500px] w-full bg-gray-100 grayscale flex items-center justify-center border-y border-gray-200">
        <div className="text-center">
          <MapPin size={48} className="mx-auto mb-4 text-gray-300" />
          <p className="text-gray-400 font-bold text-xl">Interactive Office Map Integration</p>
          <p className="text-gray-400">{agentDetails.address}</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
