import { useTranslation } from "react-i18next";
import { Star } from "icons";
import Card from "components/Card";
import { Hearts } from "components/Sprites";

export default function Goals() {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-screen p-2 md:p-8">
      <Hearts />
      <div className="p-4 flex items-center justify-center gap-4">
        <Star className="h-12" />
        <h2 className="subtitle">{t("goals.title")}</h2>
        <Star className="h-12" />
      </div>
      <div className="md:mx-20 md:flex items-center justify-center gap-4">
        <div>
          {[1, 2, 3].map((index) => (
            <Card
              key={index}
              index={index}
              reverse={window.innerWidth > 768}
              section="goals"
            />
          ))}
        </div>
        <div>
          {[4, 5, 6].map((index) => (
            <Card key={index} index={index} section="goals" />
          ))}
        </div>
      </div>
    </section>
  );
}
