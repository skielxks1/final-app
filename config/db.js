import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

// Configuración adaptada para entornos de desarrollo y producción (SSL obligatorio en Render)
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Script para inicializar la tabla automáticamente si no existe
export const initDB = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS tareas (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(100) NOT NULL,
      descripcion TEXT,
      completada BOOLEAN DEFAULT FALSE,
      creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await pool.query(query);
    console.log('✅ Base de datos e historia de tablas verificadas correctamente.');
  } catch (error) {
    console.error('❌ Error al inicializar la base de datos:', error);
  }
};
export default pool;