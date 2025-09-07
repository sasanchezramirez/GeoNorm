import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth';

/**
 * Interceptor que adjunta automáticamente el token JWT a las peticiones salientes
 * También adjunta la API Key para las peticiones a la API de GeoNorm
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  
  // Obtener el token JWT del servicio de autenticación
  const token = authService.getToken();
  
  // Clonar la petición para agregar headers
  let authReq = req;
  
  // Si existe un token JWT, agregarlo al header Authorization
  if (token && !authService.isTokenExpired()) {
    authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
  }
  
  // Si la petición es hacia la API de GeoNorm, agregar la API Key
  if (req.url.includes('api.geonorm.com')) {
    // Obtener la API Key del usuario desde el AuthService o un servicio dedicado
    // Por ahora usamos un placeholder - en producción esto vendría del dashboard del usuario
    const apiKey = localStorage.getItem('geonorm_api_key');
    
    if (apiKey) {
      authReq = authReq.clone({
        headers: authReq.headers.set('X-API-Key', apiKey)
      });
    }
  }
  
  return next(authReq);
};
