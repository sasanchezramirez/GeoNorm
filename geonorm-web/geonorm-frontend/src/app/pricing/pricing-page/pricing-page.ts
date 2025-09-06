import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonAction: string;
  popular?: boolean;
  color: string;
}

@Component({
  selector: 'app-pricing-page',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.css'
})
export class PricingPageComponent {
  protected readonly plans: PricingPlan[] = [
    {
      name: 'Developer',
      price: 'Gratis',
      period: 'para siempre',
      description: 'Perfecto para desarrolladores que empiezan a experimentar con GeoNorm API.',
      features: [
        '500 peticiones/mes',
        'Acceso a todos los endpoints',
        'Documentación completa',
        'Soporte comunitario',
        'HTTPS y autenticación API Key',
        'Límite de velocidad: 60 req/min'
      ],
      buttonText: 'Empezar Gratis',
      buttonAction: 'register',
      color: 'blue'
    },
    {
      name: 'Startup',
      price: '$29',
      period: '/mes',
      description: 'Ideal para startups y proyectos en crecimiento que necesitan más volumen.',
      features: [
        '10,000 peticiones/mes',
        'Acceso a todos los endpoints',
        'Documentación completa',
        'Soporte por email',
        'HTTPS y autenticación API Key',
        'Límite de velocidad: 300 req/min',
        'Reportes de uso mensuales',
        'SLA del 99.9%'
      ],
      buttonText: 'Elegir Plan',
      buttonAction: 'register',
      popular: true,
      color: 'green'
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      period: '',
      description: 'Para empresas que necesitan volúmenes altos y soporte personalizado.',
      features: [
        'Peticiones personalizadas',
        'Acceso a todos los endpoints',
        'Soporte prioritario 24/7',
        'SLA personalizado',
        'On-premise disponible',
        'Integración dedicada',
        'Reportes personalizados',
        'Consultoría técnica'
      ],
      buttonText: 'Contactar a Ventas',
      buttonAction: 'contact',
      color: 'purple'
    }
  ];

  constructor(private router: Router) {}

  protected handlePlanAction(action: string): void {
    switch (action) {
      case 'register':
        this.router.navigate(['/register']);
        break;
      case 'contact':
        // Implementar modal de contacto o redireccionar a formulario
        console.log('Contactar ventas');
        break;
    }
  }

  protected navigateToRegister(): void {
    this.router.navigate(['/register']);
  }

  protected navigateToDocs(): void {
    this.router.navigate(['/docs']);
  }
}
