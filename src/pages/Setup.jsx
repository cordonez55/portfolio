import { motion } from 'framer-motion';
import './Setup.css';

function Setup() {
  return (
    <motion.div
      className="setup-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>🧰 Developer Setup</h2>

      <div className="setup-grid">
        <div className="setup-card">
          <h3>🖥 Code Editor</h3>
          <p>
            I use <strong>VS Code</strong> for its extensions, built-in terminal, and how it integrates with GitHub and React.
          </p>
        </div>

        <div className="setup-card">
          <h3>💻 Terminal & CLI</h3>
          <p>
            Mostly use <strong>PowerShell</strong> with VS Code's integrated terminal. I look up CLI commands often, but I’m improving.
          </p>
        </div>

        <div className="setup-card">
          <h3>🔤 Editor Font</h3>
          <p>
            I currently use the default font in VS Code, but I’m curious about fonts like Fira Code that help with readability.
          </p>
        </div>

        <div className="setup-card">
          <h3>🌱 Challenges & Growth</h3>
          <p>
            Coming from a non-dev background, I struggled with Git, terminal, and Docker — but committed to improving every project. I'm proud of the progress.
          </p>
        </div>
      </div>

      <div className="setup-reflection">
        <p>💡 “You don’t need to know everything. You just need to be willing to learn.”</p>
      </div>
    </motion.div>
  );
}

export default Setup;
