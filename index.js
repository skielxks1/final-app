import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

import pool from './config/db.js';
import routes from './routes.js'; // Carga el archivo de rutas único

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Inicializar tabla en PostgreSQL
const initDb = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS tareas (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(100) NOT NULL,
        descripcion TEXT,
        creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Tabla en PostgreSQL iniciada correctamente.');
  } catch (err) {
    console.error('Error inicializando BD:', err);
  }
};
initDb();

// Usar el enrutador del backend
app.use('/', routes);

// Servir cliente compilado en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  
  // 📌 CORRECCIÓN: Cambiado '*' por '/*splat' para compatibilidad con Express 5
  app.get('/*splat', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
