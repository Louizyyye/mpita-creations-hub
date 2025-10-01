import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AuthForms } from "@/components/AuthForms";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AuthForms />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
