import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const CertificateModal = ({ isOpen, certificate, onClose }) => {
  if (!isOpen) return null;

  // Modal animation
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { 
      y: "-100vh", 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 25
      } 
    },
    exit: { 
      y: "100vh", 
      opacity: 0,
      transition: { 
        ease: "easeInOut" 
      } 
    }
  };

  // Close modal when clicking outside or pressing ESC
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div 
      className="modal-backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={handleBackdropClick}
    >
      <motion.div 
        className="certificate-modal"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-header">
          <h3>{certificate.title}</h3>
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="modal-body">
          <div className="cert-preview-wrapper">
            <img 
              src={certificate.image} 
              alt={`${certificate.title} Certificate`} 
              className="cert-preview"
            />
          </div>
          <div className="cert-details">
            <h4>{certificate.issuer}</h4>
            <p className="cert-date">{certificate.date}</p>
            <p className="cert-description">{certificate.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificateModal;
