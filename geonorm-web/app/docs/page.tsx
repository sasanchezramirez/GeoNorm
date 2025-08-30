"use client"

import { useState } from "react"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { CodeBlock } from "@/components/shared/code-block"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Key, 
  Code, 
  MapPin, 
  Target, 
  Shield, 
  Zap,
  ChevronRight 
} from "lucide-react"

const sidebarItems = [
  { id: "authentication", title: "Autenticación", icon: Key },
  { id: "endpoints", title: "Endpoints", icon: Code },
  { id: "examples", title: "Ejemplos de Código", icon: Code },
]

const endpoints = [
  {
    id: "normalize",
    title: "/v1/normalize",
    description: "Convierte direcciones caóticas en un formato estándar y limpio",
    icon: Zap,
    method: "POST",
    request: {
      address_string: "carrera 4 # 10-20, apto 301, Bogota"
    },
    response: {
      normalizedString: "Carrera 4 # 10 - 20, Apto 301, Bogotá, D.C."
    }
  },
  {
    id: "confidence",
    title: "/v1/confidence",
    description: "Obtén un puntaje de confianza para cada dirección",
    icon: Target,
    method: "POST",
    request: {
      address_string: "carrera 4 # 10-20, apto 301, Bogota"
    },
    response: {
      normalizedString: "Carrera 4 # 10 - 20, Apto 301, Bogotá, D.C.",
      confidenceScore: 0.95
    }
  },
  {
    id: "geolocate",
    title: "/v1/geolocate",
    description: "Enriquece tus datos con coordenadas de latitud y longitud exactas",
    icon: MapPin,
    method: "POST",
    request: {
      address_string: "carrera 4 # 10-20, apto 301, Bogota"
    },
    response: {
      normalizedString: "Carrera 4 # 10 - 20, Apto 301, Bogotá, D.C.",
      latitude: 4.60971,
      longitude: -74.08175
    }
  },
  {
    id: "validate-full",
    title: "/v1/validate-full",
    description: "Accede a un objeto de datos completo con todos los detalles de la dirección",
    icon: Shield,
    method: "POST",
    request: {
      address_string: "carrera 4 # 10-20, apto 301, Bogota"
    },
    response: {
      isValid: true,
      confidenceScore: 0.95,
      normalizedAddress: {
        street: "Carrera 4",
        number: "10 - 20",
        complement: "Apto 301",
        city: "Bogotá",
        department: "D.C."
      },
      geolocation: {
        latitude: 4.60971,
        longitude: -74.08175
      }
    }
  }
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("authentication")

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-16">
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-50 border-r min-h-screen p-6 sticky top-16">
            <div className="space-y-1">
              {sidebarItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.title}
                  </button>
                )
              })}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl mx-auto p-8">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Documentación de la API
              </h1>
              <p className="text-xl text-gray-600">
                Todo lo que necesitas para integrar GeoNorm en tu aplicación.
              </p>
            </div>

            {/* Authentication Section */}
            {activeSection === "authentication" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Autenticación
                  </h2>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Key className="h-5 w-5 text-primary" />
                        API Key
                      </CardTitle>
                      <CardDescription>
                        La API de GeoNorm utiliza autenticación basada en API Key para todas las peticiones.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">
                        Todas las peticiones a la API deben incluir tu API Key en el header <code className="bg-gray-100 px-2 py-1 rounded text-sm">X-API-Key</code>.
                      </p>
                      
                      <CodeBlock
                        language="bash"
                        title="Ejemplo de Autenticación"
                        code={`curl -X POST "https://api.geonorm.com/v1/normalize" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: tu_api_key_aqui" \\
  -d '{
    "address_string": "carrera 4 # 10-20, apto 301, Bogota"
  }'`}
                      />
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-800 text-sm">
                          <strong>Importante:</strong> Nunca compartas tu API Key públicamente. 
                          Mantenla segura y utilízala solo en el servidor.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Endpoints Section */}
            {activeSection === "endpoints" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Endpoints de la API
                  </h2>
                  <p className="text-gray-600 mb-8">
                    GeoNorm ofrece cuatro endpoints principales para diferentes casos de uso.
                  </p>
                </div>

                <div className="space-y-12">
                  {endpoints.map((endpoint) => {
                    const Icon = endpoint.icon
                    return (
                      <Card key={endpoint.id} className="overflow-hidden">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                                  {endpoint.method}
                                </span>
                                <code className="text-lg">{endpoint.title}</code>
                              </div>
                            </div>
                          </CardTitle>
                          <CardDescription className="ml-13">
                            {endpoint.description}
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Request */}
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Request Body</h4>
                              <CodeBlock
                                language="json"
                                code={JSON.stringify(endpoint.request, null, 2)}
                              />
                            </div>
                            
                            {/* Response */}
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">Response (200 OK)</h4>
                              <CodeBlock
                                language="json"
                                code={JSON.stringify(endpoint.response, null, 2)}
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Examples Section */}
            {activeSection === "examples" && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Ejemplos de Código
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Ejemplos listos para copiar y pegar en diferentes lenguajes de programación.
                  </p>
                </div>

                <Tabs defaultValue="curl" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="curl">cURL</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="curl" className="space-y-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>cURL Example</CardTitle>
                        <CardDescription>
                          Ejemplo básico usando cURL para normalizar una dirección.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <CodeBlock
                          language="bash"
                          code={`# Normalizar una dirección
curl -X POST "https://api.geonorm.com/v1/normalize" \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: tu_api_key_aqui" \\
  -d '{
    "address_string": "carrera 4 # 10-20, apto 301, Bogota"
  }'

# Respuesta
{
  "normalizedString": "Carrera 4 # 10 - 20, Apto 301, Bogotá, D.C."
}`}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="python" className="space-y-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Python (requests)</CardTitle>
                        <CardDescription>
                          Usando la librería requests de Python.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <CodeBlock
                          language="python"
                          code={`import requests
import json

# Configuración
API_KEY = "tu_api_key_aqui"
BASE_URL = "https://api.geonorm.com/v1"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

def normalize_address(address):
    """Normalizar una dirección"""
    data = {
        "address_string": address
    }
    
    response = requests.post(
        f"{BASE_URL}/normalize",
        headers=headers,
        json=data
    )
    
    if response.status_code == 200:
        return response.json()
    else:
        response.raise_for_status()

# Ejemplo de uso
address = "carrera 4 # 10-20, apto 301, Bogota"
result = normalize_address(address)
print(json.dumps(result, indent=2, ensure_ascii=False))`}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="javascript" className="space-y-6 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>JavaScript (fetch)</CardTitle>
                        <CardDescription>
                          Usando fetch API nativo de JavaScript.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <CodeBlock
                          language="javascript"
                          code={`// Configuración
const API_KEY = "tu_api_key_aqui";
const BASE_URL = "https://api.geonorm.com/v1";

async function normalizeAddress(address) {
  try {
    const response = await fetch(\`\${BASE_URL}/normalize\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY
      },
      body: JSON.stringify({
        address_string: address
      })
    });

    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error normalizando dirección:', error);
    throw error;
  }
}

// Ejemplo de uso
const address = "carrera 4 # 10-20, apto 301, Bogota";
normalizeAddress(address)
  .then(result => {
    console.log('Dirección normalizada:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });`}
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  )
}