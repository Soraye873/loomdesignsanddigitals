// pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'digital',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      serviceType: 'digital',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="hero" style={{padding: '80px 0', background: 'linear-gradient(135deg, var(--light-blue) 0%, var(--white) 100%)'}}>
        <div className="container">
          <h1 style={{textAlign: 'center', fontSize: '3rem', color: 'var(--dark-blue)'}}>Get In Touch With Us</h1>
          <p style={{textAlign: 'center', maxWidth: '800px', margin: '20px auto', fontSize: '1.2rem'}}>
            Whether you need digital solutions or architectural design, our teams are ready to bring your vision to life.
          </p>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px'}}>
            {/* Contact Form */}
            <div>
              <h2 style={{color: 'var(--dark-blue)', marginBottom: '30px', fontSize: '2rem'}}>Send Us a Message</h2>
              <form onSubmit={handleSubmit} style={{backgroundColor: 'var(--white)', padding: '30px', borderRadius: '10px', boxShadow: 'var(--shadow)'}}>
                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem'}}
                  />
                </div>
                
                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem'}}
                  />
                </div>
                
                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem'}}
                  />
                </div>
                
                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Service Interest *</label>
                  <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
                    <label style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                      <input 
                        type="radio" 
                        name="serviceType" 
                        value="digital"
                        checked={formData.serviceType === 'digital'}
                        onChange={handleChange}
                        style={{marginRight: '8px'}}
                      />
                      <span>Digital Services</span>
                    </label>
                    <label style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                      <input 
                        type="radio" 
                        name="serviceType" 
                        value="design"
                        checked={formData.serviceType === 'design'}
                        onChange={handleChange}
                        style={{marginRight: '8px'}}
                      />
                      <span>Design Services</span>
                    </label>
                    <label style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                      <input 
                        type="radio" 
                        name="serviceType" 
                        value="both"
                        checked={formData.serviceType === 'both'}
                        onChange={handleChange}
                        style={{marginRight: '8px'}}
                      />
                      <span>Both</span>
                    </label>
                  </div>
                </div>
                
                <div style={{marginBottom: '25px'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Message *</label>
                  <textarea 
                    name="message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    style={{width: '100%', padding: '12px 15px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1rem', resize: 'vertical'}}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{width: '100%', padding: '15px'}}
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 style={{color: 'var(--dark-blue)', marginBottom: '30px', fontSize: '2rem'}}>Contact Information</h2>
              
              <div style={{marginBottom: '40px'}}>
                <h3 style={{color: 'var(--primary-blue)', marginBottom: '20px', fontSize: '1.3rem'}}>General Inquiries</h3>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '15px'}}>
                  <i className="fas fa-envelope" style={{color: 'var(--primary-blue)', marginRight: '15px', fontSize: '1.2rem', marginTop: '5px'}}></i>
                  <div>
                    <p style={{fontWeight: '600'}}>Email</p>
                    <p>info@loomdigitalsdesigns.com</p>
                  </div>
                </div>
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '15px'}}>
                  <i className="fas fa-phone" style={{color: 'var(--primary-blue)', marginRight: '15px', fontSize: '1.2rem', marginTop: '5px'}}></i>
                  <div>
                    <p style={{fontWeight: '600'}}>Phone</p>
                    <p>+251-987-38-66-03 </p>
                  </div>
                </div>
                
                <div style={{display: 'flex', alignItems: 'flex-start', marginBottom: '15px'}}>
                  <i className="fas fa-map-marker-alt" style={{color: 'var(--primary-blue)', marginRight: '15px', fontSize: '1.2rem', marginTop: '5px'}}></i>
                  <div>
                    <p style={{fontWeight: '600'}}>Address</p>
                    <p>Addis Ababa, Bishoftu, Adama</p>
                  </div>
                </div>
              </div>
              
              <div style={{marginBottom: '40px'}}>
                <h3 style={{color: 'var(--primary-orange)', marginBottom: '20px', fontSize: '1.3rem'}}>Division-Specific Contacts</h3>
                <div style={{backgroundColor: 'var(--light-blue)', padding: '20px', borderRadius: '8px', marginBottom: '20px'}}>
                  <h4 style={{color: 'var(--primary-blue)', marginBottom: '10px'}}>LoomDigitals</h4>
                  <p>For digital marketing, web development, and graphic design inquiries:</p>
                  <p style={{marginTop: '10px', fontWeight: '600'}}>digitals@loomdigitalsdesigns.com</p>
                </div>
                <div style={{backgroundColor: 'var(--light-orange)', padding: '20px', borderRadius: '8px'}}>
                  <h4 style={{color: 'var(--primary-orange)', marginBottom: '10px'}}>LoomDesigns</h4>
                  <p>For architectural design, interior design, and construction inquiries:</p>
                  <p style={{marginTop: '10px', fontWeight: '600'}}>designs@loomdigitalsdesigns.com</p>
                </div>
              </div>
              
              <div style={{marginBottom: '40px'}}>
                <h3 style={{color: 'var(--primary-orange)', marginBottom: '20px', fontSize: '1.3rem'}}>Connect With Us</h3>
                <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
                  <a href="https://t.me/LoomDigitalsandDesign" target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#0088cc',
                    color: 'white',
                    borderRadius: '50%',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'} title="Telegram">
                    <i className="fab fa-telegram" style={{fontSize: '1.4rem'}}></i>
                  </a>
                  <a href="https://www.instagram.com/loomdigitalsdesigns" target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
                    color: 'white',
                    borderRadius: '50%',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'} title="Instagram">
                    <i className="fab fa-instagram" style={{fontSize: '1.4rem'}}></i>
                  </a>
                  <a href="https://www.facebook.com/loomdigitalsdesigns" target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#1877f2',
                    color: 'white',
                    borderRadius: '50%',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'} title="Facebook">
                    <i className="fab fa-facebook-f" style={{fontSize: '1.4rem'}}></i>
                  </a>
                  <a href="https://www.linkedin.com/company/loomdigitalsdesigns" target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#0a66c2',
                    color: 'white',
                    borderRadius: '50%',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'} title="LinkedIn">
                    <i className="fab fa-linkedin-in" style={{fontSize: '1.4rem'}}></i>
                  </a>
                  <a href="https://www.tiktok.com/@loomdigitalsdesigns" target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    backgroundColor: '#000000',
                    color: 'white',
                    borderRadius: '50%',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }} onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'} onMouseOut={(e) => e.currentTarget.style.opacity = '1'} title="TikTok">
                    <i className="fab fa-tiktok" style={{
                      fontSize: '1.4rem',
                      position: 'relative',
                      zIndex: 1
                    }}></i>
                    <span style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, #25F4EE 0%, #000000 50%, #FE2C55 100%)',
                      opacity: 0.8,
                      zIndex: 0
                    }}></span>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 style={{color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.3rem'}}>Business Hours</h3>
                <div style={{backgroundColor: 'var(--light-gray)', padding: '20px', borderRadius: '8px'}}>
                  <p style={{marginBottom: '8px'}}><span style={{fontWeight: '600'}}>Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                  <p style={{marginBottom: '8px'}}><span style={{fontWeight: '600'}}>Saturday:</span> 10:00 AM - 4:00 PM</p>
                  <p><span style={{fontWeight: '600'}}>Sunday:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;