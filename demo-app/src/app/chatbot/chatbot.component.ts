import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

declare var window: any;  // Permite acceder a BotUI desde window

@Component({
  selector: 'app-chatbot',
  standalone: true,
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  imports: [
    CommonModule, // Asegúrate de importar CommonModule aquí
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChatbotComponent implements AfterViewInit {
  
  isChatVisible = true;  // Bandera para controlar la visibilidad del chat

  constructor() { }

  ngAfterViewInit(): void {
    // Esperar que el DOM esté completamente cargado antes de inicializar BotUI
    setTimeout(() => {
      if (window.BotUI) {
        const botui = new window.BotUI('chatbot-app'); // Asegúrate de que el contenedor exista

        // Función que permite continuar la conversación
        this.startConversation(botui);
      } else {
        console.error('BotUI no está disponible en window');
      }
    }, 2000);  // Espera 2 segundos para asegurarte de que BotUI esté disponible
  }

  // Método para mostrar u ocultar el chat
  toggleChat() {
    this.isChatVisible = !this.isChatVisible;
  }

  // Inicia la conversación y permite mensajes continuos
  startConversation(botui: any) {
    botui.message.add({
      content: 'Hola, ¿cómo puedo ayudarte hoy?'
    }).then(() => {
      return this.askQuestion(botui);
    });
  }

  // Pregunta al usuario y espera su respuesta
  askQuestion(botui: any) {
    return botui.action.text({
      action: {
        placeholder: 'Escribe tu mensaje...'
      }
    }).then((res: any) => {
      // Aquí es donde puedes agregar lógica de respuestas personalizadas
      if (res.value.toLowerCase().includes('hola')) {
        botui.message.add({
          content: '¡Hola! ¿Cómo puedo ayudarte más hoy?'
        });
      } else if (res.value.toLowerCase().includes('adiós')) {
        botui.message.add({
          content: '¡Adiós! ¡Espero verte pronto!'
        });
      } else {
        botui.message.add({
          content: `Tu mensaje fue: ${res.value}. ¿En qué más puedo ayudarte?`
        });
      }

      // Después de cada respuesta, vuelve a preguntar
      return this.askQuestion(botui);
    });
  }
}
