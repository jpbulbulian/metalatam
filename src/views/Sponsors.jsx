import { Chicken, Floor, Flower, Hearts, Plant } from "components/Sprites";
import { Metaverse, Web2, Web3 } from "icons";
import { useTranslation } from "react-i18next";

function Card({ Icon, index }) {
  const { t } = useTranslation();

  return (
    <div className="md:m-8 w-40">
      <Icon className="h-12 mx-auto" />
      <div className="mt-2 text-center">
        <h3>{t(`sponsors.categories.${index}.name`)}</h3>
        <div className="mt-2 relative">
          <Floor />
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {t(`sponsors.categories.${index}.price`)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Sponsors() {
  const { t } = useTranslation();

  return (
    <section className="w-full min-h-screen">
      <Hearts />
      <h2 className="m-8 md:text-left">{t("sponsors.title")}</h2>
      <div className="m-8 my-16 flex flex-col md:flex-row items-center justify-center gap-8">
        <Card Icon={Web2} index={1} />
        <ul className="list-disc md:w-1/3">
          <li>{t(`sponsors.items.a`)}</li>
          <li>{t(`sponsors.items.b`)}</li>
          <li>{t(`sponsors.items.c`)}</li>
          <li>{t(`sponsors.items.d`)}</li>
          <li>{t(`sponsors.items.e`)}</li>
        </ul>
      </div>
      <div className="m-8 my-16 flex flex-col md:flex-row items-center justify-center gap-8">
        <Card Icon={Web3} index={2} />
        <ul className="list-disc md:w-1/3">
          <li>{t(`sponsors.items.allWeb2`)}</li>
          <li>{t(`sponsors.items.f`)}</li>
          <li>{t(`sponsors.items.g`)}</li>
          <li>{t(`sponsors.items.h`)}</li>
          <ul>
            <li>{t(`sponsors.items.boothIncludes`)}</li>
            <li>{t(`sponsors.items.boothA`)}</li>
            <li>{t(`sponsors.items.boothB`)}</li>
            <li>{t(`sponsors.items.boothC`)}</li>
            <li>{t(`sponsors.items.boothD`)}</li>
          </ul>
        </ul>
      </div>
      <div className="m-8 my-16 flex flex-col md:flex-row items-center justify-center gap-8">
        <Card Icon={Metaverse} index={3} />
        <ul className="list-disc md:w-1/3">
          <li>{t(`sponsors.items.allWeb3`)}</li>
          <li>{t(`sponsors.items.j`)}</li>
          <li>{t(`sponsors.items.k`)}</li>
          <ul>
            <li>{t(`sponsors.items.notIncludes`)}</li>
            <li>{t(`sponsors.items.l`)}</li>
            <li>{t(`sponsors.items.m`)}</li>
            <li>{t(`sponsors.items.n`)}</li>
          </ul>
        </ul>
      </div>

      <div className="flex justify-around">
        <Flower />
        <Plant />
        <Chicken />
        <Flower />
      </div>
      <Floor />
    </section>
  );
}
