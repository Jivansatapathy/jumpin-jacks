import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import monkeyMascot from "@/assets/sitelogo.png";

// Import component-specific CSS
import "@/css/components/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Activities", href: "/activities", icon: "🎪" },
    { name: "Parties", href: "/parties", icon: "🎉" },
    { name: "Safety", href: "/safety", icon: "🛡️" },
    { name: "Contact", href: "/contact", icon: "📞" }
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img
              src={monkeyMascot} 
              alt="Jumpin Jacks Logo" 
              className="navbar-logo-image"
            />
            <div>
              <h1 className="navbar-logo-title">
                Jumpin Jacks
              </h1>
              <p className="navbar-logo-subtitle">
                Playground Paradise
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-desktop-nav">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`navbar-link ${
                  location.pathname === item.href 
                    ? 'navbar-link-active' 
                    : ''
                }`}
              >
                <span className="navbar-link-icon">{item.icon}</span>
                <span className="navbar-link-text">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="navbar-cta">
            <Button className="btn-sunshine">
              📅 Book Now
            </Button>
            <Button className="btn-sky">
              📞 Call Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="navbar-mobile-toggle"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <span className="navbar-mobile-toggle-icon">✕</span>
            ) : (
              <span className="navbar-mobile-toggle-icon">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="navbar-mobile-menu">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`navbar-mobile-link ${
                  location.pathname === item.href 
                    ? 'navbar-mobile-link-active' 
                    : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="navbar-mobile-link-icon">{item.icon}</span>
                <span className="navbar-mobile-link-text">{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile CTAs */}
            <div className="navbar-mobile-cta">
              <Button className="btn-jungle w-full">
                📅 Book Your Adventure
              </Button>
              <Button className="btn-sky w-full">
                📞 Call (555) 123-JUMP
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;