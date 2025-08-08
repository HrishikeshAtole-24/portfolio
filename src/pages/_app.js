import Head from 'next/head';
import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Hrishikesh Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
