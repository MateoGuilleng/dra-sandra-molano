import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GoldStrip from "@/components/GoldStrip";
import About from "@/components/About";
import Treatments from "@/components/Treatments";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Navbar />
      <Hero />
      <GoldStrip />
      <About />
      <Treatments />
      <BeforeAfter />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
