import Navbar from '../components/Navbar';
import PortfolioSection from '../components/PortfolioSection';
import Footer from '../components/Footer';
import StarryBackground from '../components/StarryBackground';
import ScrollToTop from '../components/ScrollToTop';

export default function Portfolio() {
  return (
    <div>
      <StarryBackground />
      <Navbar />
      <PortfolioSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
