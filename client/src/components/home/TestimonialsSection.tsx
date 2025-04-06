import { useState, useRef, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  content: string;
}

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jennifer K.",
      rating: 5,
      content: "I've been coming to Chama for over a year now, and I'm always impressed with the attention to detail and personalized service. Sophia understands exactly what I want even when I can't articulate it myself!"
    },
    {
      id: 2,
      name: "Michael T.",
      rating: 5,
      content: "As someone who was always anxious about getting haircuts, finding Chama Salon was a game-changer. Marcus creates the perfect style every time, and the atmosphere is so relaxing."
    },
    {
      id: 3,
      name: "Priya S.",
      rating: 4.5,
      content: "Aisha did my makeup for my wedding, and I couldn't have been happier! She listened to what I wanted and made me feel beautiful and confident on my special day."
    },
    {
      id: 4,
      name: "Sarah L.",
      rating: 5,
      content: "The scalp treatment I received was amazing! My hair has never felt healthier. The team at Chama is knowledgeable and genuinely cares about the health of your hair."
    }
  ];

  const totalSlides = testimonials.length;

  const updateCarousel = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth / (window.innerWidth >= 768 ? 3 : 1);
      carouselRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  };

  useEffect(() => {
    updateCarousel();
    window.addEventListener('resize', updateCarousel);
    return () => {
      window.removeEventListener('resize', updateCarousel);
    };
  }, [currentSlide]);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  // Generate rating stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#fdf2f8] to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#fce7f3] text-[#be185d] text-sm font-medium mb-3">
            Client Love
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold gradient-text inline-block">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Don't just take our word for it. Hear what our valued clients have to say about their Chama Salon experience.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Testimonials slider */}
          <div 
            ref={carouselRef}
            className="testimonial-carousel" 
            id="testimonial-carousel"
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-slide px-4">
                <div className="bg-white rounded-xl shadow-md p-8 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#fbcfe8] rounded-full flex items-center justify-center">
                      <i className="fas fa-user text-[#db2777]"></i>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-[#be185d]">{testimonial.name}</h4>
                      <div className="flex text-[#f472b6]">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={goToPrevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md focus:outline-none z-10 text-[#db2777] hover:text-[#831843] transition"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            onClick={goToNextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md focus:outline-none z-10 text-[#db2777] hover:text-[#831843] transition"
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        
        {/* Indicator dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full focus:outline-none ${
                currentSlide === index ? 'bg-[#db2777]' : 'bg-[#fbcfe8]'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
