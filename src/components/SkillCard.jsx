import "./SkillCard.css";
import '../App.css';
import { motion } from 'framer-motion';

function SkillCard({ title, description, tools }) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    >
      <div className="skill-card">
        <h3>{title}</h3>
        <p>{description}</p>
        {tools && (
          <p><strong>Tools/Tech:</strong> {tools.join(", ")}</p>
        )}
      </div>
    </motion.div>
  );
}

export default SkillCard;