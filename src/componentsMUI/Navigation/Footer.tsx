import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import LinkUI from "../Forms/link"
import { TYPE_LINKS } from "../../utils/typesLink"

export default function Footer() {
    return (
        <footer className="bg-black py-8 text-white">
            <div className="container mx-auto flex flex-col items-center justify-center">
                {/* Policy Links */}
                <div className="mb-6 flex space-x-8">
                    <LinkUI content="Terms of Service" link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom="hover:underline" />
                    <LinkUI content="Privacy Policy" link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom="hover:underline" />
                    <LinkUI content="Manage Cookies" link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom="hover:underline" />
                </div>

                <div className="flex space-x-6">
                    <LinkUI content={<FaYoutube />} link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom="text-gay-800 w-24 h-24" />
                    <LinkUI content={<FaFacebookF />} link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom="text-gay-800 w-24 h-24" />
                    <LinkUI content={<FaTwitter />} link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom="text-gay-800 w-24 h-24" />
                    <LinkUI content={<FaInstagram />} link="/" variant={TYPE_LINKS.CUSTOM_LINK} custom="text-gay-800 w-24 h-24" />
                </div>
            </div>
        </footer>
    )
}
