import dotenv from 'dotenv';
dotenv.config();
import {conn} from './config/database';

// importar express
import express from 'express';
const app = express();
const port = 3001;

// definir la ruta raíz (/)
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!'); 
});

//iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

//comprobar que la conexión funciona
conn.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos!');
});