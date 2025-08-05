import { Button } from "@/components/ui/button";
import heroPlayground from "@/assets/hero-playground.jpg";
import monkeyMascot from "@/assets/monkey-mascot.jpg";

// Import component-specific CSS
import "@/css/components/hero-section.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Floating decorative elements */}
      <div className="hero-decoration hero-decoration-1 bounce-soft"></div>
      <div className="hero-decoration hero-decoration-2 bounce-soft" style={{animationDelay: '0.5s'}}></div>
      <div className="hero-decoration hero-decoration-3 bounce-soft" style={{animationDelay: '1s'}}></div>
      
      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Content */}
          <div className="hero-content">
            {/* Mascot */}
            <div className="hero-mascot-container">
              <img 
                src={monkeyMascot} 
                alt="Jumpin Jacks Monkey Mascot" 
                className="hero-mascot wiggle"
              />
            </div>
            
            {/* Main Heading */}
            <div className="hero-heading-container">
              <h1 className="hero-heading">
                Let's Jump Into
                <span className="hero-heading-accent"> Fun!</span>
              </h1>
              <p className="hero-description">
                Where little ones play, learn, and laugh together in our safe jungle playground! 🌟
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-container">
              <Button className="hero-cta-primary btn-jungle">
                🎉 Book Your Adventure
              </Button>
              <Button className="hero-cta-secondary btn-sky">
                🎈 Plan a Party
              </Button>
            </div>

            {/* Fun Stats */}
            <div className="hero-stats">
              <div className="hero-stat-card">
                <div className="hero-stat-value">2-7</div>
                <div className="hero-stat-label">Years Old</div>
              </div>
              <div className="hero-stat-card">
                <div className="hero-stat-value">100%</div>
                <div className="hero-stat-label">Safe Fun</div>
              </div>
              <div className="hero-stat-card">
                <div className="hero-stat-value">Daily</div>
                <div className="hero-stat-label">Clean & Fresh</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="hero-image-container">
            <img 
              src={heroPlayground} 
              alt="Kids playing in colorful jungle playground" 
              className="hero-image"
            />
            
            {/* Decorative Background Circle */}
            <div className="hero-image-decoration"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="hero-bottom-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="hero-wave-svg">
          <path d="M0,0V60c240,30 480,30 720,0s480,30 720,0V0Z" fill="hsl(var(--primary))" fillOpacity="0.1"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;