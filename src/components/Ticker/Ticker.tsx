import styles from './Ticker.module.css';

export default function Ticker() {
  const items = [
    "SMASH BURGERS", "FIRE-KISSED", "LOCAL BEEF", "NO FREEZERS", "HAND-PRESSED", "BORN FROM FIRE"
  ];
  const allItems = [...items, ...items, ...items];

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerTrack}>
        {allItems.map((item, index) => (
          <span key={index} className={styles.tickerItem}>
            {item} <span className={styles.separator}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
