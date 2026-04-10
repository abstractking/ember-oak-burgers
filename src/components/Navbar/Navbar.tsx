import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { opacity: 0, y: -20, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    open: { opacity: 1, y: 0, transition: { staggerChildren: 0.06, delayChildren: 0.1 } }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav} role="navigation" aria-label="Main navigation">
        <a href="#" className={styles.logo}>
          EMBER <span>&amp;</span> OAK
        </a>

        <div className={styles.desktopNav}>
          <a href="#menu" className={styles.link}>Fine Grind</a>
          <a href="#about" className={styles.link}>Smash Burgers</a>
          <a href="#gallery" className={styles.link}>Stack Up</a>
          <a href="#order" className={styles.orderBtn}>ORDER NOW</a>
        </div>

        <button 
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.mobileNav}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.a href="#menu" className={styles.mobileLink} onClick={toggleMenu} variants={itemVariants}>
              Fine Grind
            </motion.a>
            <motion.a href="#about" className={styles.mobileLink} onClick={toggleMenu} variants={itemVariants}>
              Smash Burgers
            </motion.a>
            <motion.a href="#gallery" className={styles.mobileLink} onClick={toggleMenu} variants={itemVariants}>
              Stack Up
            </motion.a>
            <motion.a href="#order" className={styles.mobileOrderBtn} onClick={toggleMenu} variants={itemVariants}>
              ORDER NOW
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
