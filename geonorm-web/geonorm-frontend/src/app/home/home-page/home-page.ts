import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface DemoResponse {
  input: string;
  normalized: string;
  components: {
    street_type: string;
    street_name: string;
    house_number: string;
    apartment?: string;
    neighborhood?: string;
    city: string;
    department: string;
    country: string;
  };
  confidence_score: number;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePageComponent {
  // Señales para el estado del componente
  protected readonly demoAddress = signal('carrera 4 # 10-20, apto 301, Bogota');
  protected readonly demoResponse = signal<DemoResponse | null>(null);
  protected readonly isLoading = signal(false);

  constructor(private router: Router) {}

  // Función para simular la llamada a la API
  protected async normalizeDemo(): Promise<void> {
    this.isLoading.set(true);
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Respuesta simulada basada en el ejemplo del openapi.yaml
    const mockResponse: DemoResponse = {
      input: this.demoAddress(),
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
    };
    
    this.demoResponse.set(mockResponse);
    this.isLoading.set(false);
  }

  // Navegación al registro
  protected navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

  // Navegación a precios
  protected navigateToPricing(): void {
    this.router.navigate(['/pricing']);
  }

  // Navegación a documentación
  protected navigateToDocs(): void {
    this.router.navigate(['/docs']);
  }
}
