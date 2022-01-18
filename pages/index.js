import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Navbar from "../components/Navbar";
import bgPresentation from "../public/images/header.png";
import xarrada from "../public/images/resources/16.jpg";
import cours from "../public/images/resources/27.jpg";
import bussines from "../public/images/resources/44.jpg";
import arrow from "../public/images/resources/arrow.png";
import style from "../styles/Home.module.css";

export default function Index() {
  const { t } = useTranslation("home");
  const titleHeader = t("titleHeader");
  return (
    <>
      <Navbar />
      <main>
        <Image src={bgPresentation} alt="Roger Llopart" />
        <header className={style.header}>
          <h1 className={style.header__title}>{titleHeader}</h1>
          <div className={style.header__image}>
            <Image layout="responsive" src={arrow} alt="arrow" />
          </div>
        </header>
        <section className={style.section}>
          <div className={style.section__text}>
            <p>
              El joc és una activitat molt seriosa per als més petits de la
              casa: de forma lliure, espontània
            </p>
            <p>
              o dinamitzat pels adults, al menjador de casa o al mig del medi
              natural, etc. Amb el joc ens
            </p>
            <p>
              divertim i apranem junts, però quins són els secrets que s'amagan
              darrera de cada joc i...
            </p>
          </div>
          <div className={style.section__item}>
            <Image
              width={250}
              height={150}
              src={xarrada}
              alt="taller i xerrades"
            />
            <h3>TALLERS I XERRADES</h3>
          </div>
          <div className={style.section__item}>
            <Image width={250} height={150} src={cours} alt="cursos" />
            <h3>CURSOS</h3>
          </div>
          <div className={style.section__item}>
            <Image width={250} height={149} src={bussines} alt="formacio" />
            <h3>FORMACIÓ BONIFICADA PER EMPRESAS</h3>
          </div>
        </section>
      </main>
    </>
  );
}
