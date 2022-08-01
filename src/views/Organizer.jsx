import { Cloud, Fire, Floor, Hero, Shield } from "components/Sprites";
import { AzomlandIcon } from "icons";
import { useTranslation } from "react-i18next";

export default function Organizer() {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-screen">
      <div className="flex items-center justify-between">
        <Cloud className="hidden md:block mt-32 m-8 p-4" />
        <div className="flex flex-col items-center p-8">
          <h2 className="my-16 p-2 md:px-32">{t("organizer.title")}</h2>
          <AzomlandIcon />
          <p className="text-center">{t("organizer.description")}</p>
        </div>
        <Cloud className="hidden md:block m-8 p-4" />
      </div>
      <div className="mt-12 flex items-end justify-around">
        <Hero className="h-40" />
        <Fire />
        <Shield />
      </div>
      <Floor />
    </section>
  );
}
