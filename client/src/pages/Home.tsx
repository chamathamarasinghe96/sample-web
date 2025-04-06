import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import ServicesSection from '@/components/home/ServicesSection';
import StylistSection from '@/components/home/StylistSection';
import PricingSection from '@/components/home/PricingSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import BookingSection from '@/components/home/BookingSection';
import GiftCardSection from '@/components/home/GiftCardSection';
import ParticleBackground from '@/components/ui/ParticleBackground';
import ThreeJsBackground from '@/components/ui/ThreeJsBackground';

const Home = () => {
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <ThreeJsBackground />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <StylistSection />
        <PricingSection />
        <TestimonialsSection />
        <BookingSection />
        <GiftCardSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
