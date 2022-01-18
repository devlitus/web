import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Navbar from "../components/Navbar";
import bgPresentation from "../public/images/header.png";
import arrow from "../public/images/resources/arrow.png";
import xarrada from "../public/images/resources/16.jpg";
import f from "../public/images/resources/27.jpg";
import fa from "../public/images/resources/44.jpg";
import style from "../styles/Home.module.css";

export default function Index() {
  // const { t } = useTranslation("home");
  // const title = t("title");
  return (
    <>
      <Navbar />
      <main>
        <Image src={bgPresentation} alt="Roger Llopart" />
        <header className={style.header}>
          <h1 className={style.header__title}>Serveis</h1>
          <div className={style.header__image}>
            <Image layout="responsive" src={arrow} alt="arrow" />
          </div>
        </header>
        <section className={style.section}>
          <div className={style.section__text}>
            <p>
              Dolore tempor nostrud ipsum quis consequat aute in aliqua
              cupidatat deserunt.
            </p>
            <p>
              Dolore tempor nostrud ipsum quis consequat aute in aliqua
              cupidatat deserunt.
            </p>
            <p>
              Dolore tempor nostrud ipsum quis consequat aute in aliqua
              cupidatat deserunt.
            </p>
          </div>
          <div className={style.section__item}>
            <Image layout="responsive" src={xarrada} alt="xarrada" />
          </div>
          <div className={style.section__item}>
            <Image layout="responsive" src={f} alt="f" />
          </div>
          <div className={style.section__item}>
            <Image layout="responsive" src={fa} alt="fa" />
          </div>
        </section>
      </main>
    </>
  );
}
