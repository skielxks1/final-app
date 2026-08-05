import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>📝 Create Record</h3>
          <p>Add new records to PostgreSQL.</p>
          <Link to="/nuevo" className={styles.link}>Open Form &rarr;</Link>
        </div>
        <div className={styles.card}>
          <h3>📊 View Records</h3>
          <p>Consult saved records.</p>
          <Link to="/registros" className={styles.link}>View List &rarr;</Link>
        </div>
        <div className={styles.card}>
          <h3>🩺 Health Check</h3>
          <p>Verify backend availability.</p>
          <a href="http://localhost:8080/health" target="_blank" rel="noreferrer" className={styles.link}>Check &rarr;</a>
        </div>
      </div>
    </div>
  );
}