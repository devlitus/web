import { useState } from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/Navbar.module.css";
import ChangeLanguage from "./ChangeLanguage";
import Sidebar from "./Sidebar";
// import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisibility, setIsVisibility] = useState(false);
  const { t } = useTranslation("navbar");
  const title = t("titleHeader");
  const handlerClickOpen = () => {
    setIsVisibility(true);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={style.navbar}>
      <p className={style.navbar__logo}>{title}</p>
      <FontAwesomeIcon
        icon={faBars}
        size="2x"
        className={style.navbar__buttom_mobile}
        onClick={handlerClickOpen}
      />
      {isVisibility && (
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          handlerClickOpen={handlerClickOpen}
        />
      )}
      <div className={style.navbar__menu}>
        <div className={style.navbar__buttom_mobile}>
          <FontAwesomeIcon icon={faBars} size="2x" onClick={handlerClickOpen} />
        </div>
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
        <div>
          <ChangeLanguage />
        </div>
      </div>
    </div>
  );
}
