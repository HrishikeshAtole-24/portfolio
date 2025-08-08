import { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Add event listener
    window.addEventListener('scroll', toggleVisibility);

    // Add click event to scroll to top button
    const scrollButton = document.getElementById('scrollToTop');
    if (scrollButton) {
      scrollButton.addEventListener('click', scrollToTop);
    }

    // Cleanup
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (scrollButton) {
        scrollButton.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  return (
    <button 
      id="scrollToTop" 
      className={`scroll-to-top ${isVisible ? 'show' : ''}`}
    >
      <span className="material-icons">keyboard_arrow_up</span>
    </button>
  );
}
