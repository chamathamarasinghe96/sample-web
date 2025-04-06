import { useEffect } from 'react';
import { useParallax } from '@/hooks/use-parallax';

const HeroSection = () => {
  const { enableParallax } = useParallax();

  useEffect(() => {
    enableParallax();
  }, [enableParallax]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVirtualTour = () => {
    alert('Virtual tour feature coming soon!');
  };

  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-[#fce7f3] text-[#be185d] text-sm font-medium mb-6 animate-pulse">
            Luxury Beauty Experience
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="block parallax" data-speed="0.1">Reveal Your</span>
            <span className="gradient-text block parallax" data-speed="0.2">True Beauty</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 parallax" data-speed="0.15">
            Step into Chama Salon — a serene escape where style, care, and confidence are born. 
            Let our expert stylists bring out the beauty that's uniquely yours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={scrollToContact} 
              className="px-8 py-4 bg-[#db2777] hover:bg-[#be185d] text-white rounded-full shadow-lg hover:shadow-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#ec4899] focus:ring-opacity-50 transform hover:-translate-y-1 flex items-center justify-center group"
            >
              <span className="font-medium mr-2">Book Your Glow-Up</span>
              <i className="fas fa-arrow-right transition-transform duration-300 group-hover:translate-x-1"></i>
            </button>
            <button 
              onClick={handleVirtualTour}
              className="px-8 py-4 border-2 border-[#f9a8d4] hover:border-[#ec4899] text-[#db2777] rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#f472b6] focus:ring-opacity-50 transform hover:-translate-y-1 flex items-center"
            >
              <i className="fas fa-vr-cardboard mr-2"></i>
              <span>Virtual Tour</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-[#f9a8d4]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-[#f472b6]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#fbcfe8]/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
