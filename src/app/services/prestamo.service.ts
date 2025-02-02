import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrestamoService {
  private apiUrl = 'http://localhost:8080/api/prestamos';

  constructor(private http: HttpClient) {}

  getPrestamos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createPrestamo(prestamo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, prestamo);
  }
}
