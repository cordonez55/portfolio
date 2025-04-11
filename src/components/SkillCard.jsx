import "./SkillCard.css";

function SkillCard({ title, description, tools }) {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {tools && (
        <p><strong>Tools/Tech:</strong> {tools.join(", ")}</p>
      )}
    </div>
  );
}

export default SkillCard;