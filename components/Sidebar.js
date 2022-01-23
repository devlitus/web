import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import ChangeLanguage from "./ChangeLanguage";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar({ isSidebarOpen, handlerClickOpen }) {
  const { t, lang } = useTranslation("navbar");

  return (
    <div
      className={`sidebar animate__animated ${
        isSidebarOpen ? "animate__fadeInRight" : "animate__fadeOutRight"
      }`}
    >
      <div className={styles.sidebar__close}>
        <ChangeLanguage />
        <FontAwesomeIcon
          icon={faTimes}
          size="3x"
          color="wite"
          onClick={handlerClickOpen}
        />
      </div>
      <ul className={styles.sidebar__menu__list}>
        <li className={styles.sidebar__menu__item}>
          <Link href="/" lang={lang}>
            <a>{t("home")}</a>
          </Link>
        </li>
        <li className={styles.sidebar__menu__item}>
          <Link href="/service">
            <a>{t("service")}</a>
          </Link>
        </li>
        <li className={styles.sidebar__menu__item}>
          <Link href="/about">
            <a>{t("about")}</a>
          </Link>
        </li>
        <li className={styles.sidebar__menu__item}>
          <Link href="/">
            <a>Campus</a>
          </Link>
        </li>
        <li className={styles.sidebar__menu__item}>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </li>
        <li className={styles.sidebar__menu__item}>
          <Link href="/contact">
            <a>{t("contact")}</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 200px;
          background-color: rgba(0, 95, 148, 0.8);
          overflow-x: hidden;
          padding-top: 20px;
          z-index: 2;
        }
        .animate__animated.animate__fadeInRight {
          --animate-duration: 1s;
        }
        .animate__animated.animate__fadeOutRight {
          --animate-duration: 1s;
        }
      `}</style>
    </div>
  );
}
