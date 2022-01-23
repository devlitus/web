import useTranslation from "next-translate/useTranslation";
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
  const { t } = useTranslation("home");
  const titleHeader = t("titleHeader");
  const primarySectionText = t("primarySectionText");
  const secondarySectionText = t("secondarySectionText");
  const terciarySectionText = t("terciarySectionText");
  const cardTitle1 = t("cardTitle1");
  const cardTitle2 = t("cardTitle2");
  const cardTitle3 = t("cardTitle3");
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
          <div className={styles.content__card}>
            <Card image={xerrada} title={cardTitle1} />
            <Card image={cours} title={cardTitle2} />
            <Card image={bissnes} title={cardTitle3} />
          </div>
        </div>
      </div>
    </LayoutHome>
  );
}
