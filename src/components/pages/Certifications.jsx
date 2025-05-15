import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import CertificateModal from '../CertificateModal';
import harvardCert from '../../assets/harvard_business_case_development_cert.jpeg';
import whartonCert from '../../assets/wharton_introduction_to_marketing_cert.jpeg';
import udemyCert from '../../assets/udemy_digital_marketing_course_dcert.jpeg';
import fundacaoCert from '../../assets/fundacao_macro_economics_cert.jpeg';
import hondaCert from '../../assets/honda_internship_cert.jpeg';

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
  };

  const closeCertificateModal = () => {
    setModalOpen(false);
  };
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2,
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

  // Certification data
  const certifications = [
    {
      id: 1,
      title: "Business Case Development",
      issuer: "Harvard Business School Online",
      date: "March 2024",
      description: "Developed expertise in creating comprehensive business cases, analyzing market opportunities, and presenting actionable business strategies using Harvard's case method approach.",
      image: harvardCert,
      link: "#"
    },
    {
      id: 2,
      title: "Introduction to Marketing",
      issuer: "Wharton Online, University of Pennsylvania",
      date: "January 2024",
      description: "Gained foundational knowledge in key marketing concepts, consumer behavior analysis, market research, and strategic marketing planning from Wharton's renowned business faculty.",
      image: whartonCert,
      link: "#"
    },
    {
      id: 3,
      title: "Digital Marketing Specialization",
      issuer: "Udemy",
      date: "November 2023",
      description: "Comprehensive training in digital marketing channels, SEO, content marketing, social media strategy, PPC campaigns, and analytics tools for measuring marketing performance.",
      image: udemyCert,
      link: "#"
    },
    {
      id: 4,
      title: "Macroeconomics and Global Markets",
      issuer: "Fundação Getulio Vargas",
      date: "August 2023",
      description: "Studied macroeconomic principles, international trade dynamics, global market analysis, and economic policy impacts on business environments.",
      image: fundacaoCert,
      link: "#"
    },
    {
      id: 5,
      title: "Internship Completion",
      issuer: "RK Honda",
      date: "July 2024",
      description: "Successfully completed a two-month Digital Marketing & Sales internship, contributing to lead generation, campaign execution, and sales support operations.",
      image: hondaCert,
      link: "#"
    }
  ];

  return (
    <motion.div 
      className="certifications-container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.section className="certifications-header" variants={itemVariants}>
        <h1>
          <FaCertificate className="header-icon" />
          Certifications & Credentials
        </h1>
        <p>Professional development courses and certifications I've completed to enhance my business knowledge and skills.</p>
      </motion.section>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <motion.div 
            className="certification-card"
            key={cert.id}
            variants={itemVariants}
          >
            <div className="cert-image">
              <img src={cert.image} alt={`${cert.title} Certificate`} />
              <div className="cert-overlay">
                <button onClick={() => openCertificateModal(cert)} className="view-cert-btn">
                  View Certificate <FaExternalLinkAlt className="btn-icon" />
                </button>
              </div>
            </div>
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <h4>{cert.issuer}</h4>
              <p className="cert-date">{cert.date}</p>
              <p className="cert-description">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Certificate Modal */}
      <AnimatePresence>
        {modalOpen && (
          <CertificateModal 
            isOpen={modalOpen} 
            certificate={selectedCertificate}
            onClose={closeCertificateModal}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Certifications;
