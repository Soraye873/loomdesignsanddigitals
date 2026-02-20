// pages/Services.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState('digital');
  
  const digitalServices = [
    {
      title: "Social Media Management",
      description: "Comprehensive social media strategy, content creation, and community management across all major platforms.",
      icon: "fas fa-hashtag",
      details: ["Strategy Development", "Content Calendar", "Community Management", "Performance Analytics"]
    },
    {
      title: "Web Development",
      description: "Custom website design and development, e-commerce solutions, and mobile-responsive designs.",
      icon: "fas fa-code",
      details: ["Custom Websites", "E-commerce Platforms", "Mobile Optimization", "Website Maintenance"]
    },
    {
      title: "Graphic Design",
      description: "Brand identity design, marketing materials, digital graphics, and print design services.",
      icon: "fas fa-palette",
      details: ["Logo & Branding", "Marketing Materials", "Digital Graphics", "Print Design"]
    },
    {
      title: "Digital Marketing",
      description: "SEO optimization, PPC advertising, email marketing campaigns, and digital strategy.",
      icon: "fas fa-chart-line",
      details: ["SEO Services", "PPC Management", "Email Marketing", "Content Strategy"]
    },
    {
      title: "Content Creation",
      description: "Professional photography, videography, copywriting, and multimedia content production.",
      icon: "fas fa-video",
      details: ["Photography", "Videography", "Copywriting", "Multimedia Content"]
    }
  ];
  
  const designServices = [
    {
      title: "Architectural Design",
      description: "Complete architectural services from concept to construction documents for residential and commercial projects.",
      icon: "fas fa-building",
      details: ["Concept Development", "Construction Documents", "Permit Acquisition", "Architectural Visualization"]
    },
    {
      title: "Interior Design",
      description: "Space planning, material selection, furniture specification, and interior styling services.",
      icon: "fas fa-couch",
      details: ["Space Planning", "Material Selection", "Furniture Specification", "Interior Styling"]
    },
    {
      title: "Construction Management",
      description: "Full-service construction oversight, contractor coordination, and project management.",
      icon: "fas fa-hard-hat",
      details: ["Project Management", "Contractor Coordination", "Quality Control", "Budget Management"]
    },
    {
      title: "3D Visualization",
      description: "Photorealistic 3D renderings, virtual tours, and architectural animations.",
      icon: "fas fa-cube",
      details: ["3D Renderings", "Virtual Tours", "Architectural Animation", "VR Experiences"]
    },
    {
      title: "Renovation & Remodeling",
      description: "Transformation of existing spaces with innovative design and careful attention to structural integrity.",
      icon: "fas fa-home",
      details: ["Space Transformation", "Structural Updates", "Modernization", "Historic Preservation"]
    }
  ];
  
  return (
    <div className="services-page">
      {/* Services Hero */}
      <section className="hero" style={{padding: '80px 0', background: 'linear-gradient(135deg, var(--light-blue) 0%, var(--white) 100%)'}}>
        <div className="container">
          <h1 style={{textAlign: 'center', fontSize: '3rem', color: 'var(--dark-blue)'}}>Our Dual Expertise Services</h1>
          <p style={{textAlign: 'center', maxWidth: '800px', margin: '20px auto', fontSize: '1.2rem'}}>
            Choose from our comprehensive range of digital and architectural services. Our unique structure allows us to offer specialized expertise in both fields.
          </p>
        </div>
      </section>
      
      {/* Services Tabs */}
      <section className="section">
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '40px'}}>
            <div style={{display: 'flex', backgroundColor: 'var(--light-gray)', borderRadius: '10px', padding: '5px', maxWidth: '500px', width: '100%'}}>
              <button 
                onClick={() => setActiveTab('digital')}
                style={{
                  flex: 1,
                  padding: '15px 20px',
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: activeTab === 'digital' ? 'var(--primary-blue)' : 'transparent',
                  color: activeTab === 'digital' ? 'var(--white)' : 'var(--dark-gray)',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                <i className="fas fa-laptop-code" style={{marginRight: '10px'}}></i>
                LoomDigitals Services
              </button>
              <button 
                onClick={() => setActiveTab('design')}
                style={{
                  flex: 1,
                  padding: '15px 20px',
                  border: 'none',
                  borderRadius: '8px',
                  backgroundColor: activeTab === 'design' ? 'var(--primary-orange)' : 'transparent',
                  color: activeTab === 'design' ? 'var(--white)' : 'var(--dark-gray)',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                <i className="fas fa-drafting-compass" style={{marginRight: '10px'}}></i>
                LoomDesigns Services
              </button>
            </div>
          </div>
          
          {/* Digital Services */}
          {activeTab === 'digital' && (
            <div id="digital">
              <div className="section-title">
                <h2 style={{color: 'var(--primary-blue)'}}>LoomDigitals: Digital Solutions</h2>
                <p>Comprehensive digital services to build, grow, and optimize your online presence</p>
              </div>
              
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
                {digitalServices.map((service, index) => (
                  <div key={index} style={{backgroundColor: 'var(--white)', borderRadius: '10px', overflow: 'hidden', boxShadow: 'var(--shadow)', transition: 'var(--transition)', borderTop: `5px solid var(--primary-blue)`}}>
                    <div style={{padding: '30px'}}>
                      <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                        <div style={{width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--light-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px'}}>
                          <i className={service.icon} style={{fontSize: '1.5rem', color: 'var(--primary-blue)'}}></i>
                        </div>
                        <h3 style={{color: 'var(--dark-blue)'}}>{service.title}</h3>
                      </div>
                      <p style={{marginBottom: '20px'}}>{service.description}</p>
                      <ul style={{listStyle: 'none'}}>
                        {service.details.map((detail, i) => (
                          <li key={i} style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                            <i className="fas fa-check" style={{color: 'var(--primary-blue)', marginRight: '10px', fontSize: '0.9rem'}}></i>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{padding: '20px 30px', backgroundColor: 'var(--light-blue)', textAlign: 'center'}}>
                      <Link to="/appointment" className="btn btn-primary">Get This Service</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Design Services */}
          {activeTab === 'design' && (
            <div id="design">
              <div className="section-title">
                <h2 style={{color: 'var(--primary-orange)'}}>LoomDesigns: Architectural Solutions</h2>
                <p>Complete architectural, interior design, and construction services for residential and commercial spaces</p>
              </div>
              
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px'}}>
                {designServices.map((service, index) => (
                  <div key={index} style={{backgroundColor: 'var(--white)', borderRadius: '10px', overflow: 'hidden', boxShadow: 'var(--shadow)', transition: 'var(--transition)', borderTop: `5px solid var(--primary-orange)`}}>
                    <div style={{padding: '30px'}}>
                      <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                        <div style={{width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--light-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '15px'}}>
                          <i className={service.icon} style={{fontSize: '1.5rem', color: 'var(--primary-orange)'}}></i>
                        </div>
                        <h3 style={{color: 'var(--dark-blue)'}}>{service.title}</h3>
                      </div>
                      <p style={{marginBottom: '20px'}}>{service.description}</p>
                      <ul style={{listStyle: 'none'}}>
                        {service.details.map((detail, i) => (
                          <li key={i} style={{marginBottom: '10px', display: 'flex', alignItems: 'center'}}>
                            <i className="fas fa-check" style={{color: 'var(--primary-orange)', marginRight: '10px', fontSize: '0.9rem'}}></i>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div style={{padding: '20px 30px', backgroundColor: 'var(--light-orange)', textAlign: 'center'}}>
                      <Link to="/appointment" className="btn btn-primary" style={{backgroundColor: 'var(--primary-orange)'}}>Get This Service</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Combined Services CTA */}
          <div style={{marginTop: '60px', textAlign: 'center'}}>
            <h3 style={{fontSize: '1.8rem', color: 'var(--dark-blue)', marginBottom: '20px'}}>Need Both Digital and Design Services?</h3>
            <p style={{maxWidth: '700px', margin: '0 auto 30px', fontSize: '1.1rem'}}>
              Many of our clients benefit from our integrated approach. We offer package deals for businesses looking to align their digital presence with their physical spaces.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{padding: '15px 40px', fontSize: '1.1rem'}}>Discuss a Combined Project</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;