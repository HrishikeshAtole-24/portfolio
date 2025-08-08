import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import StarryBackground from '../components/StarryBackground';
import ScrollToTop from '../components/ScrollToTop';

export default function Contact() {
  return (
    <div>
      <StarryBackground />
      <Navbar />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
