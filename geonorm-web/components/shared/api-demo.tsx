"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Copy, Check } from "lucide-react"

export function ApiDemo() {
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [response, setResponse] = useState({
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
  })

  const handleNormalize = async () => {
    if (!inputValue.trim()) return
    
    setIsLoading(true)
    
    // Simular llamada a la API
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simular respuesta basada en el input
    const mockResponse = {
      isValid: true,
      confidenceScore: Math.random() * 0.3 + 0.7, // Entre 0.7 y 1.0
      normalizedAddress: {
        street: "Carrera 4",
        number: "10 - 20", 
        complement: inputValue.toLowerCase().includes("apto") ? "Apto 301" : null,
        city: inputValue.toLowerCase().includes("bogota") || inputValue.toLowerCase().includes("bogotá") ? "Bogotá" : "Medellín",
        department: inputValue.toLowerCase().includes("bogota") || inputValue.toLowerCase().includes("bogotá") ? "D.C." : "Antioquia"
      },
      geolocation: {
        latitude: 4.60971 + (Math.random() - 0.5) * 0.1,
        longitude: -74.08175 + (Math.random() - 0.5) * 0.1
      }
    }
    
    setResponse(mockResponse)
    setIsLoading(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(response, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Panel Izquierdo - Input */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-5 w-5 text-primary" />
            Prueba la API en Vivo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Ingresa una dirección:
            </label>
            <Input
              placeholder="carrera 4 # 10-20, apto 301, Bogota"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="text-base"
            />
          </div>
          <Button 
            onClick={handleNormalize}
            disabled={isLoading || !inputValue.trim()}
            className="w-full"
            size="lg"
          >
            {isLoading ? "Normalizando..." : "Normalizar Dirección"}
          </Button>
          <p className="text-xs text-gray-500">
            * Esta es una demostración que simula la respuesta de la API
          </p>
        </CardContent>
      </Card>

      {/* Panel Derecho - Respuesta JSON */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Respuesta de la API
            <Button
              variant="outline"
              size="sm"
              onClick={copyToClipboard}
              className="h-8"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <pre className={`text-xs bg-gray-50 p-4 rounded-lg overflow-auto transition-opacity ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
            <code className="language-json">
              {JSON.stringify(response, null, 2)}
            </code>
          </pre>
        </CardContent>
      </Card>
    </div>
  )
}