import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, FullscreenIcon, Info, Download } from "lucide-react";

const MapSection = () => {
  return (
    <section id="map" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Peta Interaktif Hukum Adat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eksplorasi data status hukum adat di Kepulauan Buton melalui visualisasi interaktif berbasis Tableau
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="map" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="map" className="flex items-center gap-2">
                <FullscreenIcon className="h-4 w-4" />
                Peta Utama
              </TabsTrigger>
              <TabsTrigger value="analysis" className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                Analisis Data
              </TabsTrigger>
              <TabsTrigger value="reports" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Laporan
              </TabsTrigger>
            </TabsList>

            <TabsContent value="map" className="space-y-6">
              <Card className="map-container">
                <CardHeader className="bg-gradient-ocean text-primary-foreground">
                  <CardTitle className="flex items-center justify-between">
                    <span>Peta Status Hukum Adat - Kepulauan Buton</span>
                    <Button variant="secondary" size="sm" className="bg-white/20 hover:bg-white/30">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Buka Full Screen
                    </Button>
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    Visualisasi interaktif data hukum adat berbasis lokasi geografis
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  {/* Tableau Embed Placeholder */}
                  <div className="w-full h-[600px] bg-muted flex items-center justify-center relative">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                        <FullscreenIcon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Tableau Dashboard
                        </h3>
                        <p className="text-muted-foreground mb-4 max-w-md">
                          Embed your Tableau Public visualization here. Replace this placeholder with your actual Tableau embed code.
                        </p>
                        <Button variant="outline">
                          Muat Tableau Dashboard
                        </Button>
                      </div>
                    </div>
                    
                    {/* Demo overlay showing responsive design */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground border">
                        📱 Mobile Ready
                      </div>
                      <div className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground border">
                        🖥️ Desktop Optimized
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Instructions Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cara Menggunakan Peta</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <div>
                        <p className="font-medium mb-1">Navigasi Peta</p>
                        <p className="text-muted-foreground">Gunakan mouse atau touch untuk zoom dan pan peta</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <div>
                        <p className="font-medium mb-1">Filter Data</p>
                        <p className="text-muted-foreground">Pilih kategori hukum adat atau wilayah spesifik</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <div>
                        <p className="font-medium mb-1">Detail Informasi</p>
                        <p className="text-muted-foreground">Klik area untuk melihat detail status hukum</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Statistik Umum</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Wilayah Adat</span>
                        <span className="font-semibold">45 Wilayah</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Status Terdaftar</span>
                        <span className="font-semibold text-secondary">32 Wilayah</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Dalam Proses</span>
                        <span className="font-semibold text-accent">13 Wilayah</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sebaran per Pulau</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Pulau Buton</span>
                        <span className="font-semibold">18 Wilayah</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Pulau Muna</span>
                        <span className="font-semibold">15 Wilayah</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Wakatobi</span>
                        <span className="font-semibold">12 Wilayah</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="reports" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Laporan dan Dokumentasi</CardTitle>
                  <CardDescription>
                    Akses dokumen penelitian dan laporan terkait status hukum adat
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Laporan Penelitian 2024</h4>
                        <p className="text-sm text-muted-foreground">Status hukum adat terkini di Kepulauan Buton</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Unduh PDF
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Metodologi Penelitian</h4>
                        <p className="text-sm text-muted-foreground">Dokumentasi metode pengumpulan dan analisis data</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Unduh PDF
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Dataset Tableau</h4>
                        <p className="text-sm text-muted-foreground">Data mentah untuk analisis lebih lanjut</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Unduh CSV
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default MapSection;