import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ballPitImage from "@/assets/ball-pit.jpg";
import jungleGymImage from "@/assets/jungle-gym.jpg";
import toddlerZone from "@/assets/toddler-zone.jpg";
import miniSlides from "@/assets/mini-slides.jpg";
import sensoryPlay from "@/assets/sensory-play.jpg";
import readingNook from "@/assets/reading-nook.jpg";

// Import page-specific CSS
import "@/css/pages/activities.css";

const Activities = () => {
  const activities = [
    {
      title: "Ball Pit Paradise 🏀",
      description: "Dive into thousands of colorful, sanitized balls! Our ball pit is cleaned and refreshed daily for maximum fun and safety.",
      image: ballPitImage,
      features: ["Thousands of colorful balls", "Daily sanitization", "Soft landing area", "Age-appropriate depth"],
      ageRange: "2-7 years",
      color: "from-candy-pink/20 to-lavender/20"
    },
    {
      title: "Jungle Gym Adventure 🌳",
      description: "Climb, crawl, and explore our multi-level jungle gym designed specifically for developing motor skills and confidence.",
      image: jungleGymImage,
      features: ["Multi-level climbing", "Soft foam construction", "Motor skill development", "Confidence building"],
      ageRange: "3-7 years",
      color: "from-primary/20 to-lime-green/20"
    },
    {
      title: "Toddler Zone 🧸",
      description: "A special dedicated area for our smallest adventurers with age-appropriate activities and extra safety measures.",
      image: toddlerZone,
      features: ["Dedicated toddler space", "Extra soft surfaces", "Age-appropriate toys", "Parent viewing area"],
      ageRange: "2-4 years",
      color: "from-accent/20 to-orange-burst/20"
    },
    {
      title: "Mini Slides & Tunnels 🎢",
      description: "Perfect-sized slides and crawling tunnels that provide just the right amount of challenge for little legs!",
      image: miniSlides,
      features: ["Perfect kid-sized", "Safe slide angles", "Crawling tunnels", "Soft landing zones"],
      ageRange: "2-6 years",
      color: "from-secondary/20 to-sky-400/20"
    },
    {
      title: "Sensory Play Area 🎨",
      description: "Engage all five senses with our interactive sensory stations designed to stimulate learning and development.",
      image: sensoryPlay,
      features: ["Interactive textures", "Musical elements", "Color exploration", "Fine motor skills"],
      ageRange: "2-7 years",
      color: "from-lavender/20 to-candy-pink/20"
    },
    {
      title: "Reading Nook 📚",
      description: "A quiet, cozy space filled with age-appropriate books where little ones can take a break and enjoy story time.",
      image: readingNook,
      features: ["Age-appropriate books", "Comfortable seating", "Quiet atmosphere", "Story time sessions"],
      ageRange: "2-7 years",
      color: "from-lime-green/20 to-primary/20"
    }
  ];

  return (
    <div className="activities-page">
      <Navbar />
      <main className="activities-main">
        {/* Hero Section */}
        <section className="activities-hero">
          <div className="activities-hero-container">
            <h1 className="activities-hero-title">
              Amazing Activities! 🎪
            </h1>
            <p className="activities-hero-description">
              Every activity is designed with your child's safety, development, and pure joy in mind. 
              From energetic play to quiet exploration, we have something for every little personality!
            </p>
            <Button className="btn-jungle">
              🎉 Book Your Adventure Today
            </Button>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="activities-content">
          <div className="activities-grid">
            {activities.map((activity, index) => (
              <div 
                key={index}
                className={`activity-card bg-gradient-to-br ${activity.color}`}
              >
                <div className="activity-image-container">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="activity-image"
                  />
                </div>
                <div className="activity-content">
                  <h3 className="activity-title">
                    {activity.title}
                  </h3>
                  <p className="activity-description">
                    {activity.description}
                  </p>
                  
                  <div className="activity-features">
                    {activity.features.map((feature, i) => (
                      <span key={i} className="activity-feature">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="activity-age-range">
                    <span>Ages: {activity.ageRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="activities-cta">
          <div className="activities-cta-container">
            <h2 className="activities-cta-title">
              Ready for the Adventure? 🚀
            </h2>
            <p className="activities-cta-description">
              Come visit us today and watch your little ones light up with joy as they explore, play, and make new friends!
            </p>
            <div className="activities-cta-buttons">
              <Button className="btn-jungle">
                📅 Book Now
              </Button>
              <Button className="btn-sunshine">
                📞 Call (555) 123-JUMP
              </Button>
              <Button className="btn-sky">
                🎈 Plan a Party
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Activities;