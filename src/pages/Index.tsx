import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Shirt, 
  Sparkles, 
  Clock, 
  MapPin, 
  Phone,
  CheckCircle2,
  Droplets,
  Wind,
  MessageCircle,
  Mail,
  Download,
  Iron,
  Sofa,
  Users,
  Building,
  Truck,
  DollarSign,
  Zap,
  Leaf
} from "lucide-react";
import heroImage from "@/assets/hero-laundry.jpg";
import washoraLogo from "@/assets/washora-logo.png";

const PHONE_NUMBER = "+97470664119";
const WHATSAPP_NUMBER = "97470664119";
const EMAIL = "laundryservices-qa@outlook.com";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${EMAIL}`;
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/Washora_Brochure.pdf';
    link.download = 'Washora_Laundry_Services_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const services = [
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Laundry (Wash & Fold)",
      description: "Freshly cleaned and neatly folded clothes"
    },
    {
      icon: <Iron className="w-8 h-8" />,
      title: "Ironing / Pressing",
      description: "Smooth, wrinkle-free garments every time"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Dry Cleaning",
      description: "Safe, gentle cleaning for delicate fabrics"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Stain Removal",
      description: "Effective treatment for tough, stubborn stains"
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Bedding & Linen Cleaning",
      description: "Clean, crisp, and hygienic household linens"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Curtain & Carpet Cleaning",
      description: "Deep cleaning to refresh home and office textiles"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Uniform Cleaning",
      description: "Professional care for school, work, and hospitality uniforms"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Commercial Laundry",
      description: "Reliable laundry solutions for hotels, salons, clinics, and offices"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Pickup & Delivery",
      description: "Convenient door-to-door laundry service"
    }
  ];

  const advantages = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast turnaround time"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Affordable and transparent pricing"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Skilled and trained staff"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-friendly detergents"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Easy booking via phone & WhatsApp"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Reliable pickup & delivery service"
    }
  ];

  const coreValues = [
    {
      title: "Quality",
      description: "We handle every garment with care and attention"
    },
    {
      title: "Reliability",
      description: "On-time service, every time"
    },
    {
      title: "Hygiene",
      description: "Clean, sanitized, and safe processing"
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our priority"
    },
    {
      title: "Integrity",
      description: "Honest pricing and professional service"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-8">
              <img 
                src={washoraLogo} 
                alt="Washora Laundry Services" 
                className="w-32 h-32 mx-auto"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Washora
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-secondary font-semibold mb-6">
              Laundry Services
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Free your time - Washora handles the rest
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
              <Button 
                size="lg"
                onClick={handlePhoneClick}
                className="bg-white hover:bg-white/90 text-primary text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Company Overview
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded in 2025, Washora is the realization of a shared dream between two ambitious women 
              who set out to transform the laundry industry with passion, purpose, and innovation. Based 
              in Doha, Qatar, Washora is more than just a laundry service; it's a story of empowerment 
              and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
              Our Story
            </h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Washora Laundry Services began as the shared dream of two ambitious women who believed 
                in creating something meaningful—not just for themselves, but for their community. Both 
                founders came from different backgrounds, yet they were united by a strong desire to build 
                a business that reflected their values: hard work, integrity, and the courage to pursue 
                independence.
              </p>
              <p>
                Their entrepreneurial journey started with a simple observation: many individuals, families, 
                and businesses struggled to find a reliable, high-quality laundry service they could trust. 
                They saw an opportunity—not just to fill a gap in the market, but to create a service that 
                truly made life easier for others. With this vision in mind, they decided to take the bold 
                step of launching their own laundry business.
              </p>
              <p>
                Starting from scratch was not easy. They faced challenges, financial constraints, and countless 
                learning moments. But their determination, teamwork, and belief in their mission kept them moving 
                forward. They invested in modern equipment, trained themselves on best practices, and built a 
                service rooted in quality and care. Every garment, every customer, and every detail mattered.
              </p>
              <p>
                As the business grew, so did their confidence as entrepreneurs. What began as a small startup 
                powered by passion evolved into a trusted laundry service known for professionalism, reliability, 
                and exceptional results. Today, Washora Laundry Services stands as a proud symbol of what women 
                can achieve with vision, dedication, and the courage to follow their dreams.
              </p>
              <p className="font-semibold text-foreground">
                Driven by their goal to become strong, successful, and well-known entrepreneurs, the founders 
                continue to lead with purpose—providing outstanding service while inspiring others to believe 
                in their own potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Vision</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  To become the most trusted and preferred laundry service provider in our community 
                  by consistently delivering exceptional quality and convenience.
                </p>
              </Card>

              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Mission</h3>
                <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>Provide fast, reliable, and professional laundry services at competitive prices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>Ensure every customer receives spotless, fresh, and well-cared-for garments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>Build long-term customer relationships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span>Adopt eco-friendly practices</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Core Values</h3>
                <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                  {coreValues.map((value, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <span className="font-semibold text-foreground">{value.title}:</span>{" "}
                        <span>{value.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Services Offered
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive laundry solutions tailored to meet all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              Competitive Advantages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage, index) => (
                <Card 
                  key={index}
                  className="p-6 text-center bg-card border-border hover:border-primary transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <div className="text-secondary">{advantage.icon}</div>
                  </div>
                  <p className="text-base font-medium text-card-foreground">{advantage.title}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Download Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Company Profile
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Download our complete company brochure to learn more about Washora Laundry Services
          </p>
          <Button 
            size="lg"
            onClick={handleDownloadBrochure}
            className="bg-white hover:bg-white/90 text-primary text-lg px-12 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-semibold"
          >
            <Download className="w-6 h-6 mr-2" />
            Download Brochure
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Reach Us Easily
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                We collect. We clean. We deliver.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center bg-card border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-3 text-card-foreground">Location</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Doha, Qatar
                </p>
              </Card>

              <Card className="p-6 text-center bg-card border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-3 text-card-foreground">Phone</h3>
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-sm md:text-base text-primary hover:underline"
                >
                  {PHONE_NUMBER}
                </a>
              </Card>

              <Card className="p-6 text-center bg-card border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-3 text-card-foreground">Email</h3>
                <a 
                  href={`mailto:${EMAIL}`}
                  className="text-sm md:text-base text-primary hover:underline break-all"
                >
                  {EMAIL}
                </a>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Confirm your booking by choosing date and time
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                <Button 
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </Button>
                <Button 
                  size="lg"
                  onClick={handlePhoneClick}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                <Button 
                  size="lg"
                  onClick={handleEmailClick}
                  className="bg-card hover:bg-card/90 text-card-foreground border-2 border-border text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons (Mobile) */}
      <div className="fixed bottom-6 right-6 md:hidden flex flex-col gap-3 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 rounded-full bg-secondary hover:bg-secondary/90 shadow-2xl p-0 hover:scale-110 transition-all duration-300"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </Button>
        <Button
          onClick={handlePhoneClick}
          className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-2xl p-0 hover:scale-110 transition-all duration-300"
          aria-label="Call us"
        >
          <Phone className="w-7 h-7" />
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm mb-2">
            © 2025 Washora Laundry Services. All rights reserved.
          </p>
          <p className="text-sm text-background/70">
            wash · fold · repeat
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
