import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './About.module.css';

function useCountUp(end: number, duration: number = 1.2) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (inView) {
      if (end === 0) {
        setCount(0);
        return;
      }
      let start = 0;
      const stepTime = Math.abs(Math.floor((duration * 1000) / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, stepTime || 100);
      return () => clearInterval(timer);
    }
  }, [end, duration, inView]);

  return { count, ref };
}

const Stat = ({ end, label }: { end: number; label: string }) => {
  const { count, ref } = useCountUp(end, 1.2);
  return (
    <div ref={ref} className={styles.stat}>
      <span className={styles.statNumber}>{count}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.leftPanel}>
        <div className={styles.stats}>
          <Stat end={6} label="YEARS SERVING FIRE" />
          <Stat end={12} label="MENU ITEMS" />
          <Stat end={0} label="FROZEN PATTIES. EVER." />
        </div>
      </div>
      <div className={styles.rightPanel}>
        <motion.div 
          className={styles.quoteBlock}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className={styles.quote}>"If it doesn't drip, we're not doing our job."</p>
          <p className={styles.attribution}>— MARCUS WADE, HEAD PIT MASTER</p>
        </motion.div>
        <div className={styles.badge}>
          100% LOCAL. 0% APOLOGIES.
        </div>
      </div>
    </section>
  );
}
