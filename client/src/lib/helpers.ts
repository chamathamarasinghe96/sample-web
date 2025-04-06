// Helper functions for the application

/**
 * Calculates price based on hair length and complexity
 */
export const calculateServicePrice = (basePrice: number, lengthValue: number, complexityValue: number): number => {
  let price = basePrice;
  price += (lengthValue - 1) * 10;
  price += (complexityValue - 1) * 15;
  return price;
};

/**
 * Formats a date string to a more readable format
 */
export const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Scrolls to an element with smooth behavior
 */
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

/**
 * Generates stars for rating display
 */
export const generateRatingStars = (rating: number): JSX.Element[] => {
  const stars: JSX.Element[] = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
  }
  
  if (hasHalfStar) {
    stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
  }

  // Fill the rest with empty stars to always show 5 stars
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i key={`empty-star-${i}`} className="far fa-star"></i>);
  }

  return stars;
};
