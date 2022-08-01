import Card from "components/Card";
import { Hearts } from "components/Sprites";
import { useTranslation } from "react-i18next";

export default function RoadEvent() {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-screen p-2 md:p-8 bg-altBackround">
      <Hearts />
      <h2 className="m-8 mt-10 pl-8 subtitle">{t("road.title")}</h2>
      <div>
        <div className="md:mx-20 md:flex items-center justify-center gap-4">
          <Card
            img="https://video-public.canva.com/VAFAiKpex8o/v/6594a0ddc4.gif"
            index={1}
            section="road"
          />
          <Card
            img="https://video-public.canva.com/VAFAiKWKnFI/v/9ebc086b6d.gif"
            index={3}
            section="road"
          />
        </div>
        <div className="hidden md:block mx-auto w-4/5 h-0 border-2 border-white" />
        <div className="md:mx-20 md:flex gap-4">
          <span className="w-24" />
          <Card
            img="https://video-public.canva.com/VAFAiBr_HOg/v/fbc0d1b6e2.gif"
            index={2}
            section="road"
          />
          <span className="w-24" />
          <Card
            img="https://video-public.canva.com/VAFAiJOBbnk/v/968cca7ada.gif"
            index={4}
            section="road"
          />
        </div>
      </div>
    </section>
  );
}
