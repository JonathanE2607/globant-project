
import { TYPES_BUTTON } from "../../utils/typesButton";
import { TYPES_TITTLE } from "../../utils/typesTittle";
import ButtonUI from "../Forms/Button";
import Navbar from "../Navigation/Navbar";
import TextUI from "../Typography/Text";
import TittleUI from "../Typography/Tittle";
import ImageUI from "./Image";
const FirstView = () => {
    return (
        <section className="p-primary w-full h-screen flex flex-wrap">
            <Navbar />
            <div className="w-3/5">
                <TittleUI variant={TYPES_TITTLE.PRINCIPAL} content="Learn react to the next level." custom="px-16 mt-16 text-8xl font-bold" />
                <TextUI content="Lorem ipsum dolor sit amet consectetur adipiscing elit, magna netus vel dignissim parturient auctor." styles="ml-16 mt-8 text-xl p-secundary-color max-w-[70%]" />
                <ButtonUI content="Start" variant={TYPES_BUTTON.CUSTOM} custom="ml-14 mt-14 px-20 py-3 rounded-full border border-[2.5px] p-primary-blue font-medium text-cyan-400 font-xl hover:bg-cyan-400/10 transition-colors ml-8 mt-8" />
            </div>
            <div className="w-2/5">
                <ImageUI source="https://icon.icepanel.io/Technology/svg/React.svg" alternative="React brand" sizes="none" styles="h-[75%] w-full" />
            </div>
        </section>
    );
}
export default FirstView 