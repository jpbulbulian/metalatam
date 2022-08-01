import { Hero } from "components/Sprites";
import { Baloon } from "icons";
import { useTranslation } from "react-i18next";

export default function Hello() {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-screen bg-altBackround" id="hello">
      <div className="md:flex items-center justify-center gap-4">
        <div className="p-4 md:p-8">
          <div className="mt-16 relative text-center">
            <Baloon className="h-40 md:h-52" />
            <h3 className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 m-2">
              {t("hello.quote")}
            </h3>
          </div>
          <Hero className="m-16 h-40" />
        </div>
        <div className="p-4 md:p-8">
          <h2 className="my-16">{t("hello.title")}</h2>
          <p className="p-4">{t("hello.p1")}</p>
          <p className="p-4">{t("hello.p2")}</p>
        </div>
      </div>
    </section>
  );
}
