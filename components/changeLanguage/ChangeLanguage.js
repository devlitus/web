import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import i18nConfig from "../../i18n.json";

const { locales } = i18nConfig;

export default function ChangeLanguage() {
  const { t, lang } = useTranslation();
  return locales.map((lng) => {
    if (lng === lang) return null;

    return (
      <Link href="/" locale={lng} key={lng}>
        {lng}
      </Link>
    );
  });
}
