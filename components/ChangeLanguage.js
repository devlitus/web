import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import Link from "next/link";
import i18nConfig from "../i18n.json";

const { locales } = i18nConfig;

export default function ChangeLanguage() {
  const { t, lang } = useTranslation();
  return locales.map((lng) => {
    if (lng === lang) return null;
    return (
      <button key={lng} onClick={async () => await setLanguage(lng)}>
        {lng}
      </button>
    );
  });
}
