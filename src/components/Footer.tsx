import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-ocean text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/20 rounded-lg">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Hukum Adat</h3>
                <p className="text-sm opacity-80">Kepulauan Buton</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Platform penelitian dan dokumentasi status hukum adat berbasis teknologi informasi 
              untuk masyarakat adat Kepulauan Buton.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#map" className="opacity-80 hover:opacity-100 transition-opacity">
                  Peta Interaktif
                </a>
              </li>
              <li>
                <a href="#team" className="opacity-80 hover:opacity-100 transition-opacity">
                  Tim Peneliti
                </a>
              </li>
              <li>
                <a href="#background" className="opacity-80 hover:opacity-100 transition-opacity">
                  Latar Belakang
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Sumber Daya</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1">
                  Dokumentasi API
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1">
                  Dataset Terbuka
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1">
                  Panduan Pengguna
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="opacity-80">penelitian@uho.ac.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="opacity-80">+62 401 123456</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 opacity-80 mt-0.5" />
                <span className="opacity-80">
                  Universitas Halu Oleo<br />
                  Kendari, Sulawesi Tenggara
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            © 2024 Penelitian Hukum Adat Kepulauan Buton. Hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
              Kebijakan Privasi
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-white/10">
              Syarat Penggunaan
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;