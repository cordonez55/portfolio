import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";

function Skills () {
  const skills = [
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
      title: "Communication & Documentation",
      description: "Skilled in writing BRDs, use cases and stakeholder-focussed documents.",
      tools: ["Volere", "MS Word", "Lucidchart"],
    },
  ];

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    >
      <div>
        <h2>Skills</h2>
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill}/>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;