import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story | Texas Coffee Traders",
  description: "Learn about the heritage of Texas Coffee Traders. Roasting small-batch specialty coffee in East Austin since 1994.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
