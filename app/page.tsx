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
import {
  getBeforeAfterCases,
  getFaqs,
  getPatientPhotos,
  getReviews,
  getServices,
  getSiteSettings,
  getVideoTestimonials,
} from "@/lib/content";

// Content is editable by the client through the Sanity Studio dashboard.
// This page fetches the latest published content on every request (with
// short-lived caching), so client edits show up on the live site quickly.
export const revalidate = 60;

export default async function Home() {
  const [
    site,
    services,
    reviews,
    patientPhotos,
    beforeAfterCases,
    videoTestimonials,
    faqs,
  ] = await Promise.all([
    getSiteSettings(),
    getServices(),
    getReviews(),
    getPatientPhotos(),
    getBeforeAfterCases(),
    getVideoTestimonials(),
    getFaqs(),
  ]);

  return (
    <>
      <Header site={site} />
      <main className="pb-24 lg:pb-0">
        <Hero site={site} />
        <Marquee />
        <Services services={services} />
        <About
          doctorPhotoUrl={site.doctorPhotoUrl}
          dentistName={site.dentist}
          rating={site.rating}
          reviewCount={site.reviewCount}
        />
        <VideoTestimonials testimonials={videoTestimonials} />
        <PatientCollage photos={patientPhotos} />
        <Reviews
          reviews={reviews.length ? reviews : undefined}
          rating={site.rating}
          reviewCount={site.reviewCount}
        />
        <Gallery cases={beforeAfterCases} />
        <Booking services={services} site={site} />
        <FAQ faqs={faqs} />
        <Contact site={site} />
      </main>
      <Footer services={services} site={site} />
      <MobileCTA site={site} />
    </>
  );
}
