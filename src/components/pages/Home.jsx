import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import profilePic from '../../assets/profile_pic.png';

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.3,
        duration: 0.6 
      } 
    },
    exit: { 
      opacity: 0, 
      transition: { 
        duration: 0.5 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <motion.div 
      className="home-container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="hero-section">
        <motion.div className="hero-content" variants={itemVariants}>
          <h1>Harshitha Maganti</h1>
          <h2>Business Administration Graduate</h2>
          <p>Passionate about marketing, data analytics, and business strategy</p>
          <div className="cta-buttons">
            <Link to="/about" className="primary-btn">
              Learn More <FaArrowRight className="icon-right" />
            </Link>
            <Link to="/contact" className="secondary-btn">
              Get in Touch
            </Link>
          </div>
        </motion.div>
        
        <motion.div className="hero-image" variants={itemVariants}>
          <img src={profilePic} alt="Harshitha Maganti" />
        </motion.div>
      </div>

      <motion.div className="home-highlights" variants={itemVariants}>
        <div className="highlight-card">
          <h3>Education</h3>
          <p>BBA at Mahindra University with focus on marketing and analytics.</p>
          <Link to="/resume">View Resume <FaArrowRight className="icon-right-sm" /></Link>
        </div>

        <div className="highlight-card">
          <h3>Experience</h3>
          <p>Digital Marketing & Sales Intern at RK Honda developing practical industry skills.</p>
          <Link to="/resume">See Details <FaArrowRight className="icon-right-sm" /></Link>
        </div>

        <div className="highlight-card">
          <h3>Certifications</h3>
          <p>Professional credentials from Harvard Business, Wharton, and more.</p>
          <Link to="/certifications">View All <FaArrowRight className="icon-right-sm" /></Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
