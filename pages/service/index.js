import useTranslation from "next-translate/useTranslation";
import Navbar from "../../components/Navbar";

export default function Service() {
  const { t } = useTranslation("service");
  const title = t("title");
  return (
    <>
      <Navbar />
      <h1>{title}</h1>
    </>
  );
}
