import { Component, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ClipboardModule } from '@angular/cdk/clipboard';

interface ApiEndpoint {
  id: string;
  name: string;
  method: string;
  path: string;
  description: string;
  requestExample: any;
  responseExample: any;
  curlExample: string;
  pythonExample: string;
  angularExample: string;
}

interface DocSection {
  id: string;
  title: string;
  icon: string;
}

@Component({
  selector: 'app-docs-page',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    ClipboardModule
  ],
  templateUrl: './docs-page.html',
  styleUrl: './docs-page.css'
})
export class DocsPageComponent {
  protected readonly currentSection = signal<string>('getting-started');
  protected readonly isSidenavOpen = signal<boolean>(true);

  protected readonly sections: DocSection[] = [
    { id: 'getting-started', title: 'Comenzar', icon: 'rocket_launch' },
    { id: 'authentication', title: 'Autenticación', icon: 'key' },
    { id: 'endpoints', title: 'Endpoints', icon: 'api' },
    { id: 'examples', title: 'Ejemplos', icon: 'code' },
    { id: 'errors', title: 'Errores', icon: 'error_outline' }
  ];

  protected readonly endpoints: ApiEndpoint[] = [
    {
      id: 'normalize',
      name: 'Normalizar Dirección',
      method: 'POST',
      path: '/v1/normalize',
      description: 'Convierte una dirección en formato libre a una representación estándar y estructurada.',
      requestExample: {
        address: 'carrera 4 # 10-20, apto 301, Bogotá'
      },
      responseExample: {
        input: 'carrera 4 # 10-20, apto 301, Bogotá',
        normalized: 'CARRERA 4 # 10-20, APARTAMENTO 301, BOGOTÁ D.C.'
      },
      curlExample: `curl -X POST "https://api.geonorm.com/v1/normalize" \\
  -H "X-API-Key: tu-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{"address": "carrera 4 # 10-20, apto 301, Bogotá"}'`,
      pythonExample: `import requests

url = "https://api.geonorm.com/v1/normalize"
headers = {
    "X-API-Key": "tu-api-key",
    "Content-Type": "application/json"
}
data = {
    "address": "carrera 4 # 10-20, apto 301, Bogotá"
}

response = requests.post(url, headers=headers, json=data)
result = response.json()`,
      angularExample: `import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders({
  'X-API-Key': 'tu-api-key',
  'Content-Type': 'application/json'
});

const data = {
  address: 'carrera 4 # 10-20, apto 301, Bogotá'
};

this.http.post('https://api.geonorm.com/v1/normalize', data, { headers })
  .subscribe(result => console.log(result));`
    },
    {
      id: 'confidence',
      name: 'Puntaje de Confianza',
      method: 'POST',
      path: '/v1/confidence',
      description: 'Obtiene un puntaje de confianza (0-1) que indica qué tan probable es que la dirección sea válida.',
      requestExample: {
        address: 'carrera 4 # 10-20, apto 301, Bogotá'
      },
      responseExample: {
        input: 'carrera 4 # 10-20, apto 301, Bogotá',
        confidence_score: 0.95,
        factors: [
          'Street type recognized',
          'House number format valid',
          'City found in database'
        ]
      },
      curlExample: `curl -X POST "https://api.geonorm.com/v1/confidence" \\
  -H "X-API-Key: tu-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{"address": "carrera 4 # 10-20, apto 301, Bogotá"}'`,
      pythonExample: `import requests

url = "https://api.geonorm.com/v1/confidence"
headers = {
    "X-API-Key": "tu-api-key",
    "Content-Type": "application/json"
}
data = {
    "address": "carrera 4 # 10-20, apto 301, Bogotá"
}

response = requests.post(url, headers=headers, json=data)
result = response.json()`,
      angularExample: `const data = {
  address: 'carrera 4 # 10-20, apto 301, Bogotá'
};

this.http.post('https://api.geonorm.com/v1/confidence', data, { headers })
  .subscribe(result => {
    console.log('Confianza:', result.confidence_score);
  });`
    },
    {
      id: 'geolocate',
      name: 'Geolocalización',
      method: 'POST',
      path: '/v1/geolocate',
      description: 'Obtiene las coordenadas geográficas (latitud y longitud) de una dirección.',
      requestExample: {
        address: 'carrera 4 # 10-20, apto 301, Bogotá'
      },
      responseExample: {
        input: 'carrera 4 # 10-20, apto 301, Bogotá',
        coordinates: {
          latitude: 4.598056,
          longitude: -74.075833
        },
        precision: 'building'
      },
      curlExample: `curl -X POST "https://api.geonorm.com/v1/geolocate" \\
  -H "X-API-Key: tu-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{"address": "carrera 4 # 10-20, apto 301, Bogotá"}'`,
      pythonExample: `import requests

url = "https://api.geonorm.com/v1/geolocate"
headers = {
    "X-API-Key": "tu-api-key",
    "Content-Type": "application/json"
}
data = {
    "address": "carrera 4 # 10-20, apto 301, Bogotá"
}

response = requests.post(url, headers=headers, json=data)
result = response.json()`,
      angularExample: `const data = {
  address: 'carrera 4 # 10-20, apto 301, Bogotá'
};

this.http.post('https://api.geonorm.com/v1/geolocate', data, { headers })
  .subscribe(result => {
    const { latitude, longitude } = result.coordinates;
    console.log(\`Coordenadas: \${latitude}, \${longitude}\`);
  });`
    },
    {
      id: 'validate-full',
      name: 'Validación Completa',
      method: 'POST',
      path: '/v1/validate-full',
      description: 'Realiza una validación completa que incluye normalización, componentes estructurados, puntaje de confianza y geolocalización.',
      requestExample: {
        address: 'carrera 4 # 10-20, apto 301, Bogotá'
      },
      responseExample: {
        input: 'carrera 4 # 10-20, apto 301, Bogotá',
        normalized: 'CARRERA 4 # 10-20, APARTAMENTO 301, BOGOTÁ D.C.',
        components: {
          street_type: 'CARRERA',
          street_name: '4',
          house_number: '10-20',
          apartment: '301',
          neighborhood: 'CENTRO',
          city: 'BOGOTÁ D.C.',
          department: 'BOGOTÁ D.C.',
          country: 'COLOMBIA'
        },
        confidence_score: 0.95,
        coordinates: {
          latitude: 4.598056,
          longitude: -74.075833
        }
      },
      curlExample: `curl -X POST "https://api.geonorm.com/v1/validate-full" \\
  -H "X-API-Key: tu-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{"address": "carrera 4 # 10-20, apto 301, Bogotá"}'`,
      pythonExample: `import requests

url = "https://api.geonorm.com/v1/validate-full"
headers = {
    "X-API-Key": "tu-api-key",
    "Content-Type": "application/json"
}
data = {
    "address": "carrera 4 # 10-20, apto 301, Bogotá"
}

response = requests.post(url, headers=headers, json=data)
result = response.json()

# Acceso a los componentes
street_type = result['components']['street_type']
city = result['components']['city']
coordinates = result['coordinates']`,
      angularExample: `interface ValidationResponse {
  input: string;
  normalized: string;
  components: {
    street_type: string;
    city: string;
    // ... otros campos
  };
  confidence_score: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

const data = { address: 'carrera 4 # 10-20, apto 301, Bogotá' };

this.http.post<ValidationResponse>('/v1/validate-full', data, { headers })
  .subscribe(result => {
    console.log('Dirección normalizada:', result.normalized);
    console.log('Confianza:', result.confidence_score);
    console.log('Coordenadas:', result.coordinates);
  });`
    }
  ];

  constructor(private router: Router) {}

  protected setCurrentSection(sectionId: string): void {
    this.currentSection.set(sectionId);
  }

  protected toggleSidenav(): void {
    this.isSidenavOpen.set(!this.isSidenavOpen());
  }

  protected navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

  protected getEndpoint(id: string): ApiEndpoint | undefined {
    return this.endpoints.find(endpoint => endpoint.id === id);
  }
}
