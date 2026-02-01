import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import MapSection from "@/components/MapSection";
import Contact from "@/components/Contact";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Projects />
      <Testimonials />
      <MapSection />
      <Contact />
      <FloatingCTA />
    </main>
  );
}
