import { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import style from "../styles/Navbar.module.css";
import ChangeLanguage from "./ChangeLanguage";
import Sidebar from "./Sidebar";
import { useTranslation } from "../hooks/useTranslation";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisibility, setIsVisibility] = useState(false);
  const i18n = useTranslation();
  const { navbar } = i18n;
  const handlerClickOpen = () => {
    setIsVisibility(true);
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={style.navbar}>
      <p className={style.navbar__logo}>{}</p>
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
              <a>{navbar.HOME_URL}</a>
            </Link>
          </li>
          <li className={style.navbar__menu__item}>
            <Link href="/service">
              <a>{navbar.SERVICE_URL}</a>
            </Link>
          </li>
          <li className={style.navbar__menu__item}>
            <Link href="/about">
              <a>{navbar.ABOUT_URL}</a>
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
              <a>{navbar.CONTACT_URL}</a>
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
