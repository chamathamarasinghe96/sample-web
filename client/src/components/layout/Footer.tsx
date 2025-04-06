import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#f472b6] to-[#db2777] rounded-full flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">C</span>
              </div>
              <h3 className="ml-3 text-2xl font-serif font-bold text-white">Chama</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Where elegance meets beauty. Your journey to self-confidence starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#f472b6] transition" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f472b6] transition" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f472b6] transition" aria-label="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#f472b6] transition" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-white transition">Services</a></li>
              <li><a href="#stylists" className="text-gray-300 hover:text-white transition">Our Team</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition">Book Now</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Hair Styling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Color Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Facials & Skincare</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Nail Care</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Bridal Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>123 Beauty Lane, Suite 200<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3"></i>
                <span>(212) 555-0123</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3"></i>
                <span>hello@chamasalon.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3"></i>
                <span>Mon-Fri: 9am-7pm<br/>Sat: 9am-6pm<br/>Sun: 10am-4pm</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Chama Salon. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
