import { Link } from 'react-router-dom';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Full-Stack DevOps Plataform</h1>
      <p className={styles.description}>Integrated project with React, Express, PostgreSQL and server Monitoring.</p>
      <div className={styles.btnGroup}>
        <Link to="/dashboard" className={styles.primaryBtn}>Go to Dashboard</Link>
        <a href="/health" target="_blank" rel="noreferrer" className={styles.secondaryBtn}> Go to Health Check</a>
      </div>
    </div>
  );
}
