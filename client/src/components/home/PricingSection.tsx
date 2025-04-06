import { useState, useEffect } from 'react';

interface PriceItem {
  service: string;
  description: string;
  price: string;
}

interface ServiceCategory {
  name: string;
  items: PriceItem[];
}

const PricingSection = () => {
  const [activeCategory, setActiveCategory] = useState('Hair Services');
  const [stylistLevel, setStylistLevel] = useState('Junior Stylist');
  const [lengthValue, setLengthValue] = useState(2);
  const [complexityValue, setComplexityValue] = useState(1);
  const [estimatedPrice, setEstimatedPrice] = useState(55);

  // Categories and their price items
  const categories: ServiceCategory[] = [
    {
      name: 'Hair Services',
      items: [
        {
          service: "Women's Haircut",
          description: "Includes consultation, shampoo and style",
          price: "$55"
        },
        {
          service: "Men's Haircut",
          description: "Includes consultation and styling",
          price: "$35"
        },
        {
          service: "Children's Haircut (Under 12)",
          description: "Simple cut and style",
          price: "$25"
        },
        {
          service: "Wash & Blowout",
          description: "Shampoo, conditioning and blowdry styling",
          price: "$45"
        },
        {
          service: "Updo / Special Occasion",
          description: "Formal styling for events",
          price: "$75+"
        },
        {
          service: "Deep Conditioning Treatment",
          description: "Intensive moisture and repair",
          price: "$25"
        }
      ]
    },
    {
      name: 'Color & Treatments',
      items: [
        {
          service: "Single Process Color",
          description: "Full color application",
          price: "$75"
        },
        {
          service: "Highlights (Partial)",
          description: "Dimension and depth",
          price: "$95"
        },
        {
          service: "Highlights (Full)",
          description: "Full foil placement",
          price: "$145"
        },
        {
          service: "Balayage",
          description: "Hand-painted highlights",
          price: "$175"
        }
      ]
    },
    {
      name: 'Skin Care',
      items: [
        {
          service: "Signature Facial",
          description: "Customized treatment for your skin type",
          price: "$85"
        },
        {
          service: "Deep Cleansing Facial",
          description: "Extractions and purification",
          price: "$95"
        },
        {
          service: "Anti-Aging Treatment",
          description: "Rejuvenating facial with premium products",
          price: "$125"
        }
      ]
    }
  ];

  useEffect(() => {
    // Calculate estimated price based on hair length and complexity
    let basePrice = 40;
    basePrice += (lengthValue - 1) * 10;
    basePrice += (complexityValue - 1) * 15;
    setEstimatedPrice(basePrice);
  }, [lengthValue, complexityValue]);

  const activeItems = categories.find(cat => cat.name === activeCategory)?.items || [];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-[#fce7f3] text-[#be185d] text-sm font-medium mb-3">
            Our Prices
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold gradient-text inline-block">
            Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Explore our range of services with clear, upfront pricing. Quality beauty shouldn't come with surprises.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Categories List */}
            <div className="md:w-1/3 bg-[#fdf2f8] p-6">
              <h3 className="font-serif text-xl font-bold text-[#be185d] mb-6">Service Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button 
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`price-category w-full text-left py-3 px-4 rounded-lg transition ${
                      category.name === activeCategory 
                        ? 'bg-[#db2777] text-white' 
                        : 'hover:bg-[#fce7f3]'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Pricing Details */}
            <div className="md:w-2/3 p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-serif text-xl font-bold text-[#be185d]">{activeCategory}</h3>
                
                {/* Experience level selector */}
                <div className="relative">
                  <select 
                    value={stylistLevel}
                    onChange={(e) => setStylistLevel(e.target.value)}
                    className="bg-[#fdf2f8] border border-[#fbcfe8] rounded-lg py-2 pl-3 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-[#f472b6] text-gray-700"
                  >
                    <option>Junior Stylist</option>
                    <option>Senior Stylist</option>
                    <option>Master Stylist</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#db2777]">
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>
              
              {/* Price items */}
              <div className="space-y-4 mb-6">
                {activeItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                      <h4 className="font-medium">{item.service}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <div className="text-[#be185d] font-bold">{item.price}</div>
                  </div>
                ))}
              </div>
              
              {/* Price estimator */}
              {activeCategory === 'Hair Services' && (
                <div className="bg-[#fdf2f8] rounded-lg p-4 mt-8">
                  <h4 className="font-medium mb-3">Estimate your service</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-600 block mb-1">Hair Length</label>
                      <input 
                        type="range" 
                        min="1" 
                        max="3" 
                        value={lengthValue} 
                        onChange={(e) => setLengthValue(parseInt(e.target.value))}
                        className="slider w-full" 
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Short</span>
                        <span>Medium</span>
                        <span>Long</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm text-gray-600 block mb-1">Service Complexity</label>
                      <input 
                        type="range" 
                        min="1" 
                        max="3" 
                        value={complexityValue} 
                        onChange={(e) => setComplexityValue(parseInt(e.target.value))}
                        className="slider w-full" 
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Simple</span>
                        <span>Average</span>
                        <span>Complex</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-between items-center border-t border-[#fbcfe8]">
                      <span className="font-medium">Estimated Price:</span>
                      <span className="text-[#be185d] font-bold text-xl">${estimatedPrice}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
