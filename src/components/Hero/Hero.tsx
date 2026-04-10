import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.25 }
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <motion.div 
          className={styles.leftPanel}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className={styles.eyebrow} variants={itemVariants}>
            EST. 2018 · HAND-PRESSED · FIRE-KISSED
          </motion.p>
          <motion.h1 className={styles.h1} variants={itemVariants}>
            <motion.span className={styles.line1} variants={itemVariants}>BURGERS</motion.span>
            <motion.span className={styles.line2} variants={itemVariants}>WORTH.</motion.span>
            <motion.span className={styles.line3} variants={itemVariants}>THE MESS.</motion.span>
          </motion.h1>
          <motion.p className={styles.subtext} variants={itemVariants}>
            We don't apologize for the drip. We perfected it. Grass-fed beef, pressed hot, built for the obsessive.
          </motion.p>
          <motion.a href="#order" className={styles.cta} variants={itemVariants}>
            GET YOURS
          </motion.a>
          <motion.div className={styles.stamp} variants={itemVariants}>
            IF IT DOESN'T DRIP, WE'RE NOT DOING OUR JOB.
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.rightPanel}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <pre className={styles.ascii}>
{`  ___
 /     \\
| 🍔    |
 \\___/`}
          </pre>
        </motion.div>
      </div>
      <div className={styles.divider}></div>
    </section>
  );
}
