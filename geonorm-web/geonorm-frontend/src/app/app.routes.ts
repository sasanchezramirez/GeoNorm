import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page';
import { PricingPageComponent } from './pricing/pricing-page/pricing-page';
import { DocsPageComponent } from './docs/docs-page/docs-page';
import { DashboardComponent } from './dashboard/dashboard/dashboard';
import { LoginComponent } from './dashboard/login/login';
import { RegisterComponent } from './dashboard/register/register';
import { AuthGuard } from './core/auth-guard';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'pricing', component: PricingPageComponent },
  { path: 'docs', component: DocsPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];
