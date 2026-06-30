import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { agentDetails } from "@/lib/data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Harry Real Estate | Premium Dallas Real Estate Services",
    template: "%s | Harry Real Estate",
  },
  description: "Expert real estate services in Dallas, TX. Buying, selling, or property valuation - Harry Lewis provides professional guidance with 15+ years of experience.",
  keywords: ["Dallas real estate", "Dallas realtor", "luxury homes Dallas", "home valuation Dallas", "Preston Hollow real estate", "Uptown Dallas condos"],
  authors: [{ name: "Harry Lewis" }],
  creator: "Harry Real Estate",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harryrealestate.com",
    siteName: "Harry Real Estate",
    title: "Harry Real Estate | Premium Dallas Real Estate Services",
    description: "Expert real estate services in Dallas, TX. Over 15 years of experience matching buyers and sellers.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harry Real Estate | Premium Dallas Real Estate Services",
    description: "Expert real estate services in Dallas, TX since 2009.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased text-near-black bg-white`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Harry Real Estate",
              "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2100 Ross Ave",
                "addressLocality": "Dallas",
                "addressRegion": "TX",
                "postalCode": "75201",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.7876,
                "longitude": -96.7964
              },
              "url": "https://harryrealestate.com",
              "telephone": agentDetails.phone,
              "email": agentDetails.email,
              "priceRange": "$$$",
              "areaServed": "Dallas, TX",
              "knowsAbout": ["Real Estate", "Luxury Homes", "Property Valuation", "Dallas Market"]
            })
          }}
        />
      </body>
    </html>
  );
}
