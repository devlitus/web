import useTranslation from "next-translate/useTranslation";
import Navbar from "../components/Navbar";
import style from "../styles/Home.module.css";

export default function Index({ name }) {
  const { t } = useTranslation("home");
  const title = t("title");
  return (
    <>
      <Navbar />
      <p>{title}</p>
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
