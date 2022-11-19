import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav id="navbar">
      <a href="/">
      <img
        src="https://assets.website-files.com/624fc1340c9d763a3cb1ead3/624fc4f40c9d769a31b207ee_Logo%20(3).png"
        />
      </a>
      <ul id="navlist">
        <Link className="link" to="/About">About Us</Link>
        <Link className="link" to="/Courses">Courses</Link>
        <Link className="link" to="/Resources">Resources</Link>
        <Link className="link" to="/OnlineLearning">Online Learning</Link>
      </ul>
      <button className="btn">Log in</button>
    </nav>
  );
};
