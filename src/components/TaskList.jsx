import { useEffect, useState } from 'react';
import styles from './TaskList.module.css';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Records in PostgreSQL</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Activity title</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td><strong>{t.titulo}</strong></td>
              <td>{t.descripcion}</td>
              <td>{new Date(t.creado_en).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}