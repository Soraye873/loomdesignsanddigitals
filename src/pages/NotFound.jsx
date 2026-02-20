import { Link } from 'react-router-dom';
import { FaHome, FaArrowRight } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <h1>Page Not Found</h1>
          <p className="error-message">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="suggestion">
            Here are some helpful links instead:
          </p>
          
          <div className="quick-links">
            <Link to="/" className="btn btn-primary">
              <FaHome className="icon" /> Go to Homepage
            </Link>
            <Link to="/services" className="btn btn-outline">
              Our Services <FaArrowRight className="icon" />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us <FaArrowRight className="icon" />
            </Link>
          </div>
          
          <div className="search-container">
            <p>Or try searching for what you're looking for:</p>
            <div className="search-box">
              <input 
                type="text" 
                placeholder="Search our website..."
                className="search-input"
              />
              <button className="search-button">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
