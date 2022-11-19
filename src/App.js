import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import { About } from "./Pages/About";
import { Courses } from "./Pages/Courses";
import { Resources } from "./Pages/Resources";
import { OnlineLearning } from "./Pages/OnlineLearning";
import {Navbar} from './Pages/Navbar'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/OnlineLearning" element={<OnlineLearning />} />
        </Routes>
      </Router>
    </div>
  );
}
