import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { MdEmail, MdPhone } from "react-icons/md";
import "../App.css";

function Header() {
  return (
    <header className="nav-wrapper">
      <div className="nav-left">
        <motion.div
          className="typing-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          >
            <span className="typing">
              <Typewriter
                words={[ 'Learning', 'Growing', 'Building' ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1200}
              />
            </span>
          </motion.div>
      </div>

      <nav className="nav-center">
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/setup">Setup</Link></li>
        </ul>
      </nav>

      <div className="nav-right">
        <a href="mailto:cassy.ordonez@gmail.com" title="Email"><MdEmail size={22} /></a>
        <a href="tel:+12042308775" title="Phone"><MdPhone size={21} /></a>
      </div>
    </header>
  );
}

export default Header;