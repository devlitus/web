import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import ChangeLanguage from "./ChangeLanguage";
import style from "../styles/Navbar.module.css";

export default function Navbar() {
  const { t } = useTranslation("navbar");
  const title = t("titleHeader");

  return (
    <div className={style.navbar}>
      <div className={style.navbar__logo}>
        <p>{title}</p>
      </div>
      <div className={style.navbar__menu}>
        <ul className={style.navbar__menu__items}>
          <li className={style.navbar__menu__item}>
            <Link href="/">
              <a>{t("home")}</a>
            </Link>
          </li>
          <li className={style.navbar__menu__item}>
            <Link href="/service">
              <a>{t("service")}</a>
            </Link>
          </li>
          <li className={style.navbar__menu__item}>
            <Link href="/about">
              <a>{t("about")}</a>
            </Link>
          </li>
          <li className={style.navbar__menu__item}>
            <Link href="/">
              <a>Campus</a>
            </Link>
          </li>
          <li className={style.navbar__menu__item}>
            <Link href="/">
              <a>Blog</a>
            </Link>
          </li>
          <li className={style.navbar__menu__item}>
            <Link href="/contact">
              <a>{t("contact")}</a>
            </Link>
          </li>
        </ul>
        <ChangeLanguage />
      </div>
    </div>
  );
}
