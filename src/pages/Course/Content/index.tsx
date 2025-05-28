import ReactPlayer from "react-player"
import TittleUI from "../../../componentsMUI/Typography/Tittle"
import { TYPES_TITTLE } from "../../../utils/typesTittle"
import SideProgressBar from "../../../componentsMUI/Data display/SideProgress"
import ButtonUI from "../../../componentsMUI/Forms/Button"
import { TYPES_BUTTON } from "../../../utils/typesButton"
import {  useNavigate, useParams } from "react-router-dom"
import courses from "../../../../public/coursesData/courseOne/courses.json"

const Content = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const course = courses.find((c) => c.id === id);
    const courseIndex = courses.findIndex((c) => c.id === id);

    const handleNext = () => {
    const nextIndex = courseIndex + 1;
    if (nextIndex < courses.length) {
      navigate(`${course?.parts?.id}`);
    }
  };

    return (
        <div className="grid grid-cols-3 gap-2 bg-black">
            <div className="bg-black col-span-2">
                <TittleUI variant={TYPES_TITTLE.ABOUT} content={course?.title} custom="ml-16 text-3xl text-white font-bold" />
                <div className="ml-16 mt-12 w-full">
                    <ReactPlayer
                        url={course?.videoLink}
                        loop={false}
                        controls={true} />
                </div>
                <p className="font-roboto text-2xl ml-16 mt-8 text-slate-300 leading-[2] max-w-3xl">
                    {course?.content}
                </p>
                <div className="flex justify-between max-w-3xl ml-16 mb-16 mt-14">
                    <ButtonUI navLink="-1" content="Back" variant={TYPES_BUTTON.CUSTOM} custom="px-20 py-3 rounded-full border border-2 p-white font-medium text-white font-xl hover:bg-cyan-white/10 transition-colors" />
                    <ButtonUI onClick={handleNext} content="Next" variant={TYPES_BUTTON.CUSTOM} custom="px-20 py-3 rounded-full border border-2 p-primary-blue font-medium text-cyan-400 font-xl hover:bg-cyan-400/10 transition-colors" />
                </div>
            </div>
            <div>
                <SideProgressBar />
            </div>
        </div>
    )
}

export default Content