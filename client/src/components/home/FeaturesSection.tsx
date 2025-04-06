const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md hover-up lift-card">
            <div className="w-14 h-14 bg-[#fce7f3] text-[#db2777] rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-award text-2xl"></i>
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Award-Winning Stylists</h3>
            <p className="text-gray-600">Our team of talented professionals bring years of expertise and creativity to every service.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md hover-up lift-card">
            <div className="w-14 h-14 bg-[#fce7f3] text-[#db2777] rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-leaf text-2xl"></i>
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Premium Products</h3>
            <p className="text-gray-600">We only use eco-friendly, high-quality products for long-lasting results that nurture your natural beauty.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-md hover-up lift-card">
            <div className="w-14 h-14 bg-[#fce7f3] text-[#db2777] rounded-lg flex items-center justify-center mb-6">
              <i className="fas fa-spa text-2xl"></i>
            </div>
            <h3 className="font-serif text-xl font-bold mb-3">Relaxing Atmosphere</h3>
            <p className="text-gray-600">Immerse yourself in a tranquil environment designed to help you unwind while we transform your look.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
