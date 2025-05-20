import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaAward, FaCalendarAlt, FaMapMarkerAlt, FaCode, FaFileDownload } from 'react-icons/fa';

const Resume = () => {
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
      className="resume-container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.section className="resume-header" variants={itemVariants}>
        <h1>My Resume</h1>
        <p>An overview of my education, experience, and skills.</p>
      </motion.section>

      <motion.section className="education-section" variants={itemVariants}>
        <div className="section-header">
          <FaGraduationCap className="section-icon" />
          <h2>Education</h2>
        </div>
        
        <div className="resume-cards">
          <div className="resume-card">
            <div className="card-header">
              <h3>Bachelor of Business Administration</h3>
              <div className="card-meta">
                <span><FaCalendarAlt /> August 2022 - May 2025</span>
                <span><FaMapMarkerAlt /> Hyderabad, India</span>
              </div>
            </div>
            <div className="card-body">
              <h4>Mahindra University, School of Management</h4>
              <p>
                Mahindra University served as a foundation for advancing my technical proficiency and inspiring 
                a deep commitment to innovation and forward-thinking solutions.
              </p>
              <p><strong>CGPA:</strong> 6.5 (Till 6A)</p>
              <div className="course-section">
                <h5>Core Subjects:</h5>
                <ul className="course-list">
                  <li><span className="course-name">Story telling for business effectiveness</span> <span className="course-grade">A</span></li>
                  <li><span className="course-name">Analytics Social Data & Data Mining</span> <span className="course-grade">A</span></li>
                  <li><span className="course-name">Programming with Python</span> <span className="course-grade">B+</span></li>
                  <li><span className="course-name">Principle of Ecommerce & marketplace</span> <span className="course-grade">B+</span></li>
                  <li><span className="course-name">Online Advertising</span> <span className="course-grade">A</span></li>
                  <li><span className="course-name">Strategy and Business Policy</span> <span className="course-grade">B</span></li>
                  <li><span className="course-name">Warehousing, BI & Visualization</span> <span className="course-grade">A</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="resume-card">
            <div className="card-header">
              <h3>Higher Secondary Diploma</h3>
              <div className="card-meta">
                <span><FaCalendarAlt /> 2020 - 2022</span>
                <span><FaMapMarkerAlt /> Rajahmundry, India</span>
              </div>
            </div>
            <div className="card-body">
              <h4>The Future Kid's School</h4>
              <p>
                My foundational education at Future Kids School was instrumental in shaping my 
                ambition to build a career in Business.
                <br></br>
                <br></br>
                Stream- Mathematics, Economics, Commerce, Accounts.
                <br></br>
                Achieved 75% in 11th grade and 86.2% in 12 grade
              </p>
        </div>
        
        {/* <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>Digital Marketing & Sales Intern</h3>
            <h4>RK Honda</h4>
            <p className="timeline-date">June 1st - July 31st, 2024</p>
            <p>
              As a Marketing and Sales Intern, I supported various aspects of the company's marketing and sales operations:
            </p>
            <ul className="responsibility-list">
              <li>Supported lead generation through market research, customer outreach, and CRM updates</li>
              <li>Assisted in executing digital marketing campaigns and creating promotional content</li>
              <li>Analyzed engagement metrics to optimize marketing performance</li>
              <li>Collaborated with the sales team on preparing proposals and managing client communications</li>
              <li>Contributed to on-ground promotional activities</li>
            </ul>
            <p>
              This role enhanced my skills in communication, marketing analytics, and customer relationship management.
            </p>
          </div>
              <h4>RK Honda</h4>
              <p>
                As a Marketing and Sales Intern, I supported various aspects of the company's marketing and sales operations:
              </p>
              <ul className="responsibility-list">
                <li>Supported lead generation through market research, customer outreach, and CRM updates</li>
                <li>Assisted in executing digital marketing campaigns and creating promotional content</li>
                <li>Analyzed engagement metrics to optimize marketing performance</li>
                <li>Collaborated with the sales team on preparing proposals and managing client communications</li>
                <li>Contributed to on-ground promotional activities</li>
              </ul>
              <p>
                This role enhanced my skills in communication, marketing analytics, and customer relationship management.
              </p>
            </div> */}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section className="projects-section" variants={itemVariants}>
        <div className="section-header">
          <FaCode className="section-icon" />
          <h2>Projects</h2>
        </div>
        
        <div className="resume-cards">
          <div className="resume-card">
            <div className="card-header">
              <h3>IoT-Based Smart Home System</h3>
              <div className="card-meta">
                <span><FaCalendarAlt /> January 2025 - May 2025</span>
              </div>
            </div>
            <div className="card-body">
              <p>
                Developed a comprehensive IoT-based smart home system that integrates various sensors 
                and control mechanisms to enhance home security, energy efficiency, and convenience.
              </p>
              <ul className="project-highlights">
                <li>Implemented a network of temperature, motion, and light sensors using Arduino and Raspberry Pi</li>
                <li>Designed a mobile application interface for remote monitoring and control</li>
                <li>Integrated voice command capabilities through digital assistants</li>
                <li>Achieved 30% reduction in energy consumption through smart automation</li>
              </ul>              <div className="project-links">
                <a href="/src/assets/iot_project_pdf.pdf" target="_blank" className="project-link">
                  <FaFileDownload /> View Project Documentation
                </a>
              </div>
            </div>
          </div>

          <div className="resume-card">
            <div className="card-header">
              <h3>E-commerce Market Analysis Capstone Project</h3>
              <div className="card-meta">
                <span><FaCalendarAlt /> September 2024 - December 2024</span>
              </div>
            </div>
            <div className="card-body">
              <p>
                Conducted comprehensive market analysis for an e-commerce platform, focusing on 
                consumer behavior patterns, competitive landscape, and growth opportunities.
              </p>
              <ul className="project-highlights">
                <li>Analyzed 3+ years of sales data using Python and visualization tools</li>
                <li>Identified key market trends and consumer preferences across different demographics</li>
                <li>Developed strategic recommendations that led to 15% increase in customer retention</li>
                <li>Created interactive dashboards to visualize findings and support decision-making</li>
              </ul>
              <div className="project-links">
                <a href="/src/assets/capestone_project_pdf.pdf" target="_blank" className="project-link">
                  <FaFileDownload /> View Project Report
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="skills-section" variants={itemVariants}>
        <div className="section-header">
          <FaAward className="section-icon" />
          <h2>Skills & Competencies</h2>
        </div>
        
        <div className="skills-container">
          <div className="skill-category">
            <h3>Marketing</h3>
            <div className="skill-tags">
              <span className="skill-tag">Digital Marketing</span>
              <span className="skill-tag">Content Strategy</span>
              <span className="skill-tag">Market Research</span>
              <span className="skill-tag">Social Media Management</span>
              <span className="skill-tag">Campaign Analysis</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Analytics</h3>
            <div className="skill-tags">
              <span className="skill-tag">Data Mining</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Business Intelligence</span>
              <span className="skill-tag">Data Visualization</span>
              <span className="skill-tag">Marketing Analytics</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Business</h3>
            <div className="skill-tags">
              <span className="skill-tag">Strategic Planning</span>
              <span className="skill-tag">E-commerce</span>
              <span className="skill-tag">Business Development</span>
              <span className="skill-tag">CRM</span>
              <span className="skill-tag">Project Management</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Soft Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">Communication</span>
              <span className="skill-tag">Presentation</span>
              <span className="skill-tag">Team Leadership</span>
              <span className="skill-tag">Problem Solving</span>
              <span className="skill-tag">Storytelling</span>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Resume;
