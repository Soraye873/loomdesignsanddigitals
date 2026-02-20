import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaFacebook />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
    { icon: <FaLinkedin />, url: '#' },
  ];

  const quickLinks = [
    { text: 'Home', to: '/' },
    { text: 'About Us', to: '/about' },
    { text: 'Services', to: '/services' },
    { text: 'Contact', to: '/contact' },
    { text: 'Book Appointment', to: '/appointment' },
  ];

  const services = [
    { text: 'Digital Marketing', to: '/services#digital' },
    { text: 'Web Development', to: '/services#digital' },
    { text: 'Graphic Design', to: '/services#digital' },
    { text: 'Architectural Design', to: '/services#design' },
    { text: 'Interior Design', to: '/services#design' },
    { text: 'Construction', to: '/services#design' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3>About Loom</h3>
            <p>Loom Digitals & Designs is a full-service company specializing in digital solutions and architectural design, helping businesses and individuals bring their visions to life.</p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" aria-label="Social media link">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.to}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-services">
            <h3>Our Services</h3>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.to}>{service.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li>
                <FaMapMarkerAlt className="icon" />
                <span>123 Business Street, City, Country</span>
              </li>
              <li>
                <FaPhone className="icon" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <FaEnvelope className="icon" />
                <a href="mailto:info@loomdesigns.com">info@loomdesigns.com</a>
              </li>
              <li>
                <FaClock className="icon" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Loom Digitals & Designs. All Rights Reserved.</p>
          <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
