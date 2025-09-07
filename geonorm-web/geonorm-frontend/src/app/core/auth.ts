import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'geonorm_token';
  private readonly API_URL = 'https://api.geonorm.com/v1'; // URL de la API de GeoNorm
  
  // Signal para el estado de autenticación
  private _isAuthenticated = signal<boolean>(this.hasToken());
  private _currentUser = signal<any>(this.getCurrentUserFromToken());
  
  // Getter público para el estado de autenticación
  isAuthenticated = this._isAuthenticated.asReadonly();
  currentUser = this._currentUser.asReadonly();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  /**
   * Inicia sesión con email y contraseña
   */
  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth/login`, credentials)
      .pipe(
        tap(response => {
          this.setToken(response.token);
          this._isAuthenticated.set(true);
          this._currentUser.set(response.user);
        })
      );
  }

  /**
   * Registra un nuevo usuario
   */
  register(userData: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API_URL}/auth/register`, userData)
      .pipe(
        tap(response => {
          this.setToken(response.token);
          this._isAuthenticated.set(true);
          this._currentUser.set(response.user);
        })
      );
  }

  /**
   * Cierra la sesión del usuario
   */
  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this._isAuthenticated.set(false);
    this._currentUser.set(null);
    this.router.navigate(['/']);
  }

  /**
   * Obtiene el token JWT almacenado
   */
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Almacena el token JWT en localStorage
   */
  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  /**
   * Verifica si existe un token almacenado
   */
  private hasToken(): boolean {
    return !!this.getToken();
  }

  /**
   * Decodifica el token JWT y obtiene información del usuario
   */
  private getCurrentUserFromToken(): any {
    const token = this.getToken();
    if (!token) return null;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.user || null;
    } catch (error) {
      console.error('Error al decodificar token:', error);
      return null;
    }
  }

  /**
   * Verifica si el token ha expirado
   */
  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) return true;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiration = payload.exp * 1000; // Convertir a milisegundos
      return Date.now() > expiration;
    } catch (error) {
      console.error('Error al verificar expiración del token:', error);
      return true;
    }
  }

  /**
   * Redirige al dashboard después del login exitoso
   */
  redirectToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  /**
   * Redirige al login si no está autenticado
   */
  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
}
