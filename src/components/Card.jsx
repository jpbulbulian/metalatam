import { useTranslation } from "react-i18next";

export default function Card({ reverse, section, index, img }) {
  const { t } = useTranslation();

  return (
    <div
      className={`"mx-4 my-8 md:h-40 flex ${
        reverse && "flex-row-reverse"
      } items-center justify-center  gap-4`}
    >
      <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center border-4 border-purple-500">
        {img ? (
          <img alt="icon" className="w-8 h-8 md:h-12" src={img} />
        ) : (
          <h3>{index}</h3>
        )}
      </div>
      <div className="w-full">
        <h3 className={`my-2 ${reverse ? "text-right" : "text-left"}`}>
          {t(`${section}.${index}.title`)}
        </h3>
        <p className={reverse && "text-right"}>
          {t(`${section}.${index}.description`)}
        </p>
      </div>
    </div>
  );
}
