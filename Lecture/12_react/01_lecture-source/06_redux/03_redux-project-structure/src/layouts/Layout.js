import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Navbar from "../components/common/Navbar";

function Layout() {

    return (
        <div>
            <Header/>
            <Navbar/>
            <Outlet/>
        </div>
    );
}

export default Layout;