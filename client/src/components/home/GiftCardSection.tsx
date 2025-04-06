import { useState } from 'react';

const GiftCardSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handlePurchaseClick = () => {
    alert('Gift card purchase feature coming soon!');
  };

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#fce7f3] to-[#fbcfe8] rounded-2xl shadow-md overflow-hidden relative">
        <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="font-serif text-3xl font-bold text-[#be185d] mb-4">Give the Gift of Beauty</h2>
            <p className="text-gray-700 mb-6">
              Treat someone special to a luxurious salon experience with a Chama Salon gift card. Perfect for birthdays, anniversaries, or just because.
            </p>
            <button 
              onClick={handlePurchaseClick}
              className="px-6 py-3 bg-[#db2777] hover:bg-[#be185d] text-white rounded-full shadow-md transition duration-300 flex items-center"
            >
              <i className="fas fa-gift mr-2"></i>
              <span>Purchase Gift Card</span>
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div 
              className={`w-64 h-40 bg-gradient-to-br from-[#ec4899] to-[#be185d] rounded-xl shadow-lg relative overflow-hidden p-4 ${
                isHovered ? 'rotate-0' : 'rotate-3'
              } transform transition-transform duration-300`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute top-2 right-2 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <i className="fas fa-scissors text-white/70"></i>
              </div>
              <div className="text-white/90 font-serif text-sm">Chama Salon</div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-white font-bold text-lg">GIFT CARD</div>
                <div className="text-white/80 text-xs">A luxurious beauty experience awaits</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-md"></div>
        <div className="absolute top-1/2 -left-8 w-16 h-16 bg-[#f9a8d4]/30 rounded-full blur-md"></div>
      </div>
    </section>
  );
};

export default GiftCardSection;
