import useTranslation from "next-translate/useTranslation";
import Navbar from "../components/navbar/Navbar";
import style from "../styles/Home.module.css";

export default function Index({ name }) {
  const { t } = useTranslation("init");
  const title = t("title");
  return (
    <>
      <Navbar />
      <div className={style.wrapper}>
        <h1>{title}</h1>
        <p>{name}</p>
      </div>
    </>
  );
}

export async function getStaticProps() {
  console.log("object");
  return {
    props: {
      name: "John Doe",
    },
  };
}
