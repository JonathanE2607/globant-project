import Card from "../../componentsMUI/Data display/Card";
import SecondaryCard from "../../componentsMUI/Data display/SecundaryCard";
import Footer from "../../componentsMUI/Navigation/Footer";
import TittleUI from "../../componentsMUI/Typography/Tittle";
import FirstView from "../../componentsMUI/UI/FirstView";
import { TYPES_SECUNDARY_CARD } from "../../utils/typesSecundaryCard";
import { TYPES_TITTLE } from "../../utils/typesTittle";

const LandingPage = () => {
  return (
    <>
      <FirstView />
      <div className="bg-gradient-to-b from-[#222222] to-black flex justify-center py-8">
        <TittleUI content="Learn about" variant={TYPES_TITTLE.ABOUT} custom="text-white font-bold text-5xl " />
      </div>
      <section className="bg-black flex justify-around py-12" >
        <Card
          content="Components"
          textCustom="text-custom-blue"
          background="bg-custom-blue/25"
          borderCustom="border-custom-blue"
          custom="bg-custom-blue"
          colorIcon="custom-blue/95"
          styleIcon="custom-blue-icon"
        />
        <Card
          content="Hooks"
          textCustom="text-custom-purpple"
          background="bg-custom-purpple/25"
          borderCustom="border-custom-purpple"
          custom="bg-custom-purpple"
          colorIcon="custom-purpple/15"
          styleIcon="custom-purpple-icon"
        />
        <Card
          content="Props"
          textCustom="text-custom-orange"
          background="bg-custom-orange/25"
          borderCustom="border-custom-orange"
          custom="bg-custom-orange"
          colorIcon="custom-orange/15"
          styleIcon="custom-orange"
        />
      </section>
      <div className="bg-black flex justify-center py-8">
        <TittleUI content="Know abot other topics" variant={TYPES_TITTLE.ABOUT} custom="text-white font-bold text-5xl " />
      </div>
      <section className="bg-black flex justify-center py-8">
        <SecondaryCard
          source="https://elpythonista.com/wp-content/uploads/2020/10/Clean_Code-portada-1024x576.jpg"
          variant={TYPES_SECUNDARY_CARD.LEFT}
          title="Clean code"
          description="Risus sit suscipit et nibh. Morbi pretium volutpat eget habitasse habitant elementum dignissim arcu mauris. Ullamcorper euismod id commodo mi nec. Sit egestas mauris imperdiet feugiat eros, sapien at pellentesque."
          buttonText="more info" />
      </section>
      <section className="bg-black flex justify-center py-8">
        <SecondaryCard
          source="https://i.pinimg.com/736x/30/f0/89/30f08901a1d1409041039957a44aaffd.jpg"
          variant={TYPES_SECUNDARY_CARD.RIGHT}
          title="Solid principles"
          description="Risus sit suscipit et nibh. Morbi pretium volutpat eget habitasse habitant elementum dignissim arcu mauris. Ullamcorper euismod id commodo mi nec. Sit egestas mauris imperdiet feugiat eros, sapien at pellentesque."
          buttonText="more info" />
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;