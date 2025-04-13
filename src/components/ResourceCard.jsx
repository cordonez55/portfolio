import "./ResourceCard.css";
import '../App.css';

function ResourceCard ({ title, summary, link, image }) {
  return (
    <div className="resource-card">
      <img src={image} alt={title} className="resource-image" />
      <div className="resource-content">
        <h3>{title}</h3>
        <p>{summary}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">View Resource</a>
      </div>
    </div>
  );
}

export default ResourceCard;