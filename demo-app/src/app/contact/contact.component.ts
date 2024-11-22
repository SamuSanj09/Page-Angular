import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements AfterViewInit {
  private map!: L.Map;

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
        iconUrl: 'assets/images/map-icon.svg',  // Ruta al ícono de tu imagen
        iconSize: [25, 41],  // Tamaño del ícono
        iconAnchor: [13, 41],  // Punto donde se ancla el ícono
        popupAnchor: [0, -41],  // Posición del popup en relación al ícono
      }),
    })
      .addTo(this.map) 
      .bindPopup('Oficina Puerto Madero') 
      .openPopup(); 

      L.marker([-38.103722, -58.381592], {
        icon: L.icon({
          iconUrl: 'assets/images/map-icon.svg',  // Ruta al ícono de tu imagen
          iconSize: [25, 41],  // Tamaño del ícono
          iconAnchor: [13, 41],  // Punto donde se ancla el ícono
          popupAnchor: [0, -41],  // Posición del popup en relación al ícono
        }),
      })
        .addTo(this.map)  // Añadimos el marcador al mapa
        .bindPopup('Oficina Chasquipampa')  // Asignamos un popup al marcador
        .openPopup();  
  }

  onSubmit(): void {
    // Recogemos los datos del formulario
    const formData = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      subject: (document.getElementById('subject') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLTextAreaElement).value,
    };
    console.log('Form Data:', formData);
  }
}
