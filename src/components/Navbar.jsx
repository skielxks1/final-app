import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>Final-app</div>
      <ul className={styles.navLinks}>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink></li>
        <li><NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : '')}>Dashboard</NavLink></li>
        <li><NavLink to="/nuevo" className={({ isActive }) => (isActive ? styles.active : '')}>Add new record</NavLink></li>
        <li><NavLink to="/registros" className={({ isActive }) => (isActive ? styles.active : '')}>View records</NavLink></li>
        <li><a href="/health" target="_blank" rel="noreferrer" className={styles.healthLink}>🩺 Health Check</a></li>
      </ul>
    </nav>
  );
}
