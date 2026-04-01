import Link from 'next/link';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.logo}>🚖 Next.Taxi</div>
      <Link className={styles.navLink} href="/">Головна</Link>
      <Link className={styles.navLink} href="/articles">Статті</Link>
      <Link className={styles.navLink} href="/articles/favorite">Обране</Link>
      <Link className={styles.navLink} href="/profile/settings">Профіль</Link>
    </nav>
  );
}