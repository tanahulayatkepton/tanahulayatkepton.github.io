import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import TeamSection from "@/components/TeamSection";
import BackgroundSection from "@/components/BackgroundSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MapSection />
        <TeamSection />
        <BackgroundSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
