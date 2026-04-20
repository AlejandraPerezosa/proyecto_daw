import dotenv from 'dotenv';
dotenv.config();
import {conn} from './config/database';

// Importar express
import express from 'express';
const app = express();
const port = 3001;

// Definir la ruta raíz (/)
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!'); // Escribe el texto en la ruta
});

//Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

conn.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos!');
});