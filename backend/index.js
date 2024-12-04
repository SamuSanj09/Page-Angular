const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes'); // Importa las rutas de contacto
const chatbotRoutes = require('./routes/chatbotRoutes'); // Importa las rutas de chatbot
const app = express();

// Configuración de CORS
const corsOptions = {
  origin: ['http://localhost:4200', 'http://localhost:3000'],  // Añade los dominios permitidos
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware para parsear JSON
app.use(express.json());

// Aplica CORS con opciones específicas
app.use(cors(corsOptions));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Si ves este mensaje, el Backend está sirviendo correctamente.');
});

// Usar las rutas de contacto bajo el prefijo '/api'
app.use('/api', contactRoutes);


// Usa las rutas del chatbot
app.use('/api', chatbotRoutes);




// Manejo de errores general /// no es muy importante debajo de esto xd
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

// Configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
