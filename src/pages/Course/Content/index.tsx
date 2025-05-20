import ReactPlayer from "react-player"
import Card from "../../../componentsMUI/Data display/Card"
import TittleUI from "../../../componentsMUI/Typography/Tittle"
import { TYPES_CARD } from "../../../utils/typesCard"
import { TYPES_TITTLE } from "../../../utils/typesTittle"

const Content = () => {


    return(
        <div className="bg-black">
            <TittleUI variant={TYPES_TITTLE.ABOUT} content="Create your first component in React " custom="ml-16 text-3xl text-white font-bold" />
           <div className="ml-16 mt-12">
           <ReactPlayer 
            url='https://www.youtube.com/watch?v=aL27fX5kv9U'
            loop={false}
            controls = {true} />
           </div>
           <p className="font-roboto text-2xl ml-16 mt-8 text-slate-300 leading-[1.5] max-w-2xl">
           Traditionally when creating web pages, web developers marked up their content and then added interaction by sprinkling on some JavaScript. This worked great when interaction was a nice-to-have on the web. Now it is expected for many sites and all apps. React puts interactivity first while still using the same technology: a React component is a JavaScript function that you can sprinkle with markup. Here’s what that looks like (you can edit the example below):
           </p>
        </div>
    )
}

export default Content