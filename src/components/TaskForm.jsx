import { useState } from 'react';
import styles from './TaskForm.module.css';

export default function TaskForm() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 📌 Cambiado a ruta relativa '/tasks' para que apunte al servidor de Render en producción
      const res = await fetch('/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, descripcion })
      });
      if (res.ok) {
        setTitulo('');
        setDescripcion('');
        alert('Your data has been saved!');
      }
    } catch (err) {
      alert('Connection error. Please check the backend server.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add new Task</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Task title:</label>
          <input 
            type="text" 
            className={styles.input} 
            value={titulo} 
            onChange={(e) => setTitulo(e.target.value)} 
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Description:</label>
          <textarea 
            className={styles.input} 
            value={descripcion} 
            onChange={(e) => setDescripcion(e.target.value)} 
          />
        </div>
        <button type="submit" className={styles.button}>Save to DB</button>
      </form>
    </div>
  );
}
