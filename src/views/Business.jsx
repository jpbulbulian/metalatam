import { Cup, Floor, Hearts, Sword } from "components/Sprites";
import { useTranslation } from "react-i18next";

function Card({ Icon, index, className }) {
  const { t } = useTranslation();

  return (
    <div className={`md:m-8 mt-12 ${className}`}>
      <div className="flex items-center justify-center gap-8">
        <Icon />
        <div>
          <h3 className="text-left text-xl md:text-2xl">
            {t(`business.${index}.title`)}
          </h3>
          <p>{t(`business.${index}.description`)}</p>
        </div>
      </div>
      <Floor />
    </div>
  );
}

export default function Business() {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-screen p-2 md:p-8 bg-altBackround">
      <Hearts />
      <h2 className="md:text-left">{t("business.title")}</h2>
      <div className="md:flex">
        <Card className="md:mt-80" Icon={Sword} index={1} />
        <Card className="md:mt-16" Icon={Cup} index={2} />
      </div>
    </section>
  );
}
