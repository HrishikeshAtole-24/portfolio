import { useEffect } from 'react';

export default function StarryBackground() {
  useEffect(() => {
    const createStars = () => {
      const starContainer = document.getElementById('stars-container');
      if (!starContainer) return;

      // Clear existing stars
      starContainer.innerHTML = '';

      // Create 200 stars
      for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 1; // 1px to 3px
        star.className = 'star';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2-5 seconds
        star.style.animationDelay = `${Math.random() * 2}s`; // Random start delay
        starContainer.appendChild(star);
      }
    };

    // Create stars when component mounts
    createStars();

    // Recreate stars on window resize for better distribution
    const handleResize = () => {
      setTimeout(createStars, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="starry-background">
      <div className="stars-container" id="stars-container"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star" style={{ animationDelay: '4s' }}></div>
      <div className="shooting-star" style={{ animationDelay: '7s' }}></div>
    </div>
  );
}
