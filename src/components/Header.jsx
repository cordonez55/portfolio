import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none"}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/setup">Setup</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;