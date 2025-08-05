import { useState, useEffect } from "react";

// Import component-specific CSS
import "@/css/components/testimonials-section.css";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      type: "parent",
      name: "Sarah M.",
      role: "Mom of 3-year-old Emma",
      text: "Emma absolutely LOVES Jumpin Jacks! The staff is amazing, it's always clean, and I feel so comfortable letting her play freely. Best discovery ever!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      type: "kid",
      name: "Tommy, age 5",
      role: "Future astronaut",
      text: "The ball pit is THE BEST and I love the monkey! Can we come back tomorrow mommy? 🐵",
      rating: 5,
      avatar: "👦"
    },
    {
      type: "parent",
      name: "Mike D.",
      role: "Dad of twins (4 years old)",
      text: "Perfect for rainy days! The twins burn all their energy here and sleep so well afterward. The toddler zone is genius - finally somewhere safe for both kids!",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      type: "kid",
      name: "Lily, age 6",
      role: "Princess explorer",
      text: "I made so many friends here! The jungle gym is like a real adventure and the reading corner has my favorite books! 📚✨",
      rating: 5,
      avatar: "👧"
    },
    {
      type: "parent",
      name: "Jessica L.",
      role: "Mom of 2-year-old Max",
      text: "As a first-time mom, I was nervous about play spaces. But Jumpin Jacks exceeded all expectations - so safe, so clean, and Max had the time of his life!",
      rating: 5,
      avatar: "👩"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const currentReview = testimonials[currentTestimonial];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            Happy Families! 💕
          </h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it - hear from the kids and parents who make Jumpin Jacks their favorite place!
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div className={`testimonial-card text-center relative overflow-hidden ${
            currentReview.type === 'kid' 
              ? 'bg-gradient-to-br from-accent/10 to-candy-pink/10 border-accent/20' 
              : 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20'
          } border-2`}>
            
            {/* Decorative elements for kid reviews */}
            {currentReview.type === 'kid' && (
              <>
                <div className="absolute top-4 left-4 text-2xl bounce-soft">🎈</div>
                <div className="absolute top-4 right-4 text-2xl bounce-soft" style={{animationDelay: '0.5s'}}>⭐</div>
                <div className="absolute bottom-4 left-1/4 text-xl bounce-soft" style={{animationDelay: '1s'}}>🎪</div>
              </>
            )}

            {/* Avatar */}
            <div className="mb-6">
              <div className="w-20 h-20 bg-white/50 rounded-full flex items-center justify-center text-4xl mx-auto shadow-[var(--shadow-soft)] mb-4">
                {currentReview.avatar}
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-2xl">⭐</span>
                ))}
              </div>
            </div>

            {/* Review Text */}
            <div className="testimonial-content">
              <blockquote className={`testimonial-text ${
                currentReview.type === 'kid' ? 'text-accent font-medium' : 'text-muted-foreground'
              }`}>
                "{currentReview.text}"
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="testimonial-author">
              <div className="testimonial-info">
                <div className="testimonial-name">
                  {currentReview.name}
                </div>
                <div className="testimonial-role">
                  {currentReview.role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`testimonials-dot ${index === currentTestimonial ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="testimonials-grid">
          <div className="testimonial-card bg-gradient-to-br from-primary/10 to-lime-green/10">
            <div className="testimonials-title">500+</div>
            <div className="testimonial-role">Happy Families</div>
          </div>
          <div className="testimonial-card bg-gradient-to-br from-accent/10 to-orange-burst/10">
            <div className="testimonials-title">99%</div>
            <div className="testimonial-role">Return Rate</div>
          </div>
          <div className="testimonial-card bg-gradient-to-br from-secondary/10 to-sky-400/10">
            <div className="testimonials-title">5★</div>
            <div className="testimonial-role">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;