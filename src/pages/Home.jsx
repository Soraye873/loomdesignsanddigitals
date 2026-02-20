// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Creative Solutions for <span>Digital & Physical Spaces</span></h1>
            <p>
              LoomDigitals & Designs is a unique company with two specialized divisions: 
              LoomDigitals for digital marketing, web development, and graphic design, 
              and LoomDesigns for architectural, interior design, and construction services.
            </p>
            <div className="cta-buttons">
              <Link to="/services" className="btn btn-primary">Explore Our Services</Link>
              <Link to="/appointment" className="btn btn-secondary">Book a Consultation</Link>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="dual-image-container">
              <div className="image-card digital-card">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Digital Workspace" />
                <div className="image-label digital-label">LoomDigitals Team</div>
              </div>
              <div className="image-card design-card">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Architectural Design" />
                <div className="image-label design-label">LoomDesigns Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="section services-preview">
        <div className="container">
          <div className="section-title">
            <h2>Our Comprehensive Services</h2>
            <p>We offer end-to-end solutions for both digital and physical environments, ensuring your brand and spaces work harmoniously together.</p>
          </div>
          
          <div className="services-container">
            <div className="service-card digital-service">
              <div className="service-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="service-content">
                <h3>LoomDigitals: Digital Solutions</h3>
                <p>Our digital team specializes in creating powerful online presences that drive growth and engagement.</p>
                <ul>
                  <li>Social Media Management & Strategy</li>
                  <li>Website Development & E-commerce</li>
                  <li>Graphic Design & Branding</li>
                  <li>Digital Marketing & SEO</li>
                  <li>Content Creation & Video Production</li>
                </ul>
                <Link to="/services#digital" className="btn btn-primary" style={{marginTop: '20px'}}>Learn More</Link>
              </div>
            </div>
            
            <div className="service-card design-service">
              <div className="service-icon">
                <i className="fas fa-drafting-compass"></i>
              </div>
              <div className="service-content">
                <h3>LoomDesigns: Architectural Solutions</h3>
                <p>Our design team transforms spaces into functional, beautiful environments that inspire and serve.</p>
                <ul>
                  <li>Architectural Design & Planning</li>
                  <li>Interior Design & Space Optimization</li>
                  <li>Construction & Project Management</li>
                  <li>3D Visualization & Renderings</li>
                  <li>Renovation & Remodeling Services</li>
                </ul>
                <Link to="/services#design" className="btn btn-primary" style={{marginTop: '20px', backgroundColor: 'var(--primary-orange)'}}>Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Divisions */}
      <section className="section company-divisions">
        <div className="container">
          <div className="section-title">
            <h2>One Company, Two Specialized Divisions</h2>
            <p>Our unique structure allows us to offer comprehensive solutions while maintaining deep expertise in each field.</p>
          </div>
          
          <div className="divisions-container">
            <div className="division-card digital-division">
              <div className="division-icon">
                <i className="fas fa-bullhorn"></i>
              </div>
              <h3>LoomDigitals</h3>
              <p>Focused on digital innovation, we build brands online with cutting-edge technology and creative strategies that deliver measurable results.</p>
              <div className="division-services">
                <span className="service-tag">Social Media</span>
                <span className="service-tag">Web Development</span>
                <span className="service-tag">Graphic Design</span>
                <span className="service-tag">Digital Marketing</span>
                <span className="service-tag">SEO</span>
              </div>
            </div>
            
            <div className="division-card design-division">
              <div className="division-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>LoomDesigns</h3>
              <p>Dedicated to spatial excellence, we create environments that balance aesthetics, functionality, and sustainability for residential and commercial clients.</p>
              <div className="division-services">
                <span className="service-tag">Architectural Design</span>
                <span className="service-tag">Interior Design</span>
                <span className="service-tag">Construction</span>
                <span className="service-tag">Space Planning</span>
                <span className="service-tag">Project Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section" style={{backgroundColor: 'var(--light-blue)', textAlign: 'center'}}>
        <div className="container">
          <h2 style={{fontSize: '2.2rem', marginBottom: '20px', color: 'var(--dark-blue)'}}>Ready to Transform Your Digital Presence or Physical Space?</h2>
          <p style={{maxWidth: '700px', margin: '0 auto 30px', fontSize: '1.1rem'}}>
            Whether you need a stunning website or a beautiful building, our dual-expertise approach ensures seamless integration between your digital and physical brand identity.
          </p>
          <div className="cta-buttons" style={{justifyContent: 'center'}}>
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            <Link to="/appointment" className="btn btn-secondary">Schedule a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;