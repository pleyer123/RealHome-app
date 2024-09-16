import "./Footer.css"

function Footer(){
    return(
    <footer className="footer-container">
    <div className="footer-content">
      <div className="footer-column">
        <h3 className="footer-title">RealHome</h3>
        <p>Delivering premium real estate solutions tailored to your needs.</p>
        <p>Address: 123 Main Street, Beverly Hills, CA</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@RealHome.com</p>
      </div>

      <div className="footer-column">
        <h3 className="footer-title">Quick Links</h3>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#properties">Properties</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#terms">Terms & Conditions</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h3 className="footer-title">Follow Us</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} RealHome. All rights reserved.</p>
    </div>
  </footer>
);
}

export default Footer