const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Ruta para crear un contacto
router.post('/contact', contactController.createContact);

module.exports = router;
