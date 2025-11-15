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
  MessageCircle
} from "lucide-react";
import heroImage from "@/assets/hero-laundry.jpg";

const WHATSAPP_NUMBER = "919843325934"; // Properly formatted without spaces for WhatsApp URL

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank");
  };

  const services = [
    {
      icon: <Shirt className="w-8 h-8" />,
      title: "Wash & Fold",
      description: "Expert washing and folding service with premium detergents for everyday garments."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate fabrics and special garments."
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Stain Removal",
      description: "Advanced stain treatment techniques to restore your clothes to pristine condition."
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Express Service",
      description: "Need it fast? Our express service delivers within 24 hours."
    }
  ];

  const features = [
    "Free pickup & delivery",
    "Eco-friendly detergents",
    "24/7 customer support",
    "Same-day service available"
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Fresh Clothes,
              <br />
              <span className="text-secondary-foreground">Delivered to Your Door</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Professional laundry service that brings convenience and quality to your everyday life
            </p>
            <Button 
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Us Now
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose Fresh Laundry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Fresh Laundry, we understand that your time is valuable. That's why we've created 
              a hassle-free laundry service that takes care of everything. From pickup to delivery, 
              we handle your clothes with the utmost care, using premium eco-friendly products that 
              are gentle on fabrics and the environment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of experienced professionals ensures every garment receives personalized 
              attention. Whether it's your everyday wear or special occasion outfits, we treat 
              each item as if it were our own, delivering results that exceed expectations.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center gap-2 p-4 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-sm font-medium text-card-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive laundry solutions tailored to meet all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Location & Hours
              </h2>
              <p className="text-lg text-muted-foreground">
                Serving our community with excellence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center bg-card border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Address</h3>
                <p className="text-muted-foreground">
                  MG Road, Kochi
                  <br />
                  Kerala, India 682001
                </p>
              </Card>

              <Card className="p-6 text-center bg-card border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Operating Hours</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mon - Fri: 7AM - 8PM
                  <br />
                  Sat - Sun: 8AM - 6PM
                </p>
              </Card>

              <Card className="p-6 text-center bg-card border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-card-foreground">Service Area</h3>
                <p className="text-muted-foreground text-sm">
                  We serve across Kochi
                  <br />
                  and nearby areas
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready for Fresh, Clean Laundry?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their laundry needs. 
            Get started today with just a message!
          </p>
          <Button 
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-white hover:bg-white/90 text-primary text-lg px-12 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 font-semibold"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Contact Us Now
          </Button>
        </div>
      </section>

      {/* Floating WhatsApp Button (Mobile) */}
      <Button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 md:hidden w-16 h-16 rounded-full bg-secondary hover:bg-secondary/90 shadow-2xl z-50 p-0 hover:scale-110 transition-all duration-300"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 Fresh Laundry. All rights reserved. Made with care for your clothes.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
