import Link from "next/link";
import ChangeLanguage from "./ChangeLanguage";
import style from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className="navbar__logo">
        <p>Pedagogia en moviment</p>
      </div>
      <div className={style.navbar__menu}>
        <ul className={style.navbar__menu__items}>
          <li className={style.navbar__menu__item}>
            <Link href="/">
              <a>Inici</a>
            </Link>
          </li>
          <li className={style.navbar__menu__item}>
            <Link href="/service">
              <a>Servei</a>
            </Link>
          </li>
          <li className={style.navbar__menu__item}>
            <Link href="/about">
              <a>Sobre Mi</a>
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
              <a>Contacte</a>
            </Link>
          </li>
        </ul>
        <ChangeLanguage />
      </div>
    </div>
  );
}
