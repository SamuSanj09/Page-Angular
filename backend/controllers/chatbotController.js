// Simulando un almacenamiento en memoria de los contextos de usuario.
let conversationContext = {};  // Mapa de contextos de conversación por usuario (basado en alguna clave única, como un ID de sesión o IP)

const options = {
  'hola': '¡Hola! ¿Cómo estás? \n\nElige una opción: \n1. Ver productos \n2. Ver precios \n3. Contactar soporte',
  'adios': '¡Adiós! Que tengas un buen día.',
  '1': 'Aquí están nuestros productos: \n1. Producto A \n2. Producto B \n3. Producto C \n0. Atras',
  '2': 'Estos son los precios de nuestros productos: \nProducto A: $10 \nProducto B: $20 \nProducto C: $30 \n0. Atras',
  '3': 'Para contactar soporte, envíanos un correo a soporte@ejemplo.com o llama al 123-456-7890 \n0. Atras'
};

exports.handleMessage = (req, res) => {
  const userMessage = req.body.message.toLowerCase().trim();
  const userId = req.body.userId || 'default';  // Suponiendo que pasas un userId o algo para identificar al usuario

  // Inicializa el contexto si no existe
  if (!conversationContext[userId]) {
    conversationContext[userId] = ['hola'];  // El usuario comienza en la opción "hola"
  }

  let reply;

  // Si el mensaje es "0", retrocede al paso anterior
  if (userMessage === '0') {
    if (conversationContext[userId].length > 1) {
      // Elimina la última opción para volver atrás
      conversationContext[userId].pop();
    }

    const previousMessage = conversationContext[userId].slice(-1)[0];  // Última opción válida
    reply = options[previousMessage];
  } else {
    // Si el mensaje es válido, muestra el mensaje correspondiente
    reply = options[userMessage] || 'Lo siento, no entendí tu mensaje. Por favor, elige una opción válida:\n1. Ver productos\n2. Ver precios\n3. Contactar soporte';

    // Si el mensaje no es "0", agrega la opción al contexto
    if (userMessage !== '0') {
      conversationContext[userId].push(userMessage);
    }
  }

  // Enviar la respuesta al frontend
  res.json({ reply });
};
