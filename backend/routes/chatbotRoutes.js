
// routes/chatbotRoutes.js

const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotController');

// Ruta para manejar los mensajes
router.post('/chat', chatbotController.handleMessage);

module.exports = router;
