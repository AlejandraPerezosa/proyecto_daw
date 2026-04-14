// 1. Importar express
import express from 'express';
const app = express();
const port = 3001;

// 2. Definir la ruta raíz (/)
app.get('/', (req, res) => {
  res.send('¡Hola Mundo!'); // Escribe el texto en la ruta
});

// 3. Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});