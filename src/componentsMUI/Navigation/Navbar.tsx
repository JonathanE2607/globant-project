import ButtonUI from "../Forms/Button";
import LinkUI from "../Forms/link";
import { TYPE_LINKS } from "../../utils/typesLink";
import { TYPES_BUTTON } from "../../utils/typesButton";

export default function Header({custom}:{custom?:string}) {
  return (
    <header className={`w-full p-primary text-white py-8 ${custom}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <LinkUI link="/" content="Project" variant={TYPE_LINKS.TITTLE_LINK} custom="mr-6" />
          <nav className="flex items-center space-x-8">
            <LinkUI link="/" content="Home" variant={TYPE_LINKS.NAV_LINK} />
            <LinkUI link="/" content="Solutions" variant={TYPE_LINKS.NAV_LINK} />
            <LinkUI link="/" content="Pricing" variant={TYPE_LINKS.NAV_LINK} />
            <div className="relative">
              <LinkUI link="/" content="Developers" variant={TYPE_LINKS.NAV_LINK} />
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <ButtonUI content="Log In" variant={TYPES_BUTTON.PRIMARY} />
          <ButtonUI content=" Publish App" variant={TYPES_BUTTON.SECUNDARY}/>
        </div>
      </div>
    </header>
  )
}
