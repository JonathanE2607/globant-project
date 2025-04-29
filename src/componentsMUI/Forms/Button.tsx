import React from "react";
import { TYPES_BUTTON } from "../../utils/typesButton";
const ButtonUI = ({ content, variant, custom }: { content: string, variant: TYPES_BUTTON, custom?: string }) => {

   let buttonElemnt: React.ReactElement = <></>

   switch (variant) {
      case TYPES_BUTTON.PRIMARY:
         buttonElemnt = (
            <button className={`font-Roboto px-4 py-2 rounded-full border border-white text-sm font-medium hover:bg-white/10 transition-colors ${custom}`}>{content}</button>
         )
         break;
      case TYPES_BUTTON.SECUNDARY:
         buttonElemnt = (
            <button className={`font-Roboto px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors ${custom}`}>{content}</button>
         );
         break
      case TYPES_BUTTON.CUSTOM:
         buttonElemnt = (
            <button className={`font-Roboto ${custom}`}>{content}</button>
         );
         break
      case TYPES_BUTTON.ABOUT:
         buttonElemnt = (
            <button className={`font-Roboto bg-gray-700 px-4 py-3 px-4 rounded-lg ${custom}`}>{content}</button>
         );
         break;
   }
   return buttonElemnt;
}

export default ButtonUI;