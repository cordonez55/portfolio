import "./ProjectCard.css";
import '../App.css';
import { motion } from 'framer-motion';

function ProjectCard({ title, description, image, link, tech }) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    >
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <div className="project-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <p><strong>Tech:</strong> {tech.join(", ")}</p>
          {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;