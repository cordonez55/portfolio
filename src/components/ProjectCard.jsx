import "./ProjectCard.css";

function ProjectCard({ title, description, image, link, tech }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Tech:</strong> {tech.join(", ")}</p>
        {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
      </div>
    </div>
  );
}

export default ProjectCard;