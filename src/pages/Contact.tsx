import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import monkeyMascot from "@/assets/monkey-mascot.jpg";

// Import page-specific CSS
import "@/css/pages/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    inquiry: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: "Visit Our Playground",
      icon: "🏠",
      details: [
        "123 Playground Lane",
        "Fun City, FC 12345",
        "Next to Sunshine Elementary"
      ],
      color: "from-primary/10 to-lime-green/10"
    },
    {
      title: "Call or Text Us",
      icon: "📞",
      details: [
        "(555) 123-JUMP (5867)",
        "Text us for quick questions!",
        "Available 9am-8pm daily"
      ],
      color: "from-accent/10 to-orange-burst/10"
    },
    {
      title: "Email Us",
      icon: "✉️",
      details: [
        "hello@jumpinjacks.com",
        "parties@jumpinjacks.com",
        "safety@jumpinjacks.com"
      ],
      color: "from-secondary/10 to-sky-400/10"
    },
    {
      title: "Follow Us",
      icon: "📱",
      details: [
        "@JumpinJacksPlayground",
        "Daily photo updates!",
        "Party showcases & events"
      ],
      color: "from-candy-pink/10 to-lavender/10"
    }
  ];

  const hours = [
    { day: "Monday - Thursday", hours: "9:00 AM - 7:00 PM" },
    { day: "Friday", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 7:00 PM" }
  ];

  const faqItems = [
    {
      question: "What ages is Jumpin Jacks designed for?",
      answer: "Our playground is specifically designed for children ages 2-7 years old. We have different zones for different age groups to ensure safe and appropriate play."
    },
    {
      question: "Do parents need to stay with their children?",
      answer: "Yes! Parents or guardians must remain on-site and supervise their children at all times. We have comfortable seating areas and free WiFi for parents."
    },
    {
      question: "What should we bring?",
      answer: "Just bring socks for everyone who wants to play! We provide everything else. No outside food or drinks allowed except for special dietary needs."
    },
    {
      question: "How much does it cost?",
      answer: "General admission is $12 per child for unlimited play. Adults are free! We also offer monthly memberships and party packages."
    },
    {
      question: "Do you offer birthday parties?",
      answer: "Absolutely! We have three different party packages starting at $199. Each includes private play time, party host, setup/cleanup, and more!"
    },
    {
      question: "Is food allowed?",
      answer: "We have a strict no outside food policy for safety and hygiene. However, we make exceptions for children with special dietary needs or severe allergies."
    }
  ];

  return (
    <div className="contact-page">
      <Navbar />
      <main className="contact-main">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-hero-container">
            <div>
              <img 
                src={monkeyMascot} 
                alt="Jumpin Jacks Mascot" 
                className="contact-hero-mascot wiggle"
              />
            </div>
            <h1 className="contact-hero-title">
              Let's Connect! 📞
            </h1>
            <p className="contact-hero-description">
              Have questions? Want to book a party? Just want to say hi? 
              We'd love to hear from you and help make your visit amazing!
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="contact-info-section">
          <div className="contact-info-container">
            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className={`contact-info-card ${info.color === 'from-primary/10 to-lime-green/10' ? 'primary-gradient' : 
                              info.color === 'from-secondary/10 to-sky-400/10' ? 'secondary-gradient' : 
                              info.color === 'from-accent/10 to-orange-burst/10' ? 'accent-gradient' : 'candy-gradient'}`}
                >
                  <div className="contact-info-icon">{info.icon}</div>
                  <h3 className="contact-info-title">
                    {info.title}
                  </h3>
                  <div className="contact-info-details">
                    {info.details.map((detail, i) => (
                      <p key={i} className="contact-info-detail">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Hours */}
        <section className="contact-form-section">
          <div className="contact-form-container">
            <div className="contact-form-grid">
              {/* Contact Form */}
              <div className="contact-form-card">
                <h2 className="contact-form-title">
                  Send Us a Message! 💌
                </h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label htmlFor="name" className="contact-form-label">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="contact-form-input"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="contact-form-group">
                      <label htmlFor="email" className="contact-form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="contact-form-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="contact-form-row">
                    <div className="contact-form-group">
                      <label htmlFor="phone" className="contact-form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="contact-form-input"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div className="contact-form-group">
                      <label htmlFor="inquiry" className="contact-form-label">
                        Type of Inquiry
                      </label>
                      <select
                        id="inquiry"
                        name="inquiry"
                        value={formData.inquiry}
                        onChange={handleChange}
                        className="contact-form-select"
                      >
                        <option value="general">General Question</option>
                        <option value="party">Birthday Party</option>
                        <option value="safety">Safety Concern</option>
                        <option value="feedback">Feedback</option>
                        <option value="membership">Membership Info</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="message" className="contact-form-label">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="contact-form-textarea"
                      placeholder="Tell us how we can help you!"
                    />
                  </div>

                  <div className="contact-form-submit">
                    <Button type="submit" className="contact-submit-button">
                      🚀 Send Message
                    </Button>
                  </div>
                </form>
              </div>

              {/* Hours & Quick Info */}
              <div className="space-y-8">
                {/* Hours */}
                <div className="contact-hours-card bg-gradient-to-br from-secondary/10 to-sky-400/10">
                  <h3 className="contact-hours-title">
                    🕐 Our Hours
                  </h3>
                  <div className="contact-hours-list">
                    {hours.map((schedule, index) => (
                      <div key={index} className="contact-hours-item">
                        <span className="contact-hours-day">
                          {schedule.day}
                        </span>
                        <span className="contact-hours-time">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-accent/10 rounded-xl">
                    <p className="text-sm font-nunito text-muted-foreground">
                      <strong>Note:</strong> Last entry is 1 hour before closing. 
                      Holiday hours may vary - call to confirm!
                    </p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="activity-card bg-gradient-to-br from-accent/10 to-candy-pink/10">
                  <h3 className="text-2xl font-poppins font-bold text-primary mb-6">
                    🚀 Quick Actions
                  </h3>
                  <div className="space-y-4">
                    <Button className="btn-jungle w-full">
                      📅 Book a Party
                    </Button>
                    <Button className="btn-sunshine w-full">
                      🎫 Check Pricing
                    </Button>
                    <Button className="btn-sky w-full">
                      📍 Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
                Frequently Asked Questions 🤔
              </h2>
              <p className="text-lg text-muted-foreground font-nunito max-w-2xl mx-auto">
                Got questions? We've got answers! Here are the most common questions we hear.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid gap-6">
                {faqItems.map((faq, index) => (
                  <div 
                    key={index}
                    className="activity-card bg-gradient-to-br from-background to-primary/5"
                  >
                    <h3 className="text-xl font-poppins font-bold text-primary mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground font-nunito leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
                    Still Have Questions? 🙋‍♀️
                  </h3>
                  <p className="text-muted-foreground font-nunito mb-6">
                    Don't see your question here? We're always happy to help!
                  </p>
                  <Button className="btn-jungle">
                    📞 Call Us Now: (555) 123-JUMP
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;