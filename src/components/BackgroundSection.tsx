import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Target, Lightbulb, CheckCircle, TrendingUp } from "lucide-react";

const BackgroundSection = () => {
  return (
    <section id="background" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latar Belakang Penelitian
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Memahami konteks, tujuan, dan dampak penelitian pemetaan hukum adat di Kepulauan Buton
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="context" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="context">Konteks</TabsTrigger>
              <TabsTrigger value="objectives">Tujuan</TabsTrigger>
              <TabsTrigger value="methodology">Metode</TabsTrigger>
              <TabsTrigger value="impact">Dampak</TabsTrigger>
            </TabsList>

            <TabsContent value="context" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-6 w-6 text-accent" />
                    Konteks Penelitian
                  </CardTitle>
                  <CardDescription>
                    Landasan teoritis dan situasi faktual yang melatarbelakangi penelitian
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Situasi Hukum Adat di Indonesia</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Indonesia memiliki lebih dari 1.300 suku bangsa dengan sistem hukum adat yang beragam. 
                      Kepulauan Buton sebagai bagian dari Sulawesi Tenggara memiliki warisan hukum adat yang kaya, 
                      namun sering kali tidak terdokumentasi dengan baik atau tidak diakui secara formal.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Tantangan Dokumentasi</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Kurangnya sistem informasi yang terintegrasi menyebabkan kesulitan dalam mengakses 
                      informasi status hukum adat, sengketa wilayah, dan perlindungan hak-hak masyarakat adat. 
                      Hal ini berdampak pada ketidakpastian hukum dan potensi konflik.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Peran Teknologi</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Perkembangan teknologi informasi geografis dan visualisasi data memberikan peluang 
                      untuk menciptakan sistem dokumentasi yang lebih efektif, interaktif, dan mudah diakses 
                      oleh berbagai stakeholder.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="objectives" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-6 w-6 text-primary" />
                      Tujuan Utama
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span className="text-sm">Mengembangkan sistem peta digital status hukum adat yang interaktif</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span className="text-sm">Meningkatkan kepastian hukum bagi masyarakat adat Kepulauan Buton</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span className="text-sm">Menyediakan platform akses informasi yang mudah dan transparan</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-accent" />
                      Tujuan Khusus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span className="text-sm">Inventarisasi lengkap wilayah adat di Kepulauan Buton</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span className="text-sm">Integrasi data geografis dengan sistem hukum formal</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span className="text-sm">Pemberdayaan masyarakat melalui teknologi informasi</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="methodology" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Metodologi Penelitian</CardTitle>
                  <CardDescription>
                    Pendekatan sistematis dalam pengumpulan, analisis, dan visualisasi data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Tahap Pengumpulan Data</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                          <h5 className="font-medium">Penelitian Lapangan</h5>
                          <p className="text-sm text-muted-foreground">Survey langsung ke wilayah adat dengan melibatkan tokoh masyarakat</p>
                        </div>
                        <div className="border-l-4 border-secondary pl-4">
                          <h5 className="font-medium">Dokumentasi Arsip</h5>
                          <p className="text-sm text-muted-foreground">Analisis dokumen hukum, peraturan daerah, dan arsip sejarah</p>
                        </div>
                        <div className="border-l-4 border-accent pl-4">
                          <h5 className="font-medium">Pemetaan Digital</h5>
                          <p className="text-sm text-muted-foreground">Penggunaan GPS dan teknologi GIS untuk pemetaan presisi</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Tahap Analisis & Visualisasi</h4>
                      <div className="space-y-4">
                        <div className="border-l-4 border-primary pl-4">
                          <h5 className="font-medium">Analisis Spasial</h5>
                          <p className="text-sm text-muted-foreground">Pengolahan data geografis menggunakan software GIS profesional</p>
                        </div>
                        <div className="border-l-4 border-secondary pl-4">
                          <h5 className="font-medium">Integrasi Database</h5>
                          <p className="text-sm text-muted-foreground">Penggabungan data hukum dengan informasi geografis</p>
                        </div>
                        <div className="border-l-4 border-accent pl-4">
                          <h5 className="font-medium">Visualisasi Tableau</h5>
                          <p className="text-sm text-muted-foreground">Pembuatan dashboard interaktif untuk akses publik</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="impact" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Dampak Sosial</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Peningkatan kesadaran hukum masyarakat adat</li>
                      <li>• Penguatan identitas budaya lokal</li>
                      <li>• Pengurangan konflik wilayah adat</li>
                      <li>• Pemberdayaan ekonomi masyarakat</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Dampak Hukum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Kepastian status hukum wilayah adat</li>
                      <li>• Integrasi dengan sistem hukum nasional</li>
                      <li>• Perlindungan hak-hak masyarakat adat</li>
                      <li>• Basis data untuk kebijakan pemerintah</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Dampak Teknologi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Model sistem informasi yang dapat direplikasi</li>
                      <li>• Literasi digital masyarakat adat</li>
                      <li>• Platform kolaborasi stakeholder</li>
                      <li>• Inovasi pelayanan publik</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;