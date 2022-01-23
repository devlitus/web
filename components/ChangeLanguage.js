import { useRouter } from "next/router";
import style from "../styles/SelectedButtom.module.css";

export default function ChangeLanguage() {
  const { locales, locale } = useRouter();
  console.log(locales);

  const handlerLanguages = (lang) => {
    console.log(lang);
  };
  return locales.map((lng) => {
    if (lng === locale) return null;
    console.log(lng);
    return (
      <div
        className={style.buttom}
        key={lng}
        onClick={() => handlerLanguages(lng)}
      >
        {lng}
      </div>
    );
  });
}
