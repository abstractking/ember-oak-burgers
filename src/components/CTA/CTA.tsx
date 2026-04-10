import { motion } from 'framer-motion';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section id="order" className={styles.ctaSection}>
      <div className={styles.ghostText}>EAT</div>
      <div className={styles.content}>
        <motion.h2 
          className={styles.headline}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ORDER<br />NOW.
        </motion.h2>
        <motion.p 
          className={styles.subtext}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Find us at 412 Ember Lane, open Tuesday–Sunday, 11am–10pm. No reservations. Just hunger.
        </motion.p>
        <motion.a 
          href="#contact"
          className={styles.btn}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          GET FOOD &rarr;
        </motion.a>
      </div>
    </section>
  );
}
