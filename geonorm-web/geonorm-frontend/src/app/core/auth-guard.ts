import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth';

/**
 * Guard que protege rutas requiriendo autenticación válida
 * Redirige al login si el usuario no está autenticado o su token ha expirado
 */
export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Verificar si el usuario está autenticado y su token no ha expirado
  if (authService.isAuthenticated() && !authService.isTokenExpired()) {
    return true;
  }

  // Si el token ha expirado, hacer logout para limpiar el estado
  if (authService.isAuthenticated() && authService.isTokenExpired()) {
    authService.logout();
  }

  // Redirigir al login con la URL de retorno
  router.navigate(['/login'], { 
    queryParams: { returnUrl: state.url } 
  });
  
  return false;
};
