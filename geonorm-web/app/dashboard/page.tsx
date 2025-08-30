"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { 
  Key, 
  Copy, 
  Check, 
  Eye, 
  EyeOff, 
  RotateCcw,
  CreditCard,
  BarChart3,
  Settings,
  LogOut,
  ExternalLink
} from "lucide-react"

export default function DashboardPage() {
  const [apiKeyVisible, setApiKeyVisible] = useState(false)
  const [copied, setCopied] = useState(false)
  const [user] = useState({
    name: "Juan Pérez",
    email: "juan@ejemplo.com",
    plan: "Developer",
    apiKey: "gn_live_1234567890abcdefghijklmnopqrstuvwxyz"
  })
  
  const [usage] = useState({
    current: 247,
    limit: 500,
    percentage: 49.4
  })

  const copyApiKey = () => {
    navigator.clipboard.writeText(user.apiKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleRegenerateKey = () => {
    if (confirm("¿Estás seguro de que quieres regenerar tu API Key? La clave anterior dejará de funcionar.")) {
      // Simular regeneración de API Key
      alert("API Key regenerada exitosamente")
    }
  }

  const handleLogout = () => {
    // Simular logout
    window.location.href = "/login"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="font-bold text-xl text-gray-900">GeoNorm</span>
              </Link>
              <Separator orientation="vertical" className="h-6" />
              <span className="text-gray-600">Dashboard</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Hola, {user.name}</span>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Salir
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dashboard de Desarrollador
            </h1>
            <p className="text-gray-600">
              Gestiona tu API Key, monitorea tu uso y administra tu suscripción.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Plan Actual
                </CardTitle>
                <Settings className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{user.plan}</div>
                <p className="text-xs text-gray-600 mt-1">
                  Plan gratuito activo
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Uso Este Mes
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {usage.current.toLocaleString()}
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  de {usage.limit.toLocaleString()} peticiones
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${usage.percentage}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">
                  Estado
                </CardTitle>
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">Activo</div>
                <p className="text-xs text-gray-600 mt-1">
                  API funcionando correctamente
                </p>
              </CardContent>
            </Card>
          </div>

          {/* API Key Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Key className="h-5 w-5 text-primary" />
                <CardTitle>API Key</CardTitle>
              </div>
              <CardDescription>
                Tu clave de autenticación para acceder a la API de GeoNorm.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-100 rounded-lg p-3 font-mono text-sm">
                  {apiKeyVisible ? user.apiKey : "gn_live_" + "•".repeat(32)}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setApiKeyVisible(!apiKeyVisible)}
                >
                  {apiKeyVisible ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyApiKey}
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Mantén tu API Key segura y no la compartas públicamente.
                </div>
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={handleRegenerateKey}
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Regenerar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Usage Details */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <CardTitle>Uso de la API</CardTitle>
              </div>
              <CardDescription>
                Resumen detallado de tu consumo de API este mes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">127</div>
                  <div className="text-sm text-gray-600">Normalize</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">89</div>
                  <div className="text-sm text-gray-600">Confidence</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">23</div>
                  <div className="text-sm text-gray-600">Geolocate</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">8</div>
                  <div className="text-sm text-gray-600">Validate-full</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-blue-900">
                      ¿Necesitas más peticiones?
                    </h3>
                    <p className="text-sm text-blue-700 mt-1">
                      Actualiza a nuestro plan Startup para obtener 10,000 peticiones por mes.
                    </p>
                  </div>
                  <Link href="/pricing">
                    <Button size="sm">
                      Ver Planes
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Billing Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <CreditCard className="h-5 w-5 text-primary" />
                <CardTitle>Facturación</CardTitle>
              </div>
              <CardDescription>
                Gestiona tu suscripción y métodos de pago.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">Plan {user.plan}</h3>
                  <p className="text-sm text-gray-600">
                    {user.plan === "Developer" ? "Gratis para siempre" : "$49/mes"}
                  </p>
                </div>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Gestionar Suscripción
                </Button>
              </div>
              
              {user.plan === "Developer" && (
                <div className="mt-4 text-sm text-gray-600">
                  Tu plan gratuito incluye 500 peticiones al mes. 
                  <Link href="/pricing" className="text-primary hover:underline ml-1">
                    Actualiza tu plan
                  </Link> para obtener más funcionalidades.
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle>Enlaces Rápidos</CardTitle>
              <CardDescription>
                Recursos útiles para empezar con la API.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/docs" className="block">
                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Documentación</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Guías completas y referencias de la API
                    </div>
                  </div>
                </Link>
                
                <a 
                  href="https://api.geonorm.com/docs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block"
                >
                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900 flex items-center">
                      API Playground 
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Prueba la API directamente en tu navegador
                    </div>
                  </div>
                </a>
                
                <Link href="/contact" className="block">
                  <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="font-medium text-gray-900">Soporte</div>
                    <div className="text-sm text-gray-600 mt-1">
                      ¿Necesitas ayuda? Contáctanos
                    </div>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}