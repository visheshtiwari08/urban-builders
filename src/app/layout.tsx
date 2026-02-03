import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/components/site";

export const metadata: Metadata = {
  title: `${SITE.name} | Construction, Architecture & Interiors`,
  description:
    "Urban Builders & Enterprises in Varanasi: Architecture, Interior Design, Construction With Material, 2D/3D Designs, Renovation & Property Services. Get a free quote on WhatsApp.",
  metadataBase: new URL("https://urban-builders-ah21.vercel.app"),
  openGraph: {
    title: `${SITE.name} | Construction, Architecture & Interiors`,
    description:
      "Architecture • Interiors • Construction • 2D/3D • Renovation Services",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark"> {/* 🔥 FORCE DARK MODE */}
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
