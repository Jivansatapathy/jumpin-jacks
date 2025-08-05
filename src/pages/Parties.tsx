import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import birthdayParty from "@/assets/birthday-party.jpg";
import ballPitImage from "@/assets/ball-pit.jpg";
import jungleGymImage from "@/assets/jungle-gym.jpg";
import heroPlayground from "@/assets/hero-playground.jpg";

// Import page-specific CSS
import "@/css/pages/parties.css";

const Parties = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const partyPackages = [
    {
      name: "Jungle Explorer",
      price: "$199",
      duration: "2 hours",
      guests: "Up to 12 kids",
      color: "from-primary/20 to-lime-green/20",
      includes: [
        "2 hours of private play time",
        "Dedicated party host",
        "Party setup & cleanup",
        "Birthday child gets special crown",
        "Juice boxes for all kids",
        "Paper goods (plates, cups, napkins)"
      ]
    },
    {
      name: "Adventure Deluxe",
      price: "$299",
      duration: "3 hours",
      guests: "Up to 20 kids",
      color: "from-accent/20 to-orange-burst/20",
      popular: true,
      includes: [
        "3 hours of private play time",
        "Dedicated party host",
        "Party setup & cleanup",
        "Birthday child gets special crown & gift",
        "Juice boxes & snacks for all kids",
        "Paper goods & decorations",
        "Group photo session",
        "Party favors for each child"
      ]
    },
    {
      name: "Ultimate Celebration",
      price: "$399",
      duration: "4 hours",
      guests: "Up to 30 kids",
      color: "from-secondary/20 to-sky-400/20",
      includes: [
        "4 hours of private play time",
        "Two dedicated party hosts",
        "Full party setup & cleanup",
        "Birthday child gets crown, gift & certificate",
        "Pizza, juice boxes & snacks",
        "Premium decorations & balloons",
        "Professional group photos",
        "Premium party favors",
        "Special birthday announcement"
      ]
    }
  ];

  const galleryImages = [
    {
      src: birthdayParty,
      alt: "Birthday party celebration in playground",
      title: "Birthday Magic"
    },
    {
      src: ballPitImage,
      alt: "Kids enjoying ball pit at party",
      title: "Ball Pit Fun"
    },
    {
      src: jungleGymImage,
      alt: "Party games on jungle gym",
      title: "Adventure Time"
    },
    {
      src: heroPlayground,
      alt: "Full playground party setup",
      title: "Complete Setup"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-accent/10 via-background to-candy-pink/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl lg:text-7xl font-poppins font-bold text-primary mb-6">
              Amazing Birthday Parties! 🎉
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-nunito max-w-4xl mx-auto mb-8">
              Make your child's special day unforgettable with our magical birthday party packages! 
              We handle everything so you can focus on making memories.
            </p>
            <Button className="btn-jungle text-xl py-6 px-8">
              🎈 Book Your Party Today
            </Button>
          </div>
        </section>

        {/* Party Packages */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
                Choose Your Adventure! 🌟
              </h2>
              <p className="text-lg text-muted-foreground font-nunito max-w-3xl mx-auto">
                Every package includes access to our entire playground and the birthday child plays FREE!
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {partyPackages.map((pkg, index) => (
                <div 
                  key={index}
                  className={`activity-card bg-gradient-to-br ${pkg.color} border-2 ${
                    pkg.popular ? 'border-accent scale-105' : 'border-primary/10'
                  } relative`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-poppins font-bold">
                        🌟 Most Popular!
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl lg:text-3xl font-poppins font-bold text-primary mb-2">
                      {pkg.name}
                    </h3>
                    <div className="text-4xl font-poppins font-bold text-accent mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-muted-foreground font-nunito">
                      {pkg.duration} • {pkg.guests}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-poppins font-semibold text-primary">What's Included:</h4>
                    <ul className="space-y-3">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start space-x-3 text-muted-foreground font-nunito">
                          <span className="text-accent mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className={`w-full ${pkg.popular ? 'btn-jungle' : 'btn-sunshine'}`}
                    onClick={() => setSelectedPackage(pkg.name)}
                  >
                    🎉 Choose {pkg.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Party Gallery */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
                Party Gallery! 📸
              </h2>
              <p className="text-lg text-muted-foreground font-nunito max-w-2xl mx-auto">
                See the joy and excitement from our recent birthday celebrations!
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="activity-card group cursor-pointer overflow-hidden"
                >
                  <div className="relative">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-48 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end">
                      <p className="text-white font-poppins font-semibold p-4">
                        {image.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Info */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-accent/10 via-candy-pink/10 to-lavender/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-primary mb-8">
                Ready to Celebrate? 🎊
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="activity-card bg-gradient-to-br from-primary/10 to-lime-green/10">
                  <h3 className="text-2xl font-poppins font-bold text-primary mb-4">📞 Call to Book</h3>
                  <p className="text-muted-foreground font-nunito mb-4">
                    Speak with our party coordinator to customize your perfect celebration!
                  </p>
                  <Button className="btn-jungle w-full">
                    Call (555) 123-JUMP
                  </Button>
                </div>
                
                <div className="activity-card bg-gradient-to-br from-accent/10 to-orange-burst/10">
                  <h3 className="text-2xl font-poppins font-bold text-primary mb-4">📅 Book Online</h3>
                  <p className="text-muted-foreground font-nunito mb-4">
                    Check availability and reserve your date instantly online!
                  </p>
                  <Button className="btn-sunshine w-full">
                    Book Online Now
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-candy-pink/10 to-lavender/10 rounded-3xl p-8">
                <h3 className="text-2xl font-poppins font-bold text-primary mb-4">Important Party Info 📋</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-poppins font-semibold text-primary mb-2">Booking Requirements:</h4>
                    <ul className="space-y-1 text-muted-foreground font-nunito">
                      <li>• Book at least 1 week in advance</li>
                      <li>• $50 deposit required to secure date</li>
                      <li>• Maximum 2 parties per day</li>
                      <li>• All children must have signed waiver</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-primary mb-2">What to Bring:</h4>
                    <ul className="space-y-1 text-muted-foreground font-nunito">
                      <li>• Birthday cake (we provide plates & forks)</li>
                      <li>• Camera for memories!</li>
                      <li>• Comfortable play clothes</li>
                      <li>• Socks for all participants</li>
                    </ul>
                  </div>
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

export default Parties;