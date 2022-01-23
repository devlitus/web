import useTranslation from "next-translate/useTranslation";
import Header from "../components/Header";
import LayoutHome from "../components/LayoutHome";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { t } = useTranslation("home");
  const titleHeader = t("titleHeader");
  const primarySectionText = t("primarySectionText");
  const secondarySectionText = t("secondarySectionText");
  const terciarySectionText = t("terciarySectionText");
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
        <h1 className={styles.text}>{titleHeader}</h1>
      </section>
      <div className={styles.content}>
        <div className={styles.parf}>
          <p>{primarySectionText}</p>
          <p>{secondarySectionText}</p>
          <p>{terciarySectionText}</p>
        </div>
      </div>
    </LayoutHome>
  );
}
