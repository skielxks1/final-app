import express from 'express';
import pool from './config/db.js';

const router = express.Router();

// 1. Monitoreo / Health Check
router.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.status(200).json({ status: 'UP', database: 'CONNECTED', timestamp: new Date() });
  } catch (error) {
    res.status(500).json({ status: 'DOWN', database: 'DISCONNECTED', error: error.message });
  }
});

// 2. Obtener registros (GET)
router.get('/tasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tareas ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar la BD' });
  }
});

// 3. Crear registro (POST)
router.post('/tasks', async (req, res) => {
  const { titulo, descripcion } = req.body;
  if (!titulo) return res.status(400).json({ error: 'El título es obligatorio' });

  try {
    const result = await pool.query(
      'INSERT INTO tareas (titulo, descripcion) VALUES ($1, $2) RETURNING *',
      [titulo, descripcion || '']
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar en la BD' });
  }
});

export default router;