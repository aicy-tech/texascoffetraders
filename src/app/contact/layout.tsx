import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Texas Coffee Traders",
  description: "Visit our East Austin cafe and roastery. Get directions, view our hours, or send us a message.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
