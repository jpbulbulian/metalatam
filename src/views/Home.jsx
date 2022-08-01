import { Floor, Cloud, Start, TreeA, TreeB } from "components/Sprites";
import { Heart } from "icons";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-screen">
      <div className="flex items-center justify-between">
        <Cloud className="hidden md:block mt-32 m-8 p-4" />
        <div className="flex flex-col items-center p-8">
          <div className="m-12 inline-flex gap-4">
            <Heart className="h-8 md:h-12" />
            <Heart className="h-8 md:h-12" />
            <Heart className="h-8 md:h-12" />
            <Heart className="h-8 md:h-12" />
          </div>
          <h1 className="mt-4">{t("title")}</h1>
          <h3 className="mt-8">{t("home.subtitle")}</h3>
          <Start />
        </div>
        <Cloud className="hidden md:block m-8 p-4" />
      </div>
      <div className="mt-16 md:mt-8 flex justify-evenly">
        <TreeA className="h-20" />
        <TreeB className="h-20" />
      </div>
      <Floor />
    </section>
  );
}
