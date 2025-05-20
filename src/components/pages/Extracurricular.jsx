import { motion } from 'framer-motion';
import { FaUsers, FaTrophy, FaHandsHelping, FaLightbulb } from 'react-icons/fa';
import DrawingSlideshow from '../DrawingSlideshow';

const Extracurricular = () => {
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

  // Activities data - these are examples since specific extracurricular
  // activities weren't provided in the about.txt file
  const activities = [
    {
      id: 1,
      category: "Leadership",
      title: "Marketing Club President",
      organization: "Mahindra University",
      period: "2023 - 2024",
      description: "Led a team of 15 members in organizing marketing workshops, guest speaker sessions, and case study competitions. Increased club membership by 30% through strategic outreach campaigns.",
      icon: <FaUsers className="activity-icon" />
    },
    {
      id: 2,
      category: "Competition",
      title: "Business Case Competition Finalist",
      organization: "National Business School Conference",
      period: "March 2024",
      description: "Developed and presented a comprehensive market entry strategy for a sustainable fashion brand, secured 2nd place among 50 participating teams from across the country.",
      icon: <FaTrophy className="activity-icon" />
    },
    {
      id: 3,
      category: "Volunteer",
      title: "Community Outreach Volunteer",
      organization: "Youth for Education",
      period: "2022 - Present",
      description: "Conduct weekly business fundamentals sessions for underprivileged high school students, mentoring over 30 students on career planning and financial literacy.",
      icon: <FaHandsHelping className="activity-icon" />
    },
    {
      id: 4,
      category: "Project",
      title: "Market Research Initiative",
      organization: "University Research Program",
      period: "2023",
      description: "Led a team in conducting comprehensive market research for local businesses, providing actionable insights that helped three small businesses improve their marketing strategies and customer engagement.",
      icon: <FaLightbulb className="activity-icon" />
    }
  ];

  return (
    <motion.div 
      className="extracurricular-container"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.section className="extracurricular-header" variants={itemVariants}>
        <h1>Extracurricular Activities</h1>
        <p>Beyond academics, I actively engage in various activities that enhance my leadership, teamwork, and practical business skills.</p>
      </motion.section>

      <motion.div className="activities-grid" variants={containerVariants}>
        {activities.map((activity) => (
          <motion.div 
            className="activity-card"
            key={activity.id}
            variants={itemVariants}
          >
            <div className="activity-icon-wrapper">
              {activity.icon}
            </div>
            <div className="activity-content">
              <span className="activity-category">{activity.category}</span>
              <h3>{activity.title}</h3>
              <h4>{activity.organization}</h4>
              <p className="activity-period">{activity.period}</p>
              <p className="activity-description">{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.section className="skills-development" variants={itemVariants}>
        <h2>Skills Developed Through Extracurricular Activities</h2>
        <div className="skills-container">
          <div className="skill-column">
            <h3>Leadership & Management</h3>
            <ul>
              <li>Team leadership and coordination</li>
              <li>Event planning and execution</li>
              <li>Resource allocation and budgeting</li>
              <li>Conflict resolution and problem-solving</li>
            </ul>
          </div>
          <div className="skill-column">
            <h3>Communication</h3>
            <ul>
              <li>Public speaking and presentations</li>
              <li>Business writing and reporting</li>
              <li>Stakeholder management</li>
              <li>Cross-functional collaboration</li>
            </ul>
          </div>
          <div className="skill-column">
            <h3>Professional Development</h3>
            <ul>
              <li>Networking and relationship building</li>
              <li>Time management and prioritization</li>
              <li>Adaptability and resilience</li>              <li>Creative problem-solving</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <DrawingSlideshow />
      </motion.section>
    </motion.div>
  );
};

export default Extracurricular;
