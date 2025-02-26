import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header';
import './App.css';
import MyProjects from './components/myProjects/myProjects';
import About from './components/about/about';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/my-portfolio" element={<Home />} />
          <Route path="/my-portfolio/my-projects" element={<MyProjects />} />
          <Route path="/my-portfolio/about-me" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
