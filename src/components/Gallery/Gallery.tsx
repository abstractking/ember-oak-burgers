import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

export default function Gallery() {
  const images = [
    { id: 1, src: "https://source.unsplash.com/600x800/?burger", label: "THE SMASH" },
    { id: 2, src: "https://source.unsplash.com/400x300/?smoked-meat", label: "SMOKED" },
    { id: 3, src: "https://source.unsplash.com/400x300/?fire-grill", label: "FIRE" },
    { id: 4, src: "https://source.unsplash.com/400x300/?french-fries", label: "FRIES" },
    { id: 5, src: "https://source.unsplash.com/400x300/?milkshake", label: "SHAKE" }
  ];

  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          THE FOOD. <span className={styles.outlined}>THE PROOF.</span>
        </h2>
        
        <div className={styles.grid}>
          {images.map((img, idx) => (
            <motion.div 
              key={img.id}
              className={`${styles.cell} ${styles[`cell${idx + 1}`]}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
            >
              <div className={styles.imageWrapper}>
                <img src={img.src} alt={img.label} loading="lazy" className={styles.img} />
                <span className={styles.label}>{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
