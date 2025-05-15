import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitted: false
  });

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

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill out all required fields.',
        isError: true,
        isSubmitted: false
      });
      return;
    }

    // In a real implementation, you would send the form data to a server
    // For this demo, we'll just simulate a successful submission
    setFormStatus({
      message: 'Thank you for your message! I will get back to you soon.',
      isError: false,
      isSubmitted: true
    });

    // Clear form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <motion.div 
      className="contact-container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.section className="contact-header" variants={itemVariants}>
        <h1>Get In Touch</h1>
        <p>I'm always open to discussing new opportunities, projects, and ideas.</p>
      </motion.section>

      <div className="contact-content">
        <motion.div className="contact-info" variants={itemVariants}>
          <h2>Contact Information</h2>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p><a href="mailto:harshithamaganti24@gmail.com">harshithamaganti24@gmail.com</a></p>
            </div>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Location</h3>
              <p>Hyderabad, Telangana, India</p>
            </div>
          </div>

          {/* <div className="social-links">
            <h3>Social Connect</h3>
            <div className="social-icons">
              <a href="https://linkedin.com/in/harshitha-maganti" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://github.com/harshitha-maganti" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://instagram.com/harshitha_maganti" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </div> */}
        </motion.div>

        <motion.div className="contact-form-container" variants={itemVariants}>
          <h2>Send Me a Message</h2>
          
          {formStatus.isSubmitted && (
            <div className="form-success">
              <p>{formStatus.message}</p>
            </div>
          )}
          
          {(!formStatus.isSubmitted || formStatus.isError) && (
            <form className="contact-form" onSubmit={handleSubmit}>
              {formStatus.isError && (
                <div className="form-error">
                  <p>{formStatus.message}</p>
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
