import { Button } from "@/components/ui/button";
import { MapPin, Users, FileText } from "lucide-react";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-ocean rounded-lg">
              <MapPin className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Hukum Adat</h1>
              <p className="text-sm text-muted-foreground">Kepulauan Buton</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('map')}
              className="hover:bg-primary/10"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Peta
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('team')}
              className="hover:bg-primary/10"
            >
              <Users className="h-4 w-4 mr-2" />
              Tim Peneliti
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => scrollToSection('background')}
              className="hover:bg-primary/10"
            >
              <FileText className="h-4 w-4 mr-2" />
              Latar Belakang
            </Button>
          </nav>

          <Button
            variant="default"
            size="sm"
            className="bg-gradient-ocean hover:opacity-90 transition-opacity"
            onClick={() => scrollToSection('map')}
          >
            Lihat Peta
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;