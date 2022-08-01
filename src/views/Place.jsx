import { Cloud, Coin, Floor, Hero } from "components/Sprites";
import { useTranslation } from "react-i18next";

export default function Place() {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-screen bg-altBackround">
      <div className="flex items-center justify-between">
        <Cloud className="hidden md:block mt-32 m-8 p-4" />
        <div className="flex flex-col items-center p-8">
          <h2 className="my-16">{t("place.title")}</h2>
          <p className="text-center">{t("place.info")}</p>
        </div>
        <Cloud className="hidden md:block m-8 p-4" />
      </div>
      <div className="mt-12 flex justify-around">
        <Hero className="h-40" />
        <div className="inline-flex gap-4">
          <Coin />
          <Coin />
          <Coin />
        </div>
      </div>
      <Floor />
    </section>
  );
}
