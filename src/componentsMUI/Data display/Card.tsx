import { TYPES_CARD } from "../../utils/typesCard";
import { TYPE_LINKS } from "../../utils/typesLink";
import LinkUI from "../Forms/link";
import TextUI from "../Typography/Text";
import IconUI from "../UI/Icon";

type CardProps = {
    content: string,
    textCustom?: string,
    variant: TYPES_CARD,
    background?: string,
    borderCustom?: string,
    custom?: string,
    styleIcon?: string,
    colorIcon?: string,
    linkCard:string
}
const Card = ({ content,
    variant,
    borderCustom,
    custom,
    styleIcon,
    colorIcon,
    background,
    textCustom,
    linkCard }: CardProps) => {

    let cardElement: React.ReactElement = <></>;
    switch (variant) {
        case TYPES_CARD.BLUE:
            cardElement = (
                <div className={`min-w-[20%] max-w-[25%] h-96 border-2 border-custom-blue shadow-lg shadow-custom-blue bg-custom-blue/25 rounded-xl flex flex-col items-center justify-between px-4 py-6 text-center`}>
                    <div className="bg-custom-blue p-1 rounded-xl">
                        <IconUI customIcon="custom-blue-icon" colorIcon="custom-blue/95" />
                    </div>
                    <h3 className="text-white font-bold text-2xl mt-2">{content}</h3>
                    <TextUI
                        content="Lorem ipsum dolor sit amet consectetur adipiscing elit, magna netus vel dignissim parturient auctor."
                        styles="text-white text-sm mt-2"
                    />
                    <LinkUI
                        content={linkCard}
                        link="/"
                        variant={TYPE_LINKS.CUSTOM_LINK}
                        custom={`text-custom-blue text-lg font-bold mb-2`}
                    />
                </div>
            )
            break;

        case TYPES_CARD.PURPPLE:
            cardElement = (
                <div className="min-w-[20%] max-w-[25%] min-h-[45%] max-h-[50%] border-2 border-custom-purpple shadow-lg shadow-custom-purpple bg-custom-purpple/25 rounded-xl flex flex-col items-center justify-between px-4 py-6 text-center">
                    <div className="bg-custom-purpple p-1 rounded-xl">
                        <IconUI customIcon="custom-purpple-icon" colorIcon="custom-purpple/15" />
                    </div>
                    <h3 className="text-white font-bold text-2xl mt-2">{content}</h3>
                    <TextUI
                        content="Lorem ipsum dolor sit amet consectetur adipiscing elit, magna netus vel dignissim parturient auctor."
                        styles="text-white text-sm mt-2"
                    />
                    <LinkUI
                        content="Learn More →"
                        link="/"
                        variant={TYPE_LINKS.CUSTOM_LINK}
                        custom="text-custom-purpple text-lg font-bold mb-2"
                    />
                </div>
            )
            break;

        case TYPES_CARD.ORANGE:
            cardElement = (
                <div className="min-w-[20%] max-w-[25%] min-h-[45%] max-h-[50%] border-2 border-custom-orange shadow-lg shadow-custom-orange bg-custom-orange/25 rounded-xl flex flex-col items-center justify-between px-4 py-6 text-center">
                    <div className="bg-custom-orange p-1 rounded-xl">
                        <IconUI customIcon="custom-orange" colorIcon="custom-orange/15" />
                    </div>
                    <h3 className="text-white font-bold text-2xl mt-2">{content}</h3>
                    <TextUI
                        content="Lorem ipsum dolor sit amet consectetur adipiscing elit, magna netus vel dignissim parturient auctor."
                        styles="text-white text-sm mt-2"
                    />
                    <LinkUI
                        content="Learn More →"
                        link="/"
                        variant={TYPE_LINKS.CUSTOM_LINK}
                        custom="text-custom-orange text-lg font-bold mb-2"
                    />
                </div>
            )
            break;

        case TYPES_CARD.CUSTOM:
            cardElement = (
                <div className={`w-64 h-full border-2 ${borderCustom} shadow-lg shadow-${custom} ${background} rounded-xl flex flex-col items-center justify-between px-4 py-6 text-center`}>
                    <div className={`${custom} p-1 rounded-xl`}>
                        <IconUI customIcon={styleIcon} colorIcon={colorIcon} />
                    </div>
                    <h3 className="text-white font-semibold text-lg mt-4">{content}</h3>
                    <TextUI content="Lorem ipsum dolor sit amet consectetur adipiscing elit, magna netus vel dignissim parturient auctor." styles="text-white text-sm mt-2" />
                    <LinkUI content="Learn More →" link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom={`${textCustom} font-semibold mt-2`} />
                </div>
            )
            break;
    }
    return cardElement
}

export default Card;