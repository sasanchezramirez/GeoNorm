import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaces para la API de GeoNorm basadas en la especificación OpenAPI
export interface NormalizeRequest {
  address: string;
}

export interface NormalizeResponse {
  original_address: string;
  normalized_address: string;
  components: {
    street_type?: string;
    street_name?: string;
    street_number?: string;
    apartment?: string;
    neighborhood?: string;
    city?: string;
    department?: string;
  };
}

export interface ConfidenceResponse {
  original_address: string;
  confidence_score: number;
  confidence_level: string;
  issues: string[];
}

export interface GeolocateResponse {
  original_address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  accuracy: string;
}

export interface ValidateFullResponse {
  original_address: string;
  normalized_address: string;
  confidence_score: number;
  confidence_level: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  components: {
    street_type?: string;
    street_name?: string;
    street_number?: string;
    apartment?: string;
    neighborhood?: string;
    city?: string;
    department?: string;
  };
  issues: string[];
  accuracy: string;
}

export interface ApiKeyResponse {
  api_key: string;
  status: string;
  plan: string;
}

export interface UsageResponse {
  current_usage: number;
  limit: number;
  period: string;
  remaining: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL = 'https://api.geonorm.com/v1';

  constructor(private http: HttpClient) {}

  /**
   * Normaliza una dirección usando el endpoint /normalize
   */
  normalize(request: NormalizeRequest): Observable<NormalizeResponse> {
    return this.http.post<NormalizeResponse>(`${this.API_URL}/normalize`, request);
  }

  /**
   * Obtiene el puntaje de confianza usando el endpoint /confidence
   */
  getConfidence(request: NormalizeRequest): Observable<ConfidenceResponse> {
    return this.http.post<ConfidenceResponse>(`${this.API_URL}/confidence`, request);
  }

  /**
   * Obtiene coordenadas usando el endpoint /geolocate
   */
  geolocate(request: NormalizeRequest): Observable<GeolocateResponse> {
    return this.http.post<GeolocateResponse>(`${this.API_URL}/geolocate`, request);
  }

  /**
   * Obtiene datos completos usando el endpoint /validate-full
   */
  validateFull(request: NormalizeRequest): Observable<ValidateFullResponse> {
    return this.http.post<ValidateFullResponse>(`${this.API_URL}/validate-full`, request);
  }

  /**
   * Obtiene la API Key del usuario autenticado
   */
  getApiKey(): Observable<ApiKeyResponse> {
    return this.http.get<ApiKeyResponse>(`${this.API_URL}/user/api-key`);
  }

  /**
   * Obtiene el uso actual de la API del usuario
   */
  getUsage(): Observable<UsageResponse> {
    return this.http.get<UsageResponse>(`${this.API_URL}/user/usage`);
  }

  /**
   * Regenera la API Key del usuario
   */
  regenerateApiKey(): Observable<ApiKeyResponse> {
    return this.http.post<ApiKeyResponse>(`${this.API_URL}/user/api-key/regenerate`, {});
  }

  /**
   * Función auxiliar para simular llamadas a la API en el componente demo
   * Esta función simula la respuesta para propósitos de demostración
   */
  simulateValidateFull(address: string): Observable<ValidateFullResponse> {
    // Simulación de respuesta para el demo
    const mockResponse: ValidateFullResponse = {
      original_address: address,
      normalized_address: "Carrera 4 # 10-20, Apartamento 301, La Candelaria, Bogotá, Cundinamarca",
      confidence_score: 0.92,
      confidence_level: "high",
      coordinates: {
        latitude: 4.5981,
        longitude: -74.0758
      },
      components: {
        street_type: "Carrera",
        street_name: "4",
        street_number: "10-20",
        apartment: "301",
        neighborhood: "La Candelaria",
        city: "Bogotá",
        department: "Cundinamarca"
      },
      issues: [],
      accuracy: "rooftop"
    };

    // Simular delay de red
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(mockResponse);
        observer.complete();
      }, 1000);
    });
  }
}
