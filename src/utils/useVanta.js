import { useEffect } from 'react';

export default function useVanta() {
  useEffect(() => {
    let vantaEffect;

    const initVanta = () => {
      if (typeof window !== 'undefined' && window.VANTA) {
        vantaEffect = window.VANTA.NET({
          el: "#vanta-bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x0d0d0d,
          color: 0x667eea,
          points: 10.00,
          maxDistance: 20.00,
          spacing: 17.00
        });
      }
    };

    // Check if VANTA is already loaded
    if (typeof window !== 'undefined' && window.VANTA) {
      initVanta();
    } else {
      // Wait for VANTA to load
      const checkVanta = setInterval(() => {
        if (typeof window !== 'undefined' && window.VANTA) {
          initVanta();
          clearInterval(checkVanta);
        }
      }, 100);

      // Cleanup interval after 10 seconds to prevent infinite checking
      setTimeout(() => {
        clearInterval(checkVanta);
      }, 10000);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);
}
