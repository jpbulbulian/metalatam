import { useTranslation } from "react-i18next";
import { languagesSupported } from "config/i18n";

export default function LanguageSelector({ className }) {
  const { i18n } = useTranslation();
  const notSelected = (code) => !i18n.language.startsWith(code);

  return languagesSupported.filter(notSelected).map((code) => (
    <button
      key={code}
      className={`m-2 hover:text-primary-500 ${className}`}
      onClick={() => i18n.changeLanguage(code)}
    >
      {code.toUpperCase()}
    </button>
  ));
}
