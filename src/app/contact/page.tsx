"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-1">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-brand-pink-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <SectionHeading
            title="Get in Touch"
            subtitle="Contact Us"
            centered
            className="mb-8"
          />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our beans, classes, or wholesale? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 italic">Visit the Roastery</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-pink-100 flex items-center justify-center text-brand-pink-600 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Our Address</h4>
                      <p className="text-gray-600 text-lg">
                        1400 E 4th St,<br />Austin, TX 78702
                      </p>
                      <a
                        href="https://goo.gl/maps/example"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-brand-pink-600 font-bold hover:underline"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-pink-100 flex items-center justify-center text-brand-pink-600 shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Phone</h4>
                      <p className="text-gray-600 text-lg">(512) 476-2233</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-pink-100 flex items-center justify-center text-brand-pink-600 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Email</h4>
                      <p className="text-gray-600 text-lg">info@texascoffeetraders.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-md bg-gray-100 border border-gray-200">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 p-8 text-center">
                  <MapPin size={48} className="mb-4 opacity-20" />
                  <p className="font-medium text-lg">Google Map Integration</p>
                  <p className="text-sm">1400 E 4th St, Austin, TX 78702</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.066487920152!2d-97.73107502344738!3d30.26384457481358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5ba3d5e4b7b%3A0x673c0f86506f363b!2sTexas%20Coffee%20Traders!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  className="absolute inset-0 w-full h-full border-0 grayscale opacity-80"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-brand-pink-50 rounded-[40px] p-8 md:p-12 shadow-sm border border-brand-pink-100">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-near-black">Message Sent!</h3>
                  <p className="text-gray-600 text-lg max-w-sm">
                    Thank you for reaching out. A member of our team will get back to you shortly.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">Send Another Message</Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                        <input
                          {...register("name")}
                          placeholder="Your Name"
                          className={cn(
                            "w-full px-6 py-4 rounded-2xl border bg-white focus:outline-none focus:ring-2 transition-all",
                            errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-brand-pink-200 focus:border-brand-pink-500"
                          )}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.name.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                        <input
                          {...register("email")}
                          placeholder="hello@example.com"
                          className={cn(
                            "w-full px-6 py-4 rounded-2xl border bg-white focus:outline-none focus:ring-2 transition-all",
                            errors.email ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-brand-pink-200 focus:border-brand-pink-500"
                          )}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                      <input
                        {...register("subject")}
                        placeholder="How can we help?"
                        className={cn(
                          "w-full px-6 py-4 rounded-2xl border bg-white focus:outline-none focus:ring-2 transition-all",
                          errors.subject ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-brand-pink-200 focus:border-brand-pink-500"
                        )}
                      />
                      {errors.subject && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.subject.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                      <textarea
                        {...register("message")}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className={cn(
                          "w-full px-6 py-4 rounded-2xl border bg-white focus:outline-none focus:ring-2 transition-all resize-none",
                          errors.message ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:ring-brand-pink-200 focus:border-brand-pink-500"
                        )}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.message.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-5 rounded-2xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="ml-2" size={18} />}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
