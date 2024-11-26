import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // Asegúrate de que el servicio esté registrado globalmente
})
export class ContactService {

  private apiUrl = 'http://localhost:3000/api/contact';  // Cambia esto por tu URL de la API

  constructor(private http: HttpClient) {}

  sendContactMessage(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);  // Envia el formulario usando POST
  }
}
