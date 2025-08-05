import { useState } from "react";
import heroPlayground from "@/assets/hero-playground.jpg";
import ballPitImage from "@/assets/ball-pit.jpg";
import jungleGymImage from "@/assets/jungle-gym.jpg";
import toddlerZone from "@/assets/toddler-zone.jpg";
import miniSlides from "@/assets/mini-slides.jpg";
import sensoryPlay from "@/assets/sensory-play.jpg";
import readingNook from "@/assets/reading-nook.jpg";
import birthdayParty from "@/assets/birthday-party.jpg";

// Import component-specific CSS
import "@/css/components/gallery-section.css";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: heroPlayground,
      alt: "Main playground area with colorful equipment",
      title: "Our Amazing Playground"
    },
    {
      src: ballPitImage,
      alt: "Children playing in colorful ball pit",
      title: "Ball Pit Paradise"
    },
    {
      src: jungleGymImage,
      alt: "Jungle gym climbing structure",
      title: "Jungle Gym Adventure"
    },
    {
      src: toddlerZone,
      alt: "Safe play area for toddlers",
      title: "Toddler Zone"
    },
    {
      src: miniSlides,
      alt: "Mini slides perfect for little ones",
      title: "Mini Slides & Fun"
    },
    {
      src: sensoryPlay,
      alt: "Interactive sensory play area",
      title: "Sensory Exploration"
    },
    {
      src: readingNook,
      alt: "Cozy reading corner with books",
      title: "Reading Nook"
    },
    {
      src: birthdayParty,
      alt: "Birthday party celebration setup",
      title: "Birthday Parties"
    }
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {/* Section Header */}
        <div className="gallery-header">
          <h2 className="gallery-title">
            See the Magic! ✨
          </h2>
          <p className="gallery-subtitle">
            Take a peek inside our magical playground where every corner is designed for pure joy and safe adventures!
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <p className="gallery-item-title">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fun Stats */}
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-lime-green rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              📸
            </div>
            <div className="gallery-item-title">1000+</div>
            <div className="gallery-item-description">Happy Moments</div>
          </div>
          <div className="gallery-item">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-burst rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🎮
            </div>
            <div className="gallery-item-title">15+</div>
            <div className="gallery-item-description">Play Areas</div>
          </div>
          <div className="gallery-item">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-sky-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🧼
            </div>
            <div className="gallery-item-title">Daily</div>
            <div className="gallery-item-description">Deep Clean</div>
          </div>
          <div className="gallery-item">
            <div className="w-16 h-16 bg-gradient-to-br from-candy-pink to-lavender rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              👨‍👩‍👧‍👦
            </div>
            <div className="gallery-item-title">Family</div>
            <div className="gallery-item-description">Friendly</div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="gallery-modal open"
          onClick={() => setSelectedImage(null)}
        >
          <div className="gallery-modal-content">
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="gallery-modal-image"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="gallery-modal-close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;