import { motion } from 'framer-motion';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "I've had burgers across three continents. Ember & Oak ruined all of them for me.",
      author: "PRIYA K., LOCAL Food Blogger"
    },
    {
      id: 2,
      quote: "Best smash patty in the city. That ember sauce is something illegal.",
      author: "DEREK T., Yelp Elite"
    },
    {
      id: 3,
      quote: "Went once. Moved my lunch calendar to Tuesdays permanently.",
      author: "SARAH M., Regular"
    }
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {testimonials.map((t, idx) => (
            <motion.div 
              key={t.id}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.1, duration: 0.3 }}
            >
              <div className={styles.quoteMark}>"</div>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.author}>{t.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
