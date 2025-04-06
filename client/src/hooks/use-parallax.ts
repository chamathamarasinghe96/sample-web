import { useCallback } from 'react';

export const useParallax = () => {
  const enableParallax = useCallback(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || '0.1';
        const yPos = -(window.scrollY * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Run once on initialization to set initial positions
    handleScroll();
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return { enableParallax };
};
