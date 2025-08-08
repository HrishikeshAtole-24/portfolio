import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return router.pathname === path;
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar-vertical ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container-vertical">
        <Link href="/home" className="logo-vertical" onClick={handleLinkClick}>
          H
        </Link>
        <ul className={`nav-menu-vertical ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          <li>
            <Link 
              href="/home"
              className={`nav-link-vertical ${isActive('/home') ? 'active' : ''}`}
              onClick={handleLinkClick}
              title="Home"
            >
              <span className="material-icons">home</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/expertise"
              className={`nav-link-vertical ${isActive('/expertise') ? 'active' : ''}`}
              onClick={handleLinkClick}
              title="My Expertise"
            >
              <span className="material-icons">rocket_launch</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/background"
              className={`nav-link-vertical ${isActive('/background') ? 'active' : ''}`}
              onClick={handleLinkClick}
              title="Background"
            >
              <span className="material-icons">school</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/services"
              className={`nav-link-vertical ${isActive('/services') ? 'active' : ''}`}
              onClick={handleLinkClick}
              title="Services"
            >
              <span className="material-icons">build</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/portfolio"
              className={`nav-link-vertical ${isActive('/portfolio') ? 'active' : ''}`}
              onClick={handleLinkClick}
              title="Portfolio"
            >
              <span className="material-icons">work</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/contact"
              className={`nav-link-vertical ${isActive('/contact') ? 'active' : ''}`}
              onClick={handleLinkClick}
              title="Get In Touch"
            >
              <span className="material-icons">email</span>
            </Link>
          </li>
        </ul>
        <div 
          className={`hamburger-vertical ${isMobileMenuOpen ? 'active' : ''}`} 
          id="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
