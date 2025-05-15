import ButtonUI from "../Forms/Button";
import LinkUI from "../Forms/link";
import { TYPE_LINKS } from "../../utils/typesLink";
import { TYPES_BUTTON } from "../../utils/typesButton";
import { useTranslation } from "react-i18next";

type NavbarTypes = {
  custom?: string,
}
export default function Header({ custom }: NavbarTypes) {

  const { t } = useTranslation();

  return (
    <header className={`w-full p-primary text-white py-8 ${custom}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <LinkUI link="/" content={t("Navbar.project")} variant={TYPE_LINKS.TITTLE_LINK} custom="mr-6" />
          <nav className="flex items-center space-x-8">
            <LinkUI link="/" content={t("Navbar.home")} variant={TYPE_LINKS.NAV_LINK} />
            <LinkUI link="/catalog" content={t("Navbar.catalog")} variant={TYPE_LINKS.NAV_LINK} />
            <LinkUI link="/" content={t("Navbar.pricing")} variant={TYPE_LINKS.NAV_LINK} />
            <div className="relative">
              <LinkUI link="/" content={t("Navbar.developers")} variant={TYPE_LINKS.NAV_LINK} />
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <ButtonUI content={t("Navbar.logIn")} variant={TYPES_BUTTON.PRIMARY} />
          <ButtonUI content="Change Language" variant={TYPES_BUTTON.lANGUAGE} />
        </div>
      </div>
    </header>
  )
}
