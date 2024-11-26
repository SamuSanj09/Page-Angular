import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { ContactService } from '../services/contact-service';   
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements AfterViewInit {
  private map!: L.Map;

  FormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  constructor(private contactService: ContactService) {}  // Corregido el nombre de 'contactServie' a 'contactService'

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Inicializamos el mapa centrado en la ubicación deseada
    this.map = L.map('map').setView([-34.603722, -58.381592], 14); // Buenos Aires

    // Añadimos la capa de OpenStreetMap al mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // Creamos un marcador con un ícono personalizado
    L.marker([-37.603722, -58.381592], {
      icon: L.icon({
        iconUrl: 'assets/images/map-icon.svg',
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        popupAnchor: [0, -41],
      }),
    })
      .addTo(this.map)
      .bindPopup('Oficina Puerto Madero')
      .openPopup();

    L.marker([-38.103722, -58.381592], {
      icon: L.icon({
        iconUrl: 'assets/images/map-icon.svg',  // Ruta al ícono de tu imagen
        iconSize: [25, 41],
        iconAnchor: [13, 41],  // Punto donde se ancla el ícono
        popupAnchor: [0, -41],
      }),
    })
      .addTo(this.map)  // Añadimos el marcador al mapa
      .bindPopup('Oficina Chasquipampa')
      .openPopup();
  }

  onSubmit(): void {
    // Recogemos los datos del formulario
    this.contactService.sendContactMessage(this.FormData).subscribe(  // Cambiado a 'contactService'
      (response: any) => {  // Puedes cambiar 'any' por un tipo específico de la respuesta si lo prefieres
        console.log('Message was sent successfully', response);
      },
      (error: any) => {  // Cambia 'any' por un tipo específico si lo tienes
        console.error('There was an error sending the message', error);
      }
    );
  }
}
