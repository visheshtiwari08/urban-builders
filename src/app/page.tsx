import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "../components/Contact";

import MapSection from "@/components/MapSection";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Projects />
      <MapSection />
      <Contact />
      <FloatingCTA />
    </main>
  );
}
