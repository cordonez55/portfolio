import ProjectCard from "../components/ProjectCard";
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "Hana Press - Art Shop",
      description: "A Rails-based digital art store with product listings and a clean layout.",
      image: "http://via.placeholder.com/150",
      link: "#",
      tech: ["Ruby on Rails", "HTML", "CSS"],
    },
    {
      title: "Web Security labs",
      description: "DWVA and WebGoat vulnerability analysis with ethical hacking tools.",
      link: "#",
      tech: ["Debian", "Apache", "PHP", "Kali Linux"],
    },
    {
      title: "Jordan Blog Site",
      description: "A blog-style site featuring Air Jordan sheos and sneaker releases.",
      image: "https://via.palceholder.com/150",
      link: "#",
      tech: ["React", "CSS", "JS"],
    },
  ];

  return (
    <motion.div
    className="section-container"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    >
      <div>
        <h2>Project Page</h2>
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;