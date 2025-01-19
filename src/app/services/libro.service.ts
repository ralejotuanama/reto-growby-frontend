import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  private apiUrl = 'http://localhost:8080/api/libros';

  constructor(private http: HttpClient) {}

  getLibros(page: number = 0, size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&size=${size}`);
  }

  getLibroById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createLibro(libro: any): Observable<any> {
    return this.http.post(this.apiUrl, libro);
  }

  updateLibro(libro: any): Observable<any> {
    return this.http.post(this.apiUrl, libro);
  }

  deleteLibro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getLibrosSinPaginacion(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/todos`); // URL del nuevo endpoint
  }
}
