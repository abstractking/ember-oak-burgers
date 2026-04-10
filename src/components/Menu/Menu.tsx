import { motion } from 'framer-motion';
import styles from './Menu.module.css';

const menuItems = [
  { id: 1, name: "THE EMBER CLASSIC", price: "$11", desc: "Two smash patties, american cheese, house ember sauce, shredded lettuce, pickles on a brioche bun.", tag: "THE OG" },
  { id: 2, name: "OAK SMOKEHOUSE", price: "$14", desc: "Double smash, smoked gouda, crispy onions, house BBQ, pickled jalapeño.", tag: "SMOKY" },
  { id: 3, name: "THE INFERNO", price: "$13", desc: "Triple smash, pepper jack, ghost pepper aioli, habanero pickles, charred serrano.", tag: "🔥 HOT" },
  { id: 4, name: "TRUFFLE SMASH", price: "$16", desc: "Double smash, aged gruyère, truffle aioli, arugula, caramelized onion.", tag: "PREMIUM" },
  { id: 5, name: "HAND-CUT FRIES", price: "$7", desc: "Double-fried, sea salt, served with ember dipping sauce.", tag: "" },
  { id: 6, name: "OAK SHAKE", price: "$9", desc: "Thick-cut, hand-spun, rotating flavors. Ask your server.", tag: "" }
];

export default function Menu() {
  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          WHAT WE<br />
          <span>SMASH.</span>
        </motion.h2>

        <div className={styles.grid}>
          {menuItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.2 }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <span className={styles.price}>{item.price}</span>
              </div>
              <p className={styles.desc}>{item.desc}</p>
              {item.tag && <span className={styles.tag}>{item.tag}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
