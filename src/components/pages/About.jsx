import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaChartLine, FaQuoteLeft, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import profilePic from '../../assets/profile_pic.png';
import recommendationImg from '../../assets/recommendation.png';

const About = () => {
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
      className="about-container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.section className="about-intro" variants={itemVariants}>
        <div className="about-image">
          <img src={profilePic} alt="Harshitha Maganti" />
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            I am Harshitha Maganti, a Business Administration graduate from Mahindra University's School of Management.
            My academic journey has equipped me with a strong foundation in business principles, with a particular focus on
            marketing analytics, data-driven decision making, and business strategy.
          </p>
          <p>
            My educational experience at Mahindra University has been instrumental in developing my technical proficiency
            and fostering a deep commitment to innovation and forward-thinking solutions in the business landscape.
          </p>
          <p>
            With practical experience through my internship at RK Honda in Digital Marketing & Sales,
            I've developed skills in lead generation, campaign execution, and analytics that complement my academic knowledge.
          </p>
        </div>
      </motion.section>

      <motion.section className="skills-section" variants={itemVariants}>
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <FaChartLine className="skill-icon" />
            <h3>Marketing Analytics</h3>
            <p>Data-driven campaign analysis, market research, and consumer behavior insights</p>
          </div>
          <div className="skill-card">
            <FaLaptopCode className="skill-icon" />
            <h3>Digital Marketing</h3>
            <p>Campaign planning, content creation, social media strategy, and performance optimization</p>
          </div>
          <div className="skill-card">
            <FaBriefcase className="skill-icon" />
            <h3>Business Strategy</h3>
            <p>Market analysis, competitive positioning, and strategic planning</p>
          </div>
          <div className="skill-card">
            <FaGraduationCap className="skill-icon" />
            <h3>Data Analysis</h3>
            <p>Python programming, data visualization, business intelligence, and data mining</p>
          </div>
        </div>
      </motion.section>

      <motion.section className="education-brief" variants={itemVariants}>
        <h2>Academic Background</h2>
        <div className="education-card">
          <div className="edu-content">
            <h3>Bachelor of Business Administration</h3>
            <h4>Mahindra University, School of Management</h4>
            <p className="edu-date">August 2022 - May 2025</p>
            <p>
              My studies at Mahindra University focused on core business principles with a specialization
              in data-driven marketing and business analytics. I've maintained a strong academic record
              while participating in various extracurricular activities that enhanced my leadership and
              teamwork skills.
            </p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;
