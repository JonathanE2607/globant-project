import Card from "../../componentsMUI/Data display/Card";
import SecondaryCard from "../../componentsMUI/Data display/SecundaryCard";
import Footer from "../../componentsMUI/Navigation/Footer";
import TittleUI from "../../componentsMUI/Typography/Tittle";
import Navbar from "./../../componentsMUI/Navigation/Navbar"
import TextUI from "../../componentsMUI/Typography/Text";
import ButtonUI from "../../componentsMUI/Forms/Button";
import ImageUI from "../../componentsMUI/UI/Image";
import { TYPES_CARD } from "../../utils/typesCard";
import { TYPES_SECUNDARY_CARD } from "../../utils/typesSecundaryCard";
import { TYPES_TITTLE } from "../../utils/typesTittle";
import { TYPES_BUTTON } from "../../utils/typesButton";
import { Trans, useTranslation } from "react-i18next";
const LandingPage = () => {

  const { t } = useTranslation()
  return (
    <>
      <section className="p-primary w-full h-screen flex flex-wrap">
        <Navbar />
        <div className="w-3/5">
          <TittleUI
            variant={TYPES_TITTLE.PRINCIPAL}
            children={
              <Trans
                i18nKey={"main.tittle"}
                components={{ 1: <b className="text-cyan-400"></b> }}
              />
            }
            custom="px-16 mt-16 text-8xl font-bold"
          />
          <TextUI content={t("main.description")} styles="ml-16 mt-8 text-xl p-secundary-color max-w-[70%]" />
          <ButtonUI content={t("main.start")} navLink="dashboard/catalog" variant={TYPES_BUTTON.CUSTOM} custom="ml-14 mt-14 px-20 py-3 rounded-full border border-[2.5px] p-primary-blue font-medium text-cyan-400 font-xl hover:bg-cyan-400/10 transition-colors" />
        </div>
        <div className="w-2/5">
          <ImageUI source="https://icon.icepanel.io/Technology/svg/React.svg" alternative="React brand" sizes="none" styles="h-[75%] w-full" />
        </div>
      </section>
      <div className="bg-gradient-to-b from-[#222222] to-black flex justify-center py-8">
        <TittleUI content={t("titles.titleOne")} variant={TYPES_TITTLE.ABOUT} custom="text-white font-bold text-5xl " />
      </div>
      <section className="bg-black flex justify-around py-12" >
        <Card
          content="Components"
          variant={TYPES_CARD.BLUE}
          linkCard={t("links.linkCard")}
        />
        <Card
          content="Hooks"
          variant={TYPES_CARD.PURPPLE}
          linkCard={t("links.linkCard")}
        />
        <Card
          content="Props"
          variant={TYPES_CARD.ORANGE}
          linkCard={t("links.linkCard")}
        />
      </section>
      <div className="bg-black flex justify-center py-8">
        <TittleUI content={t("titles.titleTwo")} variant={TYPES_TITTLE.ABOUT} custom="text-white font-bold text-5xl " />
      </div>
      <section className="bg-black flex justify-center py-8">
        <SecondaryCard
          source="https://elpythonista.com/wp-content/uploads/2020/10/Clean_Code-portada-1024x576.jpg"
          variant={TYPES_SECUNDARY_CARD.LEFT}
          title="Clean code"
          description="Risus sit suscipit et nibh. Morbi pretium volutpat eget habitasse habitant elementum dignissim arcu mauris. Ullamcorper euismod id commodo mi nec. Sit egestas mauris imperdiet feugiat eros, sapien at pellentesque."
          linkSecundaryCard={t("links.linkSecundaryCard")}
        />
      </section>
      <section className="bg-black flex justify-center py-8">
        <SecondaryCard
          source="https://i.pinimg.com/736x/30/f0/89/30f08901a1d1409041039957a44aaffd.jpg"
          variant={TYPES_SECUNDARY_CARD.RIGHT}
          title="Solid principles"
          description="Risus sit suscipit et nibh. Morbi pretium volutpat eget habitasse habitant elementum dignissim arcu mauris. Ullamcorper euismod id commodo mi nec. Sit egestas mauris imperdiet feugiat eros, sapien at pellentesque."
          linkSecundaryCard={t("links.linkSecundaryCard")}
        />
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;