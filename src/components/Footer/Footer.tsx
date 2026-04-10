import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          EMBER <span>&amp;</span> OAK
        </div>
        <div className={styles.copyright}>
          &copy; 2026 EMBER &amp; OAK. ALL RIGHTS RESERVED.
        </div>
        <div className={styles.credit}>
          Built by <a href="#">A&amp;M Studios</a>
        </div>
      </div>
    </footer>
  );
}
