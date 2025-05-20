import Footer from "../../componentsMUI/Navigation/Footer"
import Header from "../../componentsMUI/Navigation/Navbar"
import { Outlet } from "react-router-dom"

type layoutTypes = {

}

const LayoutCourse = ({ }: layoutTypes) => {
    return (
        <>
            <Header custom="bg-black" />
            <Outlet />
            <Footer />
        </>
    )
}

export default LayoutCourse