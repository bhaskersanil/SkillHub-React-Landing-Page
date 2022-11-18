import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/About">About</Link>
      <Link to="/Courses">Courses</Link>
      <Link to="/Resources">Resources</Link>
      <Link to="/OnlineLearning">OnlineLearning</Link>
    </div>
  );
};
