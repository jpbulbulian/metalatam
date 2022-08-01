import { Hearts } from "components/Sprites";
import { Star } from "icons";
import { useTranslation } from "react-i18next";

function VerticalCard({ index, img }) {
  const { t } = useTranslation();

  return (
    <div className="m-8 mt-12 flex flex-col items-center justify-center gap-8">
      <h3>{t(`audience.${index}.title`)}</h3>
      <p>{t(`audience.${index}.description`)}</p>
      <img alt="icon" src={img} />
    </div>
  );
}

export default function Audience() {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-screen">
      <Hearts />
      <div className="p-4 flex items-center justify-center gap-4">
        <Star className="h-12" />
        <h2 className="my-8 subtitle">{t("audience.title")}</h2>
        <Star className="h-12" />
      </div>
      <div className="md:mx-20 md:flex items-center justify-center gap-4">
        <VerticalCard
          img="https://media-public.canva.com/1m4zU/MAEF6Q1m4zU/1/t.png"
          index={1}
        />
        <VerticalCard
          img="https://media-public.canva.com/Y8IfM/MAEF6cY8IfM/1/t.png"
          index={2}
        />
        <VerticalCard
          img="https://media-public.canva.com/n-9UI/MAEF6Xn-9UI/1/t.png"
          index={3}
        />
      </div>
    </section>
  );
}
