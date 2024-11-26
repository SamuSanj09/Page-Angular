const db = require('../config/db');  // Importa la configuración de la base de datos

// Función para crear un contacto
const createContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validar que todos los campos estén presentes
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios.' });
  }

  const query = 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)';

  try {
    await db.execute(query, [name, email, subject, message]);
    res.status(200).json({
      success: true,
      message: 'Gracias por contactarnos, enviado correctamente',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Hubo un error al guardar el contacto.' });
  }
};

// Exporta el controlador
module.exports = {
  createContact
};
