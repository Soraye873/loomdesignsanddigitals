// pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="hero" style={{padding: '80px 0', background: 'linear-gradient(135deg, var(--light-orange) 0%, var(--white) 100%)'}}>
        <div className="container">
          <h1 style={{textAlign: 'center', fontSize: '3rem', color: 'var(--dark-blue)'}}>About Our Dual-Expertise Company</h1>
          <p style={{textAlign: 'center', maxWidth: '800px', margin: '20px auto', fontSize: '1.2rem'}}>
            LoomDigitals & Designs represents a unique fusion of digital innovation and architectural excellence, providing comprehensive solutions for the modern world.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Story</h2>
            <p>How we became one company with two powerful specialties</p>
          </div>
          
          <div style={{maxWidth: '900px', margin: '0 auto'}}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '50px', flexWrap: 'wrap', gap: '30px'}}>
              <div style={{flex: '1', minWidth: '300px'}}>
                <h3 style={{color: 'var(--dark-blue)', marginBottom: '20px'}}>The Beginning</h3>
                <p style={{marginBottom: '15px'}}>
                  Founded in 2024, LoomDigitals started as a digital marketing agency helping businesses establish their online presence. Meanwhile, LoomDesigns was an architectural firm creating beautiful, functional spaces.
                </p>
                <p style={{marginBottom: '15px'}}>
                  In 2026, we realized that our clients often needed both digital and physical design services. Many businesses wanted their physical spaces to reflect their digital brand identity, and vice versa.
                </p>
              </div>
              <div style={{flex: '1', minWidth: '300px', textAlign: 'center'}}>
                <div style={{fontSize: '5rem', color: 'var(--primary-blue)'}}>2024</div>
              </div>
            </div>
            
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '50px', flexWrap: 'wrap-reverse', gap: '30px'}}>
              <div style={{flex: '1', minWidth: '300px', textAlign: 'center'}}>
                <div style={{fontSize: '5rem', color: 'var(--primary-orange)'}}>2026</div>
              </div>
              <div style={{flex: '1', minWidth: '300px'}}>
                <h3 style={{color: 'var(--dark-blue)', marginBottom: '20px'}}>The Fusion</h3>
                <p style={{marginBottom: '15px'}}>
                  Recognizing the synergy between digital and physical design, we merged our expertise into one company: LoomDigitals & Designs. This unique structure allows us to offer integrated solutions while maintaining deep specialization in each field.
                </p>
                <p>
                  Our teams collaborate to ensure brand consistency across all touchpoints from your website to your workspace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Teams */}
      <section className="section" style={{backgroundColor: 'var(--light-gray)'}}>
        <div className="container">
          <div className="section-title">
            <h2>Our Specialized Teams</h2>
            <p>Two teams, one mission: Creating excellence in both digital and physical realms</p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px'}}>
            <div className="team-card" style={{backgroundColor: 'var(--white)', borderRadius: '10px', padding: '30px', boxShadow: 'var(--shadow)'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <div style={{width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px'}}>
                  <i className="fas fa-laptop-code" style={{fontSize: '1.8rem', color: 'var(--primary-blue)'}}></i>
                </div>
                <div>
                  <h3 style={{color: 'var(--dark-blue)'}}>LoomDigitals Team</h3>
                  <p style={{color: 'var(--primary-blue)', fontWeight: '600'}}>Digital Specialists</p>
                </div>
              </div>
              <p style={{marginBottom: '20px'}}>
                Our digital team consists of web developers, graphic designers, social media strategists, and digital marketers who are passionate about creating engaging online experiences.
              </p>
              <ul style={{listStyle: 'none'}}>
                <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--primary-blue)', marginRight: '10px'}}></i>
                  <span>15+ team members</span>
                </li>
                <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--primary-blue)', marginRight: '10px'}}></i>
                  <span>So manys digital projects completed</span>
                </li>
                <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--primary-blue)', marginRight: '10px'}}></i>
                  <span>Expertise in 10+ digital platforms</span>
                </li>
              </ul>
            </div>
            
            <div className="team-card" style={{backgroundColor: 'var(--white)', borderRadius: '10px', padding: '30px', boxShadow: 'var(--shadow)'}}>
              <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <div style={{width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--light-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px'}}>
                  <i className="fas fa-drafting-compass" style={{fontSize: '1.8rem', color: 'var(--primary-orange)'}}></i>
                </div>
                <div>
                  <h3 style={{color: 'var(--dark-blue)'}}>LoomDesigns Team</h3>
                  <p style={{color: 'var(--primary-orange)', fontWeight: '600'}}>Architecture & Design Specialists</p>
                </div>
              </div>
              <p style={{marginBottom: '20px'}}>
                Our design team includes licensed architects, interior designers, project managers, and construction specialists dedicated to creating beautiful, functional spaces.
              </p>
              <ul style={{listStyle: 'none'}}>
                <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--primary-orange)', marginRight: '10px'}}></i>
                  <span>12+ team members</span>
                </li>
                <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--primary-orange)', marginRight: '10px'}}></i>
                  <span>many design projects completed</span>
                </li>
                <li style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                  <i className="fas fa-check-circle" style={{color: 'var(--primary-orange)', marginRight: '10px'}}></i>
                  <span>Licensed in different cities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The principles that guide both our digital and design teams</p>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
            <div style={{textAlign: 'center', padding: '30px 20px'}}>
              <div style={{width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'}}>
                <i className="fas fa-handshake" style={{fontSize: '2rem', color: 'var(--primary-blue)'}}></i>
              </div>
              <h3 style={{marginBottom: '15px', color: 'var(--dark-blue)'}}>Collaboration</h3>
              <p>We believe the best solutions come from teamwork both within our divisions and with our clients.</p>
            </div>
            
            <div style={{textAlign: 'center', padding: '30px 20px'}}>
              <div style={{width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--light-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'}}>
                <i className="fas fa-lightbulb" style={{fontSize: '2rem', color: 'var(--primary-orange)'}}></i>
              </div>
              <h3 style={{marginBottom: '15px', color: 'var(--dark-blue)'}}>Innovation</h3>
              <p>We stay at the forefront of both digital technology and architectural design trends.</p>
            </div>
            
            <div style={{textAlign: 'center', padding: '30px 20px'}}>
              <div style={{width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'}}>
                <i className="fas fa-bullseye" style={{fontSize: '2rem', color: 'var(--primary-blue)'}}></i>
              </div>
              <h3 style={{marginBottom: '15px', color: 'var(--dark-blue)'}}>Excellence</h3>
              <p>We're committed to delivering exceptional quality in every project, whether digital or physical.</p>
            </div>
            
            <div style={{textAlign: 'center', padding: '30px 20px'}}>
              <div style={{width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--light-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'}}>
                <i className="fas fa-sync-alt" style={{fontSize: '2rem', color: 'var(--primary-orange)'}}></i>
              </div>
              <h3 style={{marginBottom: '15px', color: 'var(--dark-blue)'}}>Integration</h3>
              <p>We ensure seamless harmony between digital and physical brand experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;