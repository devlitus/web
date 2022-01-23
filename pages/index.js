import { useTranslation } from "../hooks/useTranslation";
import Header from "../components/Header";
import LayoutHome from "../components/LayoutHome";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import styles from "../styles/Home.module.css";
import xerrada from "../public/images/resources/16.jpg";
import cours from "../public/images/resources/27.jpg";
import bissnes from "../public/images/resources/44.jpg";
import Card from "../components/Card";

export default function Home() {
  const i18n = useTranslation();
  const { home } = i18n;
  return (
    <LayoutHome>
      <nav className={styles.navbar}>
        <Navbar />
      </nav>
      <header className={styles.header}>
        <Header />
      </header>
      <section className={styles.section}>
        <Section />
        <h1 className={styles.text}>{home.TITLE_HEADER}</h1>
      </section>
      <div className={styles.content}>
        <div className={styles.parf}>
          <p>{}</p>
          <p>{}</p>
          <p>{}</p>
          <div className={styles.content__card}>
            <Card image={xerrada} title={""} />
            <Card image={cours} title={""} />
            <Card image={bissnes} title={""} />
          </div>
        </div>
      </div>
    </LayoutHome>
  );
}
