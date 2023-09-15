// import Footer from "./components/client/Footer";
// import Header from "./components/client/Header";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div>
            {/* <Header /> */}
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;