import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Harshitha Maganti</h3>
            <p>Business Administration Graduate</p>
            <p>Hyderabad, India</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#/">Home</a></li>
              <li><a href="#/about">About</a></li>
              <li><a href="#/resume">Resume</a></li>
              <li><a href="#/contact">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Harshitha Maganti. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
