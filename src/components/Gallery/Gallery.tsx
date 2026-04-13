import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

export default function Gallery() {
  const images = [
    { id: 1, src: "/gallery/smash.png", label: "THE SMASH", alt: "Crispy smash burger with melted cheese and caramelized edges" },
    { id: 2, src: "/gallery/smoked.png", label: "SMOKED", alt: "Thick slices of smoked brisket with charred bark crust" },
    { id: 3, src: "/gallery/fire.png", label: "FIRE", alt: "Open flames rising on a hot grill grate" },
    { id: 4, src: "/gallery/fries.png", label: "FRIES", alt: "Crispy golden hand-cut french fries" },
    { id: 5, src: "/gallery/shake.png", label: "SHAKE", alt: "Thick hand-spun milkshake overflowing with whipped cream" }
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
                <img src={img.src} alt={img.alt} loading="lazy" className={styles.img} />
                <span className={styles.label}>{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
