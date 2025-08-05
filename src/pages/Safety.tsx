import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import safetyEquipment from "@/assets/safety-equipment.jpg";
import toddlerZone from "@/assets/toddler-zone.jpg";

// Import page-specific CSS
import "@/css/pages/safety.css";

const Safety = () => {
  const safetyPrograms = [
    {
      title: "Daily Deep Clean Protocol 🧼",
      description: "Every surface, toy, and play area is thoroughly sanitized multiple times daily using child-safe cleaning products.",
      icon: "🧽",
      details: [
        "EPA-approved, child-safe disinfectants",
        "Deep cleaning every 2 hours during operation",
        "Overnight comprehensive sanitization",
        "Air filtration system with HEPA filters"
      ]
    },
    {
      title: "Staff Safety Training 👨‍🏫",
      description: "All staff members receive comprehensive safety training and maintain current certifications in child safety.",
      icon: "🎓",
      details: [
        "CPR and First Aid certified",
        "Child safety and supervision training",
        "Emergency response procedures",
        "Monthly safety training updates"
      ]
    },
    {
      title: "Equipment Inspection 🔍",
      description: "Regular professional inspections ensure all equipment meets the highest safety standards.",
      icon: "🛠️",
      details: [
        "Daily equipment safety checks",
        "Weekly professional inspections",
        "Monthly third-party safety audits",
        "Immediate repair or replacement of any issues"
      ]
    },
    {
      title: "Age-Appropriate Zones 👶",
      description: "Separate play areas designed specifically for different age groups to ensure safe and appropriate play.",
      icon: "🎯",
      details: [
        "Dedicated toddler zone (2-4 years)",
        "Intermediate play area (4-6 years)",
        "Advanced activities (6-7 years)",
        "Clear age guidelines and supervision"
      ]
    }
  ];

  const safetyFeatures = [
    {
      category: "Physical Safety",
      items: [
        "Soft-play surfaces throughout",
        "Rounded corners on all equipment",
        "Safety barriers where needed",
        "Non-slip flooring",
        "Proper lighting in all areas",
        "Emergency exits clearly marked"
      ]
    },
    {
      category: "Health & Hygiene",
      items: [
        "Hand sanitizer stations",
        "Regular temperature checks",
        "Clean air circulation system",
        "Separate sick child policy",
        "Food allergy awareness",
        "Clean restroom facilities"
      ]
    },
    {
      category: "Supervision",
      items: [
        "Trained staff always present",
        "Security cameras in all areas",
        "Check-in/check-out system",
        "Parent viewing areas",
        "Maximum capacity limits",
        "Emergency contact systems"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl lg:text-7xl font-poppins font-bold text-primary mb-6">
              Safety First! 🛡️
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground font-nunito max-w-4xl mx-auto mb-8">
              Your child's safety is our top priority. We maintain the highest standards of cleanliness, 
              safety, and supervision so you can relax while your little ones play and explore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-jungle text-xl py-6 px-8">
                📋 View Safety Checklist
              </Button>
              <Button className="btn-sky text-lg py-5 px-6">
                📞 Ask About Safety
              </Button>
            </div>
          </div>
        </section>

        {/* Safety Programs */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
                Our Safety Programs 🌟
              </h2>
              <p className="text-lg text-muted-foreground font-nunito max-w-3xl mx-auto">
                Comprehensive safety measures that go above and beyond industry standards.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {safetyPrograms.map((program, index) => (
                <div 
                  key={index}
                  className="activity-card bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-lime-green rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                      {program.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-poppins font-bold text-primary mb-3">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground font-nunito mb-6 leading-relaxed">
                        {program.description}
                      </p>
                      
                      <div>
                        <h4 className="font-poppins font-semibold text-primary mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {program.details.map((detail, i) => (
                            <li key={i} className="flex items-center space-x-2 text-muted-foreground font-nunito">
                              <span className="text-accent">✓</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Features Grid */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-accent/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
                Safety Features 🔒
              </h2>
              <p className="text-lg text-muted-foreground font-nunito max-w-3xl mx-auto">
                Every detail is designed with safety in mind, from equipment to environment.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {safetyFeatures.map((category, index) => (
                <div 
                  key={index}
                  className="activity-card bg-gradient-to-br from-background to-primary/5"
                >
                  <h3 className="text-2xl font-poppins font-bold text-primary mb-6 text-center">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center space-x-3 text-muted-foreground font-nunito">
                        <span className="text-accent text-lg">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Images */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
                See Our Safety in Action 📸
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="activity-card bg-gradient-to-br from-primary/5 to-lime-green/5">
                <img 
                  src={safetyEquipment} 
                  alt="Safety equipment and sanitization stations"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-poppins font-bold text-primary mb-3">
                  Professional Safety Equipment
                </h3>
                <p className="text-muted-foreground font-nunito">
                  State-of-the-art safety equipment, sanitization stations, and first aid supplies 
                  are strategically placed throughout our facility.
                </p>
              </div>
              
              <div className="activity-card bg-gradient-to-br from-accent/5 to-orange-burst/5">
                <img 
                  src={toddlerZone} 
                  alt="Safe toddler play area"
                  className="w-full h-64 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-2xl font-poppins font-bold text-primary mb-3">
                  Age-Appropriate Zones
                </h3>
                <p className="text-muted-foreground font-nunito">
                  Our dedicated toddler zone features extra soft surfaces, age-appropriate equipment, 
                  and enhanced supervision for our youngest guests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Procedures */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
                  Emergency Procedures 🚨
                </h2>
                <p className="text-lg text-muted-foreground font-nunito">
                  We're prepared for any situation with comprehensive emergency protocols.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="activity-card bg-gradient-to-br from-background to-primary/5">
                  <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
                    🏥 Medical Emergencies
                  </h3>
                  <ul className="space-y-2 text-muted-foreground font-nunito">
                    <li>• CPR/First Aid certified staff on-site</li>
                    <li>• Direct line to emergency services</li>
                    <li>• Complete incident reporting</li>
                    <li>• Parent notification protocols</li>
                    <li>• Emergency contact system</li>
                  </ul>
                </div>

                <div className="activity-card bg-gradient-to-br from-background to-accent/5">
                  <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
                    🔥 Facility Emergencies
                  </h3>
                  <ul className="space-y-2 text-muted-foreground font-nunito">
                    <li>• Clear evacuation procedures</li>
                    <li>• Multiple emergency exits</li>
                    <li>• Fire suppression system</li>
                    <li>• Regular emergency drills</li>
                    <li>• Staff emergency training</li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-accent/10 to-candy-pink/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-poppins font-bold text-primary mb-4">
                    Questions About Safety? 🤔
                  </h3>
                  <p className="text-muted-foreground font-nunito mb-6">
                    We're always happy to discuss our safety measures and answer any questions you may have.
                  </p>
                  <Button className="btn-jungle">
                    📞 Speak with Safety Coordinator
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

export default Safety;