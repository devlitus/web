import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../i18n.json";
import style from "../styles/SelectedButtom.module.css";
const { locales } = i18nConfig;

export default function ChangeLanguage() {
  const { lang } = useTranslation();
  return locales.map((lng) => {
    if (lng === lang) return null;
    return (
      <div
        className={style.buttom}
        key={lng}
        onClick={async () => await setLanguage(lng)}
      >
        {lng}
      </div>
    );
  });
}
