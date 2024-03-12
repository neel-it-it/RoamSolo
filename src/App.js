import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Contact from "./components/Contact";
import About from "./components/About";
import Discover from "./components/discover/Discover";
import Detailcard from "./components/discover/Detailcard";
import Budget from "./components/budgettrack/Budget";
function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Discover" element={<Discover />} />
          <Route path="/Detailcard" element={<Detailcard />} />
          <Route path="/Budget" element={<Budget />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
