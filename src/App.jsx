import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Import Components
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

// Navigation Component
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <div className="logo-text">
            <span className="loom">LOOM</span>
            <span className="digitals">Digitals</span>
            <span className="ampersand">&</span>
            <span className="designs">Designs</span>
          </div>
        </Link>
        
        <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          <li className="appointment-btn">
            <Link to="/appointment" onClick={() => setIsMobileMenuOpen(false)}>
              <i className="fas fa-calendar-alt"></i> Book Appointment
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="loom">LOOM</span>
            <span className="digitals">Digitals</span>
            <span className="ampersand">&</span>
            <span className="designs">Designs</span>
          </div>
          <p className="footer-description">
            One company, two creative forces: Digital innovation meets architectural excellence.
          </p>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/loomdigitalsdesigns" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/loomdigitalsdesigns" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/loomdigitalsdesigns" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://t.me/LoomDigitalsandDesign" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-telegram"></i>
              </a>
              <a href="https://www.tiktok.com/@loomdigitalsdesigns" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Digital Marketing</li>
            <li>Web Development</li>
            <li>Architectural Design</li>
            <li>Interior Design</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> Addis Ababa, Bishoftu, Adama, Dire Dawa</li>
            <li><i className="fas fa-phone"></i> +251-987-38-66-03 </li>
            <li>
              <i className="fab fa-telegram"></i> 
              <a 
                href="https://t.me/LoomDigitalsandDesign" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{color: 'rgba(255, 255, 255, 0.9)'}}
              >
                @LoomDigitalsandDesign
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LoomDigitals & Designs. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
