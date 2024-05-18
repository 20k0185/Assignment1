import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './Navbar';
import HomePage from './Home';
import Education from './Education';
import Project from './Project';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Certifications from './Certifications';
function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Certifications" element={<Certifications />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
