import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { ApiDemo } from "@/components/shared/api-demo"
import { 
  MapPin, 
  Zap, 
  Shield, 
  Target,
  CheckCircle,
  ArrowRight,
  Code,
  Database,
  Cloud,
  Gauge
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                La API de Direcciones que tus 
                <span className="text-primary"> Aplicaciones Necesitan</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Estandariza, valida y enriquece direcciones postales en Colombia 
                con una API simple, rápida y confiable.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/sign-up">
                  <Button size="lg" className="text-lg px-8 py-3">
                    Obtén tu API Key Gratis
                  </Button>
                </Link>
                <p className="text-sm text-gray-500">
                  No se requiere tarjeta de crédito
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Demo Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Prueba GeoNorm en Tiempo Real
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ingresa cualquier dirección y ve cómo GeoNorm la transforma en datos estructurados y precisos.
              </p>
            </div>
            <ApiDemo />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Por qué GeoNorm?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Cuatro características clave que hacen de GeoNorm la mejor opción para tu proyecto.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Normalización Simple</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Convierte direcciones caóticas en un formato estándar y limpio.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Puntaje de Confianza</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Obtén un puntaje de confianza para cada dirección y toma decisiones informadas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Geolocalización Precisa</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Enriquece tus datos con coordenadas de latitud y longitud exactas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Validación Completa</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Accede a un objeto de datos completo con todos los detalles de la dirección.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Casos de Uso
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Descubre cómo GeoNorm puede transformar tu negocio en diferentes sectores.
              </p>
            </div>

            <Tabs defaultValue="ecommerce" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                <TabsTrigger value="fintech">Fintech</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="ecommerce" className="mt-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-4">E-commerce</h3>
                      <p className="text-gray-600 mb-6">
                        Mejora las tasas de entrega reduciendo direcciones incorrectas. 
                        Valida direcciones en tiempo real durante el checkout y optimiza 
                        tu logística con coordenadas precisas.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Menos devoluciones</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Entregas más rápidas</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Mejor experiencia</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="fintech" className="mt-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-4">Fintech</h3>
                      <p className="text-gray-600 mb-6">
                        Cumple con regulaciones KYC validando direcciones de clientes. 
                        Reduce el fraude con verificación de ubicación precisa y 
                        mejora la evaluación de riesgo crediticio.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Cumplimiento KYC</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Reducción de fraude</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Mejor scoring</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="marketing" className="mt-8">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold mb-4">Marketing</h3>
                      <p className="text-gray-600 mb-6">
                        Segmenta tu audiencia por ubicación geográfica precisa. 
                        Personaliza campañas locales y mejora la calidad de tu 
                        base de datos de clientes.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Segmentación precisa</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Campañas locales</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Datos de calidad</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* How to Start Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cómo Empezar
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comienza a usar GeoNorm en menos de 5 minutos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Crea tu Cuenta</h3>
                <p className="text-gray-600">
                  Regístrate en menos de un minuto con tu email.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Obtén tu API Key</h3>
                <p className="text-gray-600">
                  Copia tu clave desde el dashboard de desarrollador.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Haz tu Primera Llamada</h3>
                <p className="text-gray-600">
                  Integra la API con nuestros ejemplos listos para usar.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/sign-up">
                <Button size="lg" className="text-lg px-8 py-3">
                  Empezar Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Construido para Escalar
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tecnologías modernas que garantizan rendimiento y confiabilidad.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Cloud className="h-8 w-8 text-gray-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">AWS Lambda</div>
                <div className="text-xs text-gray-500">Serverless</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Code className="h-8 w-8 text-gray-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">FastAPI</div>
                <div className="text-xs text-gray-500">Python</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Database className="h-8 w-8 text-gray-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">PostgreSQL</div>
                <div className="text-xs text-gray-500">PostGIS</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Gauge className="h-8 w-8 text-gray-600" />
                </div>
                <div className="text-sm font-medium text-gray-900">Redis</div>
                <div className="text-xs text-gray-500">Cache</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿Listo para mejorar tus datos de dirección?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Únete a cientos de desarrolladores que ya confían en GeoNorm.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/sign-up">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                    Empezar Gratis
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                    Ver Documentación
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}