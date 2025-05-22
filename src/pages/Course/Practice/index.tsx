import ReactPlayer from "react-player"
import TittleUI from "../../../componentsMUI/Typography/Tittle"
import { TYPES_TITTLE } from "../../../utils/typesTittle"
import SideProgressBar from "../../../componentsMUI/Data display/SideProgress"
import ButtonUI from "../../../componentsMUI/Forms/Button"
import { TYPES_BUTTON } from "../../../utils/typesButton"

const Practice = () => {


    return (
        <div className="grid grid-cols-3 gap-2 bg-black">
            <div className="bg-black col-span-2">
                <TittleUI variant={TYPES_TITTLE.ABOUT} content="Defining a component " custom="ml-16 text-3xl text-white font-bold" />
                <div className="ml-16 mt-12 w-full">
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=aL27fX5kv9U'
                        loop={false}
                        controls={true} />
                </div>
                <p className="font-roboto text-2xl ml-16 mt-8 text-slate-300 leading-[2] max-w-3xl">
                    Traditionally when creating web pages, web developers marked up their content and then added interaction by sprinkling on some JavaScript. This worked great when interaction was a nice-to-have on the web. Now it is expected for many sites and all apps. React puts interactivity first while still using the same technology: a React component is a JavaScript function that you can sprinkle with markup. Here’s what that looks like (you can edit the example below):                </p>
                <div className="flex justify-between max-w-3xl ml-16 mb-16 mt-14">
                    <ButtonUI content="Back" variant={TYPES_BUTTON.CUSTOM} custom="px-20 py-3 rounded-full border border-2 p-white font-medium text-white font-xl hover:bg-cyan-white/10 transition-colors" />
                    <ButtonUI content="Test" variant={TYPES_BUTTON.CUSTOM} custom="px-20 py-3 rounded-full border border-2 p-primary-blue font-medium text-cyan-400 font-xl hover:bg-cyan-400/10 transition-colors" />
                </div>
            </div>
            <div>
                <SideProgressBar />
            </div>
        </div>
    )
}

export default Practice;