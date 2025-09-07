import { Component, signal, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { Router } from '@angular/router';

interface ApiUsage {
  current: number;
  limit: number;
  period: string;
}

interface ApiKey {
  id: string;
  name: string;
  key: string;
  created: Date;
  lastUsed?: Date;
  status: 'active' | 'inactive';
}

interface UsageLog {
  date: Date;
  endpoint: string;
  requests: number;
  responseTime: number;
  status: number;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTabsModule,
    MatTableModule,
    MatChipsModule,
    MatMenuModule,
    MatDividerModule,
    ClipboardModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  private readonly router = inject(Router);

  // Señales para el estado del componente
  protected readonly user = signal({ 
    name: 'Developer',
    email: 'dev@example.com',
    plan: 'Startup'
  });
  
  protected readonly apiUsage = signal<ApiUsage>({
    current: 2847,
    limit: 10000,
    period: 'mes'
  });

  protected readonly apiKeys = signal<ApiKey[]>([
    {
      id: '1',
      name: 'Producción',
      key: 'gn_live_1234567890abcdef1234567890abcdef',
      created: new Date('2024-01-15'),
      lastUsed: new Date('2024-01-20'),
      status: 'active'
    },
    {
      id: '2', 
      name: 'Desarrollo',
      key: 'gn_test_abcdef1234567890abcdef1234567890',
      created: new Date('2024-01-10'),
      lastUsed: new Date('2024-01-19'),
      status: 'active'
    }
  ]);

  protected readonly usageLogs = signal<UsageLog[]>([
    { 
      date: new Date('2024-01-20'), 
      endpoint: '/v1/normalize', 
      requests: 145,
      responseTime: 235,
      status: 200
    },
    { 
      date: new Date('2024-01-20'), 
      endpoint: '/v1/validate-full', 
      requests: 89,
      responseTime: 412,
      status: 200
    },
    { 
      date: new Date('2024-01-19'), 
      endpoint: '/v1/geolocate', 
      requests: 203,
      responseTime: 187,
      status: 200
    },
    { 
      date: new Date('2024-01-19'), 
      endpoint: '/v1/confidence', 
      requests: 67,
      responseTime: 156,
      status: 200
    }
  ]);

  protected readonly isKeyVisible = signal<{[key: string]: boolean}>({});
  protected readonly displayedColumns: string[] = ['date', 'endpoint', 'requests', 'responseTime', 'status'];

  ngOnInit(): void {
    // Inicializar visibilidad de keys
    const keyVisibility: {[key: string]: boolean} = {};
    this.apiKeys().forEach(key => {
      keyVisibility[key.id] = false;
    });
    this.isKeyVisible.set(keyVisibility);
  }

  protected getUsagePercentage(): number {
    const usage = this.apiUsage();
    return Math.round((usage.current / usage.limit) * 100);
  }

  protected getUsageColor(): string {
    const percentage = this.getUsagePercentage();
    if (percentage < 70) return 'primary';
    if (percentage < 90) return 'accent';
    return 'warn';
  }

  protected toggleKeyVisibility(keyId: string): void {
    const current = this.isKeyVisible();
    this.isKeyVisible.set({
      ...current,
      [keyId]: !current[keyId]
    });
  }

  protected getMaskedKey(key: string): string {
    if (key.length <= 8) return key;
    return key.substring(0, 8) + '•'.repeat(key.length - 12) + key.substring(key.length - 4);
  }

  protected regenerateKey(keyId: string): void {
    // Implementar lógica para regenerar API key
    console.log('Regenerating key:', keyId);
  }

  protected revokeKey(keyId: string): void {
    // Implementar lógica para revocar API key
    console.log('Revoking key:', keyId);
  }

  protected navigateToPricing(): void {
    this.router.navigate(['/pricing']);
  }

  protected manageSubscription(): void {
    // Redireccionar al portal de Stripe
    console.log('Redirecting to Stripe portal...');
    // window.open('https://billing.stripe.com/p/login/...', '_blank');
  }

  protected logout(): void {
    // Implementar logout
    console.log('Logging out...');
    this.router.navigate(['/']);
  }

  protected formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  }

  protected formatDateTime(date: Date): string {
    return new Intl.DateTimeFormat('es-ES', {
      year: 'numeric',
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  }
}
