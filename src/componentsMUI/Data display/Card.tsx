import { TYPE_LINKS } from "../../utils/typesLink";
import LinkUI from "../Forms/link";
import TextUI from "../Typography/Text";
import IconUI from "../UI/Icon";

const Card = ({ content, borderCustom, custom, styleIcon, colorIcon, background, textCustom }:
    { content:string, textCustom: string, background: string, borderCustom: string, custom: string, styleIcon: string, colorIcon: string }) => {

    return (
        <div className={`w-64 h-full border-2 ${borderCustom} shadow-lg shadow-${custom} ${background} rounded-xl flex flex-col items-center justify-between px-4 py-6 text-center`}>
            <div className={`${custom} p-1 rounded-xl`}>
                <IconUI customIcon={styleIcon} colorIcon={colorIcon} />
            </div>
            <h3 className="text-white font-semibold text-lg mt-4">{content}</h3>
            <TextUI
                content="Lorem ipsum dolor sit amet consectetur adipiscing elit, magna netus vel dignissim parturient auctor."
                styles="text-white text-sm mt-2"
            />
            <LinkUI
                content="Learn More →"
                link="/"
                variant={TYPE_LINKS.CUSTOM_LINK}
                custom={`${textCustom} font-semibold mt-2`}
            />
        </div>
    )
}

export default Card;