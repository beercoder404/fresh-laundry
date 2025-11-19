import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Shirt, 
  Sparkles, 
  MapPin, 
  Phone,
  Droplets,
  Wind,
  MessageCircle,
  Mail,
  Download,
  Flame,
  Sofa,
  Users,
  Building,
  Truck
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
      icon: <Flame className="w-8 h-8" />,
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
        
        <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 lg:py-20 text-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight px-2">
              Washora
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-secondary font-semibold mb-3 sm:mb-4 md:mb-6 px-2">
              Laundry Services
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-3 sm:px-4 leading-relaxed">
              Free Your Time - Washora Handles the Rest!<br />
              We collect, we clean, we deliver!
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center px-3 sm:px-4">
              <Button 
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                WhatsApp Us
              </Button>
              <Button 
                size="lg"
                onClick={handlePhoneClick}
                className="w-full sm:w-auto bg-white hover:bg-white/90 text-primary text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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

      {/* About Us Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 lg:min-h-screen lg:flex lg:items-center bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 w-full">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center text-foreground px-2">
              About Us
            </h2>
            <div className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-6 px-3 sm:px-4 md:px-6">
              <p>
                Washora Laundry Services was founded in 2025 in Doha, Qatar, by two ambitious women. Driven by a shared dream and a desire to serve their community, they set out to transform the laundry industry by offering a reliable, high-quality service.
              </p>
              <p>
                Washora stands for professionalism, reliability, and exceptional results. Their mission is to provide fast, professional, and reliable laundry services at competitive prices, ensuring every customer receives spotless, fresh, and well-cared-for garments. Core values include Quality, Reliability, Hygiene, Customer Focus, and Integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Download Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-3 sm:px-4 md:px-6 text-center relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2">
            Company Profile
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto px-3 sm:px-4 leading-relaxed">
            Download our complete company brochure to learn more about Washora Laundry Services
          </p>
          <Button 
            size="lg"
            onClick={handleDownloadBrochure}
            className="bg-white hover:bg-white/90 text-primary text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-semibold"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
            Download Brochure
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="text-center mb-6 sm:mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground">
              Services Offered
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Comprehensive laundry solutions tailored to meet all your needs
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-3 sm:p-4 md:p-5 lg:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 text-primary mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold mb-1 sm:mb-2 text-card-foreground text-center">
                  {service.title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-muted-foreground leading-tight sm:leading-relaxed text-center">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-foreground px-2">
                Reach Us Easily
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8 px-3 sm:px-4">
                We collect. We clean. We deliver.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 mb-6 sm:mb-8 md:mb-10">
              <Card className="p-3 sm:p-4 md:p-5 lg:p-6 text-center bg-card border-border">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg mb-1 sm:mb-2 text-card-foreground">Location</h3>
                <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-muted-foreground">
                  Doha, Qatar
                </p>
              </Card>

              <Card className="p-3 sm:p-4 md:p-5 lg:p-6 text-center bg-card border-border">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg mb-1 sm:mb-2 text-card-foreground">Phone</h3>
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-primary hover:underline break-all"
                >
                  {PHONE_NUMBER}
                </a>
              </Card>

              <Card className="p-3 sm:p-4 md:p-5 lg:p-6 text-center bg-card border-border">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg mb-1 sm:mb-2 text-card-foreground">Email</h3>
                <a 
                  href={`mailto:${EMAIL}`}
                  className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-primary hover:underline break-all"
                >
                  {EMAIL}
                </a>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-3 sm:mb-4 md:mb-6 px-3 sm:px-4">
                Confirm your booking by choosing date and time
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center flex-wrap px-3 sm:px-4">
                <Button 
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  WhatsApp Us
                </Button>
                <Button 
                  size="lg"
                  onClick={handlePhoneClick}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Call Now
                </Button>
                <Button 
                  size="lg"
                  onClick={handleEmailClick}
                  className="w-full sm:w-auto bg-card hover:bg-card/90 text-card-foreground border-2 border-border text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
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
      <footer className="bg-foreground text-background py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs sm:text-sm mb-2">
            © 2025 Washora Laundry Services. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-background/70">
            wash · fold · repeat
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
