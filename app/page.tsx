import About from "@/components/About";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import MobileCTA from "@/components/MobileCTA";
import PatientCollage from "@/components/PatientCollage";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import VideoTestimonials from "@/components/VideoTestimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-24 lg:pb-0">
        <Hero />
        <Marquee />
        <Services />
        <About />
        <VideoTestimonials />
        <PatientCollage />
        <Reviews />
        <Gallery />
        <Booking />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
