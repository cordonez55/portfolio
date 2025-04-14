import { motion } from "framer-motion";
import './Skills.css';


const techSkills = [
    {
      title: "Frontend Development",
      description: "Experience building responsive UIs using modern frameworks.",
      tools: ["React", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Backend & Server Setup",
      description: "Comfortable setting up and maintaining web servers and APIs.",
      tools: ["Node.js", "Ruby on Rails", "Debian", "Apache", "MySQL"]
    },
    {
      title: "Version Control & DevOps",
      description: "Familiar with CI/CD workflows, Git and containerization.",
      tools: ["GitHub", "Git", "Docker"],
    },
    {
      title: "Cybersecurity Awareness",
      description: "Tested common vulnerabilities using DVWA and WebGoat.",
      tools: ["Kali Linux", "Burp Suite", "OWASP Tools"],
    },
    {
      title: "Technical Documentation",
      description: "Writing BRDs, stakeholder docs and diagrams.",
      tools: ["Volere", "MS Word", "Lucidchart"],
    },
    {
      title: "Database & CLI",
      description: "Working with mySQL and Linus CLI.",
      tools: ["MySQL, Debian, Bash"],
    },
  ];

  const softSkills = [
    { title: "Communication", description: "Clear written and verbal communication." },
    { title: "Problem-Solving", description: "Logical thinking and solution-focused" },
    { title: "Teamwork", description: "Collaboration across disciplines and roels" },
    { title: "Adaptability", description: "Learning quickly and adjusting to new tech." },
    { title: "Organization", description: "Managing time, files and projects effectively" },
    { title: "Initiative", description: "Taking ownership and driving tasks forward." },
  ];

  function Skills() {
    return (
      <motion.div
      className="section-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      >
        <h2><span>🛠</span> Tech Skills</h2>
        <div className="skills-grid">
          {techSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <p><strong>Tools/Tech:</strong> {skill.tools}</p>
            </div>
          ))}
        </div>

        <h2 style={{ marginTop: "3rem" }}><span>💬</span> Soft Skills</h2>
        <div className="skills-grid">
          {softSkills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }


export default Skills;