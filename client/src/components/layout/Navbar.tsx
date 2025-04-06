import { useState, useEffect } from 'react';
import { Link } from 'wouter';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm ${
      isScrolled ? 'py-2' : 'py-3'
    }`} id="navbar">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-br from-[#f472b6] to-[#db2777] rounded-full flex items-center justify-center">
            <span className="text-white font-serif font-bold text-xl">C</span>
          </div>
          <Link href="/">
            <a className="ml-3 text-2xl font-serif font-bold text-[#db2777]">Chama</a>
          </Link>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#services" className="text-dark hover:text-[#ec4899] hover-underline text-sm font-medium transition">Services</a>
          <a href="#stylists" className="text-dark hover:text-[#ec4899] hover-underline text-sm font-medium transition">Stylists</a>
          <a href="#pricing" className="text-dark hover:text-[#ec4899] hover-underline text-sm font-medium transition">Pricing</a>
          <a href="#testimonials" className="text-dark hover:text-[#ec4899] hover-underline text-sm font-medium transition">Testimonials</a>
          <a href="#contact" className="text-dark hover:text-[#ec4899] hover-underline text-sm font-medium transition">Contact</a>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[#fce7f3] text-[#ec4899] hover:bg-[#fbcfe8] transition"
            aria-label="Toggle theme"
          >
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </div>
        
        {/* Mobile navigation button */}
        <button 
          className="md:hidden text-dark focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
      
      {/* Mobile navigation menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg rounded-b-xl ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-3 space-y-3">
          <a href="#services" className="block py-2 text-dark hover:text-[#ec4899] transition">Services</a>
          <a href="#stylists" className="block py-2 text-dark hover:text-[#ec4899] transition">Stylists</a>
          <a href="#pricing" className="block py-2 text-dark hover:text-[#ec4899] transition">Pricing</a>
          <a href="#testimonials" className="block py-2 text-dark hover:text-[#ec4899] transition">Testimonials</a>
          <a href="#contact" className="block py-2 text-dark hover:text-[#ec4899] transition">Contact</a>
          <div className="flex items-center pt-3 border-t border-gray-100">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full bg-[#fce7f3] text-[#ec4899]"
              aria-label="Toggle theme"
            >
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
            <span className="ml-2 text-sm text-gray-500">Toggle theme</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
