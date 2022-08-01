import { AZOMLAND_WEBSITE, EMAIL, TELEGRAM, WHATSAPP } from "config/constants";
import { Heart } from "icons";
import { useTranslation } from "react-i18next";
import { SiTelegram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="p-8 w-full min-h-screen flex flex-col items-center justify-center gap-2 bg-altBackround">
      <Heart className="m-16 h-40" />
      <h2 className="mt-8 p-4">{t("footer.title")}</h2>
      <h3 className="mt-16">{t("footer.contact")}</h3>
      <div className="inline-flex gap-4">
        <a href={TELEGRAM} rel="noreferrer" target="_blank">
          <SiTelegram fontSize={32} />
        </a>
        <a href={WHATSAPP} rel="noreferrer" target="_blank">
          <SiWhatsapp fontSize={32} />
        </a>
      </div>
      <h3 className="mt-4">{t("footer.info")}</h3>
      <a href={`mailto:${EMAIL}`}>
        <p>{EMAIL}</p>
      </a>
      <h3 className="mt-4">{t("footer.organized")}</h3>
      <a href={AZOMLAND_WEBSITE} rel="noreferrer" target="_blank">
        <p>www.azomland.com</p>
      </a>
    </footer>
  );
}
