import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import ActivitiesSection from "@/components/ActivitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

// Import page-specific CSS
import "@/css/pages/index.css";

const Index = () => {
  return (
    <div className="index-page min-h-screen">
      <Navbar />
      <main className="index-main">
        <section id="home" className="index-section">
          <HeroSection />
        </section>
        <section id="gallery" className="index-section">
          <GallerySection />
        </section>
        <section id="activities" className="index-section">
          <ActivitiesSection />
        </section>
        <section id="testimonials" className="index-section">
          <TestimonialsSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
