
import React from "react";
import { TYPE_LINKS } from "../../utils/typesLink";

const LinkUI = ({ content, link, variant, custom }: { content: string | React.ReactElement, link: string, variant: TYPE_LINKS, custom?: string }) => {

   let linkElement: React.ReactElement = <></>

   switch (variant) {
      case TYPE_LINKS.NAV_LINK:
         linkElement = (
            <a href={link} className={`font-Roboto border-b-2 border-transparent pb-1 hover:border-white/70 transition-colors font-medium ${custom}`}>{content}</a>
         );
         break;
      case TYPE_LINKS.TITTLE_LINK:
         linkElement = (
            <a href={link} className={`font-Roboto text-2xl font-bold mr-10 ${custom}`}>{content}</a>
         );
         break
      case TYPE_LINKS.CUSTOM_LINK:
         linkElement = (
            <a href={link} className={`font-Roboto font-bold ${custom}`}>{content}</a>
         );
         break
   }

   return linkElement
}

export default LinkUI;