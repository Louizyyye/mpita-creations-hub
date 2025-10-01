import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";
import heroImage from "@/assets/medical-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-32">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight">
              Your Health, Our Priority
            </h1>
            <p className="text-lg md:text-xl text-card/90">
              Experience compassionate care and modern medical solutions at Mpita Medical.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Book Appointment
              </Button>
              <Button variant="hero-outline" size="lg">
                Our Services
              </Button>
            </div>
          </div>

          <Card className="p-8 bg-card/95 backdrop-blur">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">Emergency Hotline</h3>
                <p className="text-3xl font-bold text-primary">+254-720214497</p>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
