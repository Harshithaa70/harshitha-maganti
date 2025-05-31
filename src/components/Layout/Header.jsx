import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import profilePic from '../../assets/profile_pic.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container header-container">
        <NavLink to="/" className="logo">
          <img src={profilePic} alt="Harshitha Maganti" />
          <span>Harshitha Maganti</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav>
          <ul className="nav-menu">
            <li>
              <NavLink to="/" className={({ isActive }) => (
                isActive ? "nav-link active" : "nav-link"
              )}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (
                isActive ? "nav-link active" : "nav-link"
              )}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" className={({ isActive }) => (
                isActive ? "nav-link active" : "nav-link"
              )}>
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink to="/certifications" className={({ isActive }) => (
                isActive ? "nav-link active" : "nav-link"
              )}>
                Certifications
              </NavLink>
            </li>
            <li>
              <NavLink to="/extracurricular" className={({ isActive }) => (
                isActive ? "nav-link active" : "nav-link"
              )}>
                Extracurricular
              </NavLink>
            </li>
            <li>
              <NavLink to="/recommendations" className={({ isActive }) => (
                isActive ? "nav-link active" : "nav-link"
              )}>
                Recommendations
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (
                isActive ? "nav-link active" : "nav-link"
              )}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <FaBars />
        </button>

        {/* Mobile Navigation */}
        <div
          className="mobile-nav"
          style={{ display: mobileMenuOpen ? 'flex' : 'none', flexDirection: 'column' }}
        >
          <button
            className="close-btn"
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          <ul className="mobile-nav-menu">
            <li>
              <NavLink to="/" className="mobile-nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="mobile-nav-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" className="mobile-nav-link">
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink to="/certifications" className="mobile-nav-link">
                Certifications
              </NavLink>
            </li>
            <li>
              <NavLink to="/extracurricular" className="mobile-nav-link">
                Extracurricular
              </NavLink>
            </li>
            <li>
              <NavLink to="/recommendations" className="mobile-nav-link">
                Recommendations
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="mobile-nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
