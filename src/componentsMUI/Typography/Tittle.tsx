
import React from "react";
import { TYPES_TITTLE } from "../../utils/typesTittle";

const TittleUI = ({ content, variant, custom, children }: { content?: string, variant: TYPES_TITTLE, custom?: string, children?: React.ReactElement | React.ReactElement[] }) => {

    let tittleElement: React.ReactElement = <></>;
    const childrenElement = content? content : children;

    switch (variant) {
        case TYPES_TITTLE.PRINCIPAL:
            tittleElement = (
                <h2 className={`font-Roboto text-7xl text-white font-semibold ${custom}`}>
                    {childrenElement}
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