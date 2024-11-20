import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import Home from "./Home";  // Import Home component
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
