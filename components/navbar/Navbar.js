import Link from "next/link";
import ChangeLanguage from "../changeLanguage/ChangeLanguage";

export default function Navbar() {
  return (
    <div className="navbar">
      <p>
        <Link href="/home">
          <a>Home</a>
        </Link>
      </p>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <ChangeLanguage />
    </div>
  );
}
