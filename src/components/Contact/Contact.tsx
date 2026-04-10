import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.leftCol}>
          <div className={styles.infoItem}>
            <span className={styles.label}>LOCATION</span>
            <p className={styles.value}>412 Ember Lane, Suite 1, Portland OR 97201</p>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>HOURS</span>
            <p className={styles.value}>Tue–Sun, 11am–10pm</p>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>PHONE</span>
            <p className={styles.value}>(503) 555-0182</p>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.label}>EMAIL</span>
            <p className={styles.value}>hello@emberandoak.com</p>
          </div>
        </div>

        <div className={styles.rightCol}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.inputLabel}>Name</label>
              <input type="text" id="name" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>Email</label>
              <input type="email" id="email" className={styles.input} required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.inputLabel}>Message</label>
              <textarea id="message" rows={4} className={styles.textarea} required></textarea>
            </div>
            <button type="submit" className={styles.submitBtn}>SEND IT</button>
          </form>
        </div>
      </div>
    </section>
  );
}
