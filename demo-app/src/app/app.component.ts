import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Agregar esto
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, 
              RouterLink, RouterLinkActive, FooterComponent, 
              FormsModule, WhatsappButtonComponent,
              ChatbotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'demo-app';
}
