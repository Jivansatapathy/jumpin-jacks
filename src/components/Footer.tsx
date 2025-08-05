import monkeyMascot from "@/assets/monkey-mascot.jpg";

// Import component-specific CSS
import "@/css/components/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="footer-brand-header">
              <img 
                src={monkeyMascot} 
                alt="Jumpin Jacks Logo" 
                className="footer-logo"
              />
              <div>
                <h3 className="footer-brand-title">Jumpin Jacks</h3>
                <p className="footer-brand-subtitle">Where Adventure Begins! 🌟</p>
              </div>
            </div>
            
            <p className="footer-description">
              Creating magical playground experiences for children aged 2-7. Safe, clean, and full of joy - 
              that's our promise to every family that walks through our doors.
            </p>
            
            <div className="footer-social">
              <div className="footer-social-icon">
                <span className="footer-social-emoji">📘</span>
              </div>
              <div className="footer-social-icon">
                <span className="footer-social-emoji">📷</span>
              </div>
              <div className="footer-social-icon">
                <span className="footer-social-emoji">🐦</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-section-title">Visit Us! 📍</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <span className="footer-contact-icon">🏠</span>
                <div>
                  <p className="footer-contact-text">123 Playground Lane</p>
                  <p className="footer-contact-text">Fun City, FC 12345</p>
                </div>
              </div>
              
              <div className="footer-contact-item">
                <span className="footer-contact-icon">📞</span>
                <div>
                  <p className="footer-contact-text">(555) 123-JUMP</p>
                  <p className="footer-contact-text">Call for bookings!</p>
                </div>
              </div>
              
              <div className="footer-contact-item">
                <span className="footer-contact-icon">✉️</span>
                <div>
                  <p className="footer-contact-text">hello@jumpinjacks.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Quick Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Hours & More ⏰</h4>
            <div className="footer-links-container">
              <div className="footer-hours">
                <h5 className="footer-hours-title">Open Daily:</h5>
                <p className="footer-contact-text">Monday - Thursday: 9am - 7pm</p>
                <p className="footer-contact-text">Friday - Sunday: 9am - 8pm</p>
              </div>
              
              <div className="footer-links">
                <a href="#safety" className="footer-link">
                  <span className="footer-link-icon">🛡️</span> Safety Guidelines
                </a>
                <a href="#parties" className="footer-link">
                  <span className="footer-link-icon">🎉</span> Birthday Parties
                </a>
                <a href="#pricing" className="footer-link">
                  <span className="footer-link-icon">💰</span> Pricing & Packages
                </a>
                <a href="#faq" className="footer-link">
                  <span className="footer-link-icon">❓</span> FAQ
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © 2024 Jumpin Jacks Playground. All rights reserved. Made with 💕 for little adventurers!
            </p>
          </div>
          
          <div className="footer-policy-links">
            <a href="#privacy" className="footer-policy-link">Privacy Policy</a>
            <a href="#terms" className="footer-policy-link">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Fun Bottom Wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="footer-wave-svg">
          <path d="M0,60V30c240,-15 480,-15 720,0s480,15 720,0V60Z" fill="hsl(var(--accent))"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;