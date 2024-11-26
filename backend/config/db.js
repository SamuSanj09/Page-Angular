const mysql = require('mysql2');  // Asegúrate de importar mysql2

// Crea una conexión a la base de datos
const pool = mysql.createPool({
  host: 'mysql-db', 
  user: 'user',
  password: 'password',
  database: 'mydatabase', 
  waitForConnections: true, 
  connectionLimit: 6,  
  queueLimit: 0       
}).promise();  // Usamos promesas para un flujo asíncrono más limpio

//comprobar conexion a db
pool.getConnection((err, connection) => {
  if (err) {
    console.log('error al conectar a la DB, mister', err);
  } else {
    console.log('conectado a la DB, mister');
    connection.release();
  }
});

module.exports = pool;
