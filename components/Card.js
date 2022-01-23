import Image from "next/image";
import styles from "../styles/Card.module.css";

export default function Card({ image, title }) {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <Image layout="responsive" src={image} alt={title} />
      </div>
      <div className={styles.card__title}>
        <p>{title}</p>
      </div>
    </div>
  );
}
