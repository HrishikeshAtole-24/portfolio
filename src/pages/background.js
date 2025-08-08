import Navbar from '../components/Navbar';
import EducationSection from '../components/EducationSection';
import Footer from '../components/Footer';
import StarryBackground from '../components/StarryBackground';
import ScrollToTop from '../components/ScrollToTop';

export default function Background() {
  return (
    <div>
      <StarryBackground />
      <Navbar />
      <EducationSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
