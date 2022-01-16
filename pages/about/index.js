import useTranslation from "next-translate/useTranslation";
import Navbar from "../../components/navbar/Navbar";
import style from "../../styles/Home.module.css";

export default function About() {
  const { t } = useTranslation("about");

  const title = t("title");

  return (
    <>
      <Navbar />
      <div className={style.wrapper}>
        <h1>{title}</h1>
      </div>
    </>
  );
}
