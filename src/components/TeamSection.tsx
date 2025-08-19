import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, User, Award, BookOpen } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Ahmad Rizal",
      role: "Ketua Peneliti",
      expertise: "Hukum Adat",
      affiliation: "Universitas Halu Oleo",
      description: "Pakar hukum adat dengan pengalaman 15 tahun dalam penelitian sistem hukum tradisional Indonesia"
    },
    {
      name: "Prof. Siti Maryam",
      role: "Peneliti Utama",
      expertise: "Antropologi Hukum",
      affiliation: "Universitas Halu Oleo",
      description: "Spesialis antropologi hukum dengan fokus pada masyarakat adat Sulawesi Tenggara"
    },
    {
      name: "M. Farid Teknologi",
      role: "Analis Data",
      expertise: "Data Visualization",
      affiliation: "Tim Teknis",
      description: "Ahli visualisasi data dan pengembangan sistem informasi geografis berbasis web"
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tim Peneliti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tim multidisipliner yang berpengalaman dalam penelitian hukum adat dan teknologi informasi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
                <Badge variant="secondary" className="w-fit mx-auto mt-2">
                  {member.expertise}
                </Badge>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  {member.affiliation}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Kontak
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Credentials */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2">
                <Award className="h-6 w-6 text-accent" />
                Kredensial Penelitian
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Institusi Pendukung</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Universitas Halu Oleo</li>
                    <li>• Lembaga Penelitian dan Pengabdian Masyarakat</li>
                    <li>• Badan Registrasi Wilayah Adat (BRWA)</li>
                    <li>• Aliansi Masyarakat Adat Nusantara (AMAN)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Metodologi</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Penelitian lapangan partisipatif</li>
                    <li>• Pemetaan digital berbasis GIS</li>
                    <li>• Analisis data kualitatif dan kuantitatif</li>
                    <li>• Visualisasi interaktif dengan Tableau</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;