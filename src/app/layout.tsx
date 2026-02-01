import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/components/site";

export const metadata: Metadata = {
  title: `${SITE.name} | Construction, Architecture & Interiors`,
  description:
    "Urban Builders & Enterprises in Varanasi: Architecture, Interior Design, Construction With Material, 2D/3D Designs, Renovation & Property Services. Get a free quote on WhatsApp.",
  metadataBase: new URL("https://example.com"), // change after deployment
  openGraph: {
    title: `${SITE.name} | Construction, Architecture & Interiors`,
    description:
      "Architecture • Interiors • Construction With Material • 2D/3D • Renovation • Property Services",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
