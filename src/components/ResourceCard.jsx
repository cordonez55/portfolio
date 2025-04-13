import "./ResourceCard.css";
import '../App.css';
import { motion } from 'framer-motion';

function ResourceCard ({ title, summary, link, image }) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    >
      <div className="resource-card">
        <img src={image} alt={title} className="resource-image" />
        <div className="resource-content">
          <h3>{title}</h3>
          <p>{summary}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">View Resource</a>
        </div>
      </div>
    </motion.div>
  );
}

export default ResourceCard;