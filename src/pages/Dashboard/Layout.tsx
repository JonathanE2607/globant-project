import React from "react"
import Header from "../../componentsMUI/Navigation/Navbar"
import Footer from "../../componentsMUI/Navigation/Footer"

type layoutTypes = {
    children: React.ReactElement | React.ReactElement[]
}

const Layout = ({ children }: layoutTypes) => {
    return (
        <>
            <Header custom="bg-black" />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout