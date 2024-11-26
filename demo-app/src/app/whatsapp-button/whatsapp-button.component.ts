import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,  // Ahora el componente es standalone
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.css']
})
export class WhatsappButtonComponent {
  @Input() message: string = '¡Hola! Estoy interesado en el servicio.';
}
