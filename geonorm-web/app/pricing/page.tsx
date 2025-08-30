import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Check, Star, Zap, Building } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20 pb-16">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Precios Simples y Transparentes
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tu proyecto. 
              Todos los planes incluyen acceso completo a nuestra API.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              {/* Developer Plan */}
              <Card className="relative border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Developer</CardTitle>
                  <CardDescription>Perfecto para empezar</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">Gratis</span>
                    <span className="text-gray-500 ml-2">para siempre</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">500 peticiones/mes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Acceso a todos los endpoints</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Soporte comunitario</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Documentación completa</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Ejemplos de código</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Link href="/sign-up" className="w-full">
                    <Button className="w-full" size="lg">
                      Empezar Gratis
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Startup Plan */}
              <Card className="relative border-2 border-primary hover:shadow-xl transition-all duration-300 scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Más Popular
                  </div>
                </div>
                
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Startup</CardTitle>
                  <CardDescription>Para proyectos en crecimiento</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">$49</span>
                    <span className="text-gray-500 ml-2">/mes</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">10,000 peticiones/mes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Acceso a todos los endpoints</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Soporte por email</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Dashboard avanzado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Webhooks</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Métricas detalladas</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Link href="/sign-up" className="w-full">
                    <Button className="w-full" size="lg">
                      Elegir Plan
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="relative border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <CardDescription>Para empresas grandes</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">Personalizado</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Peticiones personalizadas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Soporte prioritario</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">SLA garantizado</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Integración dedicada</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Funciones personalizadas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">Gestor de cuenta</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Link href="/contact" className="w-full">
                    <Button className="w-full" size="lg" variant="outline">
                      Contactar a Ventas
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Preguntas Frecuentes
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Puedo cambiar de plan en cualquier momento?
                </h3>
                <p className="text-gray-600">
                  Sí, puedes actualizar o degradar tu plan en cualquier momento desde tu dashboard. 
                  Los cambios se aplicarán inmediatamente y se prorrateará el costo.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Qué pasa si excedo mi límite de peticiones?
                </h3>
                <p className="text-gray-600">
                  Si excedes tu límite, la API dejará de responder hasta el siguiente mes. 
                  Te recomendamos monitorear tu uso y actualizar tu plan si es necesario.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Ofrecen descuentos por volumen?
                </h3>
                <p className="text-gray-600">
                  Sí, para el plan Enterprise ofrecemos descuentos por volumen. 
                  Contáctanos para discutir tus necesidades específicas.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Cómo funciona la facturación?
                </h3>
                <p className="text-gray-600">
                  Todos los pagos se procesan de forma segura a través de Stripe. 
                  Puedes gestionar tu suscripción, ver facturas y actualizar métodos de pago desde tu dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿Listo para empezar?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Comienza gratis y escala según tus necesidades.
              </p>
              <Link href="/sign-up">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  Crear Cuenta Gratis
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}