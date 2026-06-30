import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu | Texas Coffee Traders",
  description: "Explore our menu of specialty lattes, fresh-roasted coffee, pastries, and more at our Austin cafe.",
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
