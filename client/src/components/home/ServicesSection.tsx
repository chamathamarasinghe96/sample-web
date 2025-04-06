import { useState } from 'react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: string;
  categories: string[];
}

const ServicesSection = () => {
  const [activeFilter, setActiveFilter] = useState('All Services');

  const services: Service[] = [
    {
      id: 1,
      title: 'Lux Hair Styling',
      description: 'Trendy, classic or bold — our stylists create the perfect look to match your vibe and lifestyle.',
      icon: 'fa-cut',
      price: '$75',
      categories: ['Hair']
    },
    {
      id: 2,
      title: 'Radiance Facials',
      description: 'Glow like never before with our nourishing facials designed to refresh and revitalize your skin.',
      icon: 'fa-spa',
      price: '$85',
      categories: ['Skin']
    },
    {
      id: 3,
      title: 'Bliss Mani-Pedi',
      description: 'Pamper your hands and feet with luxurious treatments that soothe, smooth, and sparkle.',
      icon: 'fa-hands',
      price: '$65',
      categories: ['Nails']
    },
    {
      id: 4,
      title: 'Bridal Glam',
      description: 'On your special day, we create timeless bridal beauty that captivates hearts and cameras alike.',
      icon: 'fa-gem',
      price: '$150',
      categories: ['Bridal']
    },
    {
      id: 5,
      title: 'Threading & Waxing',
      description: 'Smooth finishes and clean lines — get the silky-smooth feel with our expert touch.',
      icon: 'fa-feather-alt',
      price: '$25',
      categories: ['Skin']
    },
    {
      id: 6,
      title: 'Scalp & Hair Therapy',
      description: 'Rejuvenate your roots with deep treatments that boost hair strength and shine.',
      icon: 'fa-wind',
      price: '$95',
      categories: ['Hair', 'Wellness']
    }
  ];

  const filters = ['All Services', 'Hair', 'Skin', 'Nails', 'Bridal', 'Wellness'];

  const filteredServices = activeFilter === 'All Services' 
    ? services 
    : services.filter(service => service.categories.includes(activeFilter));

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#fce7f3] text-[#be185d] text-sm font-medium mb-3">
            Our Expertise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold gradient-text inline-block">
            Signature Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover our range of premium beauty treatments designed to enhance your natural beauty and leave you feeling refreshed and confident.
          </p>
          
          {/* Service Filters */}
          <div className="flex flex-wrap justify-center mt-8 mb-12 gap-3">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full transition focus:outline-none ${
                  activeFilter === filter 
                    ? 'bg-[#db2777] text-white' 
                    : 'bg-white text-[#db2777] hover:bg-[#fdf2f8]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <div 
              key={service.id} 
              className="service-card bg-white rounded-xl shadow-md overflow-hidden"
              data-category={service.categories.join(' ')}
            >
              <div className="h-40 bg-gradient-to-br from-[#f9a8d4] to-[#ec4899] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className={`fas ${service.icon} text-white text-5xl opacity-75`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#be185d] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Starting from</span>
                  <span className="text-[#db2777] font-bold">{service.price}</span>
                </div>
                <button className="w-full mt-4 py-2 border border-[#f472b6] text-[#db2777] hover:bg-[#fdf2f8] rounded-md transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-[#fce7f3] hover:bg-[#fbcfe8] text-[#be185d] rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#f9a8d4] flex items-center mx-auto">
            <span>View Full Service Menu</span>
            <i className="fas fa-chevron-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
