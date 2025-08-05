import ballPitImage from "@/assets/ball-pit.jpg";
import jungleGymImage from "@/assets/jungle-gym.jpg";

// Import component-specific CSS
import "@/css/components/activities-section.css";

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Ball Pit Paradise",
      description: "Dive into thousands of colorful balls! Safe and sanitized daily.",
      icon: "🏀",
      image: ballPitImage,
      color: "from-candy-pink/20 to-lavender/20",
      borderColor: "border-candy-pink/30"
    },
    {
      title: "Jungle Gym Adventure",
      description: "Climb, slide, and explore our soft play structures designed for little adventurers.",
      icon: "🌳",
      image: jungleGymImage,
      color: "from-primary/20 to-lime-green/20",
      borderColor: "border-primary/30"
    },
    {
      title: "Toddler Zone",
      description: "Special area just for our smallest explorers (2-4 years) with age-appropriate activities.",
      icon: "🧸",
      image: null,
      color: "from-accent/20 to-orange-burst/20",
      borderColor: "border-accent/30"
    },
    {
      title: "Mini Slides & Tunnels",
      description: "Perfect-sized slides and crawling tunnels that are just right for little legs!",
      icon: "🎢",
      image: null,
      color: "from-secondary/20 to-sky-400/20",
      borderColor: "border-secondary/30"
    },
    {
      title: "Sensory Play Area",
      description: "Textures, sounds, and colors to stimulate growing minds and encourage exploration.",
      icon: "🎨",
      image: null,
      color: "from-lavender/20 to-candy-pink/20",
      borderColor: "border-lavender/30"
    },
    {
      title: "Reading Nook",
      description: "Quiet space with kid-friendly books and soft seating for story time breaks.",
      icon: "📚",
      image: null,
      color: "from-lime-green/20 to-primary/20",
      borderColor: "border-lime-green/30"
    }
  ];

  return (
    <section className="activities-section">
      <div className="activities-container">
        {/* Section Header */}
        <div className="activities-header">
          <h2 className="activities-title">
            Amazing Activities Await! 🎪
          </h2>
          <p className="activities-subtitle">
            Every corner of our playground is designed with your child's safety, development, and pure joy in mind!
          </p>
        </div>

        {/* Activities Grid */}
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="activity-card activity-card-gradient cursor-pointer"
            >
              {/* Activity Image or Icon */}
              <div className="activity-image-container">
                {activity.image ? (
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="activity-image"
                  />
                ) : (
                  <div className="activity-icon-container">
                    <div className="activity-icon">
                      {activity.icon}
                    </div>
                  </div>
                )}
              </div>

              {/* Activity Content */}
              <div className="activity-content">
                <h3 className="activity-name">
                  {activity.title}
                </h3>
                <p className="activity-description">
                  {activity.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="activity-hover-effect"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="activities-cta-container">
          <div className="activities-cta-box">
            <h3 className="activities-title">
              Ready for the Adventure? 🚀
            </h3>
            <p className="activities-subtitle">
              Come visit us today and watch your little ones light up with joy!
            </p>
            <div className="activities-cta-buttons">
              <button className="activities-cta-button">
                📅 Book Now
              </button>
              <button className="activities-cta-button">
                📞 Call Us: (555) 123-JUMP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;