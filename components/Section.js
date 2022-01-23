import Image from "next/image";
import bgSection from "../public/images/resources/prueba.png";
// import styles from "../styles/Section.module.css";

export default function Section() {
  return (
    <>
      <span>
        <Image src={bgSection} alt="logo" />
      </span>
    </>
  );
}
