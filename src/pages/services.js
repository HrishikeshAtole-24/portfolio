import Navbar from '../components/Navbar';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import StarryBackground from '../components/StarryBackground';
import ScrollToTop from '../components/ScrollToTop';

export default function Services() {
  return (
    <div>
      <StarryBackground />
      <Navbar />
      <ServicesSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
