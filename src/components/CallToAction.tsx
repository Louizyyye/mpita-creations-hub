import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-card">
            Ready to Take Care of Your Health?
          </h2>
          <p className="text-lg text-card/90">
            Schedule an appointment today and experience healthcare that truly cares.
          </p>
          <Button variant="hero" size="lg" className="group">
            Schedule Appointment
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
