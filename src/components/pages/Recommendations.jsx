import { motion } from 'framer-motion';
import { FaLinkedin, FaQuoteLeft, FaUserTie } from 'react-icons/fa';
import recommendationImg from '../../assets/recommendation.png';

const Recommendations = () => {
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
            className="recommendations-container"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
        >
            <motion.section className="recommendations-header" variants={itemVariants}>
                <div className="section-header">
                    <FaUserTie className="header-icon" />
                    <h1>Professional Recommendations</h1>
                </div>
            </motion.section>

            <motion.section className="recommendations-content" variants={itemVariants}>
                <div className="recommendation-showcase">
                    <div className="recommendation-image-container">
                        <div className="image-frame">
                            <img
                                src={recommendationImg}
                                alt="LinkedIn Recommendation from Professor"
                                className="recommendation-img"
                            />
                        </div>
                        <div className="image-caption">
                            <FaLinkedin className="linkedin-icon" />
                            <span>LinkedIn Professional Recommendation</span>
                        </div>
                    </div>

                    <div className="recommendation-content">
                        <div className="recommendation-intro">
                            <div className="quote-decoration">
                                <FaQuoteLeft className="quote-icon" />
                            </div>
                            <h3>Academic Excellence Recognition</h3>
                            <p className="recommendation-subtitle">
                                Professional endorsement highlighting academic achievements and potential
                            </p>
                        </div>

                        <div className="recommendation-description">
                            <p>
                                This recommendation showcases professional feedback and assessment of my academic
                                performance, work ethic, and potential from a respected academic mentor. The
                                recommendation highlights key strengths and contributions made during my academic journey.
                            </p>
                        </div>

                        <div className="recommendation-highlights">
                            <h4>Key Strengths Highlighted:</h4>
                            <div className="highlights-grid">
                                <div className="highlight-item">
                                    <div className="highlight-icon">🎓</div>
                                    <span>Academic Excellence</span>
                                </div>
                                <div className="highlight-item">
                                    <div className="highlight-icon">💡</div>
                                    <span>Analytical Thinking</span>
                                </div>
                                <div className="highlight-item">
                                    <div className="highlight-icon">👥</div>
                                    <span>Leadership Potential</span>
                                </div>
                                <div className="highlight-item">
                                    <div className="highlight-icon">🗣️</div>
                                    <span>Communication Skills</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default Recommendations;
