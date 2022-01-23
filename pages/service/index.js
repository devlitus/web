import Navbar from "../../components/Navbar";
import { useTranslation } from "../../hooks/useTranslation";

export default function Service() {
  const i18n = useTranslation();
  const { service } = i18n;
  return (
    <>
      <Navbar />
      <h1>{service.pathUrl}</h1>
    </>
  );
}
