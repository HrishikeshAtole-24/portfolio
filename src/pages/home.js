import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import StarryBackground from '../components/StarryBackground';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  return (
    <div>
      <StarryBackground />
      <Navbar />
      <HomeSection />
      <AboutSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
