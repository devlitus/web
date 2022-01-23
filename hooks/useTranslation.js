import { useRouter } from "next/router";
import { ca, es } from "../translations";

export const useTranslation = () => {
  const { locale } = useRouter();
  const i18n = locale === "es" ? es : ca;
  return i18n;
};
