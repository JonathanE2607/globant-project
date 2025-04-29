
import { TYPES_TITTLE } from "../../utils/typesTittle";

const TittleUI = ({ content, variant, custom }: { content: string, variant: TYPES_TITTLE, custom?: string }) => {

    let tittleElement: React.ReactElement = <></>;

    switch (variant) {
        case TYPES_TITTLE.PRINCIPAL:
            tittleElement = (
                <h2 className={`font-Roboto text-7xl text-white font-semibold ${custom}`}>
                    {content}
                </h2>
            )
            break;

        case TYPES_TITTLE.SECONDARY:
            tittleElement = (
                <h2 className="">
                    {content}
                </h2>
            )
            break;

        case TYPES_TITTLE.ABOUT:
            tittleElement = (
                <h2 className={custom}>
                    {content}
                </h2>
            )
            break;
    }

    return tittleElement;
}

export default TittleUI;