import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';


declare var window: any; // Permite acceder a BotUI desde window

@Component({
  selector: 'app-chatbot',
  standalone: true,
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  imports: [
    CommonModule, // Importa CommonModule para funcionalidades básicas de Angular
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatbotComponent implements AfterViewInit {
  isChatVisible = true; // Bandera para controlar la visibilidad del chat
  botui: any; // Variable para almacenar la instancia de BotUI

  constructor(private http: HttpClient) {}  

  ngAfterViewInit(): void {
    // La inicialización de BotUI ocurre solo al mostrar el chat
    console.log('Chatbot Component initialized, waiting for user interaction.');
    this.initializeBotUI();
    
  }

  //Logica para mostrar/ocultar chat emergente
  toggleChat(): void {
    this.isChatVisible = !this.isChatVisible;
  
    const chatbotContainer = document.getElementById('chatbot-app');
    if (chatbotContainer) {
      if (this.isChatVisible) {
        chatbotContainer.classList.add('visible'); // Muestra el contenedor
      } else {
        chatbotContainer.classList.remove('visible'); // Oculta el contenedor
      }
    }
  }

  // Método para inicializar BotUI
  private initializeBotUI(): void {
  console.log('Initializing BotUI...');
  const chatbotContainer = document.getElementById('chatbot-app');
  if (!chatbotContainer) {
    console.error('BotUI: Container with id #chatbot-app not found.');
    return;
  }

  try {
    this.botui = new window.BotUI('chatbot-app');
    console.log('BotUI instance created:', this.botui);
    this.startConversation(this.botui);
  } catch (error) {
    console.error('Error initializing BotUI:', error);
  }
}

  // Inicia la conversación y permite mensajes continuos
  startConversation(botui: any): void {
    botui.message.add({
      content: 'Hola, ¿cómo puedo ayudarte hoy?'
    }).then(() => {
      return this.askQuestion(botui);
    }).catch((error: any) => {
      console.error('Error al iniciar la conversación:', error);
    });
  }

  // Pregunta al usuario y espera su respuesta
  askQuestion(botui: any): Promise<void> {
    return botui.action.text({
      action: {
        placeholder: 'Escribe tu mensaje...'
      }
    }).then((res: any) => {
      // Realiza una solicitud HTTP al backend
      return this.http.post('http://localhost:3000/api/chat', { message: res.value }).toPromise();
    }).then((response: any) => {
      // Procesa la respuesta del backend
      const reply = response.reply || 'No entendí lo que dijiste. ¿En qué más puedo ayudarte?';
      botui.message.add({
        content: reply
      });
      // Después de cada respuesta, vuelve a preguntar
      return this.askQuestion(botui);
    }).catch((error: any) => {
      console.error('Oh, el chat no se encuentra disponible ahora:', error);
      botui.message.add({
        content: 'Hubo un problema al procesar tu mensaje. Intenta mas tarde.'
      });
      return this.askQuestion(botui);
    });
  }
}
