interface Stylist {
  id: number;
  name: string;
  title: string;
  description: string;
  icon: string;
  specialties: string[];
}

const StylistSection = () => {
  const stylists: Stylist[] = [
    {
      id: 1,
      name: 'Sophia Martinez',
      title: 'Master Stylist & Color Specialist',
      description: 'With over 10 years of experience, Sophia brings creativity and precision to every client.',
      icon: 'fa-award',
      specialties: ['Balayage', 'Curly Hair', 'Updo']
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      title: 'Creative Director & Texture Expert',
      description: 'Marcus specializes in avant-garde styles and creating unique looks for each client.',
      icon: 'fa-star',
      specialties: ['Vivid Color', 'Men\'s Cuts', 'Texture']
    },
    {
      id: 3,
      name: 'Aisha Patel',
      title: 'Esthetician & Makeup Artist',
      description: 'Aisha creates stunning looks that enhance natural beauty for any occasion.',
      icon: 'fa-certificate',
      specialties: ['Facials', 'Bridal', 'Skincare']
    }
  ];

  return (
    <section id="stylists" className="py-20 bg-gradient-to-b from-white to-[#fdf2f8]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#fce7f3] text-[#be185d] text-sm font-medium mb-3">
            Our Team
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold gradient-text inline-block">
            Meet Our Talented Stylists
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Our diverse team of professionals are passionate about bringing your vision to life with skill and artistry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stylists.map(stylist => (
            <div key={stylist.id} className="stylist-card bg-white rounded-xl shadow-lg overflow-hidden group relative transform transition duration-500">
              <div className="h-64 bg-gradient-to-t from-[#be185d]/50 to-[#f9a8d4]/50 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-[#fbcfe8] relative overflow-hidden flex items-center justify-center">
                    {/* Placeholder for stylist image */}
                    <i className="fas fa-user-alt text-[#db2777] text-5xl"></i>
                    <div className="absolute inset-0 bg-[#ec4899]/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <div className="text-white font-bold">View Profile</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 relative">
                <div className="w-10 h-10 absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#db2777] text-white rounded-full flex items-center justify-center">
                  <i className={`fas ${stylist.icon}`}></i>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#be185d] mb-1 text-center">{stylist.name}</h3>
                <p className="text-[#ec4899] text-center text-sm mb-4">{stylist.title}</p>
                <p className="text-gray-600 text-center mb-5">{stylist.description}</p>
                <div className="flex justify-center space-x-4">
                  {stylist.specialties.map((specialty, index) => (
                    <span key={index} className="px-3 py-1 bg-[#fce7f3] text-[#db2777] rounded-full text-xs">{specialty}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#fce7f3] hover:bg-[#fbcfe8] text-[#be185d] rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#f9a8d4] flex items-center mx-auto">
            <span>Meet the Full Team</span>
            <i className="fas fa-chevron-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StylistSection;
