import React from "react"
import Header from "../../componentsMUI/Navigation/Navbar"
import Footer from "../../componentsMUI/Navigation/Footer"
import SearchComponent from "../../componentsMUI/Forms/Input"
import { Outlet } from "react-router-dom"

type layoutTypes = {

}

const Layout = ({ }: layoutTypes) => {
    return (
        <>
            <Header custom="bg-black" />
            <SearchComponent />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout