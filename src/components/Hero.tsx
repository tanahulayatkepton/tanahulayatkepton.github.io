import { Button } from "@/components/ui/button";
import { ArrowDown, MapPin, Database, Globe } from "lucide-react";

const Hero = () => {
  const scrollToMap = () => {
    const element = document.getElementById('map');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Model Peta Status 
              <span className="bg-gradient-ocean bg-clip-text text-transparent"> Hukum Adat</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              Kepulauan Buton
            </h2>
          </div>

          {/* Description */}
          <div className="animate-slide-up delay-200">
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Penelitian untuk mengembangkan peta status hukum adat berbasis visual data menggunakan 
              <span className="font-semibold text-accent"> Tableau</span> untuk meningkatkan pelayanan 
              kepastian hukum pada masyarakat adat di Kepulauan Buton.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up delay-400">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-gradient-ocean rounded-lg w-fit mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Peta Interaktif</h3>
              <p className="text-sm text-muted-foreground">Visualisasi data geografis yang responsif dan mudah digunakan</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-gradient-island rounded-lg w-fit mx-auto mb-4">
                <Database className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Data Terintegrasi</h3>
              <p className="text-sm text-muted-foreground">Sistem basis data hukum adat yang komprehensif</p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-accent/20 rounded-lg w-fit mx-auto mb-4">
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Akses Global</h3>
              <p className="text-sm text-muted-foreground">Platform web yang dapat diakses dari berbagai perangkat</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up delay-600">
            <Button
              size="lg"
              onClick={scrollToMap}
              className="bg-gradient-ocean hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl animate-pulse-glow"
            >
              Jelajahi Peta Sekarang
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-secondary/10 rounded-full animate-float delay-500"></div>
    </section>
  );
};

export default Hero;