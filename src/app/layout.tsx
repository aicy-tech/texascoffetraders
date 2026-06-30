import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Texas Coffee Traders | Specialty Roastery & Cafe in Austin, TX",
    template: "%s | Texas Coffee Traders",
  },
  description: "Experience East Austin's finest specialty coffee. Roasting over 100 varieties of premium beans daily since 1994. Visit our cafe for artisanal lattes, fresh pastries, and friendly service.",
  keywords: ["coffee austin", "coffee roastery", "specialty coffee", "east austin cafe", "coffee beans", "texas coffee traders"],
  authors: [{ name: "Texas Coffee Traders" }],
  creator: "Texas Coffee Traders",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://texascoffeetraders.com",
    siteName: "Texas Coffee Traders",
    title: "Texas Coffee Traders | Specialty Roastery & Cafe in Austin, TX",
    description: "East Austin's original artisanal coffee roastery. Roasting over 100 varieties of premium beans daily since 1994.",
    images: ["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas Coffee Traders | Specialty Roastery & Cafe in Austin, TX",
    description: "East Austin's original artisanal coffee roastery since 1994.",
    images: ["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200"],
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
              "@type": "CafeOrCoffeeShop",
              "name": "Texas Coffee Traders",
              "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1400 E 4th St",
                "addressLocality": "Austin",
                "addressRegion": "TX",
                "postalCode": "78702",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 30.2638,
                "longitude": -97.7285
              },
              "url": "https://texascoffeetraders.com",
              "telephone": "+15124762233",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "08:00",
                  "closes": "17:00"
                }
              ],
              "priceRange": "$$"
            })
          }}
        />
      </body>
    </html>
  );
}
