import Image from "next/image";
import bgHeader from "../public/images/header.png";

export default function Header() {
  return (
    <span>
      <Image layout="responsive" src={bgHeader} alt="logo" />
    </span>
  );
}
