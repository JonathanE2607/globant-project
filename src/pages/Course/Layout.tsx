import Footer from "../../componentsMUI/Navigation/Footer"
import Header from "../../componentsMUI/Navigation/Navbar"
import { Outlet } from "react-router-dom"

type layoutTypes = {

}

const LayoutCourse = ({ }: layoutTypes) => {
    return (
        <>
            <Header custom="bg-black" />
            <div className="bg-black">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default LayoutCourse