import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import { Courses } from "./Pages/Courses";
import Resources from "./Pages/Resource";
import { OnlineLearning } from "./Pages/OnlineLearning";
import {Navbar} from './Pages/Navbar'
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/OnlineLearning" element={<OnlineLearning />} />
        </Routes>
      </Router>
    </div>
  );
}
