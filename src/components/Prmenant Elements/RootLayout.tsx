import {Outlet} from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import LegalNotices from "./LegalNotices.tsx";

function RootLayout() {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <LegalNotices />
        </>
    )
}

export default RootLayout;