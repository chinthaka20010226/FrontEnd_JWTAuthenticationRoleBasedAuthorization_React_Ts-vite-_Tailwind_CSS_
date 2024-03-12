import useAuth from "../../hooks/useAuth.hook";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";


const Layout = () => {
    // de-struucture isAuthenticated from useAuth hook
    const { isAuthenticated } = useAuth();
    const { pathname } = useLocation();

    console.log(pathname);

    const SideBarRenderer = () => {
        if (isAuthenticated && pathname.toLowerCase().startsWith('/dashboard')){
            return <Sidebar />
        }
        return null;
    };

    return (
        <div>
            <Header />

            {/* Using Outlet, we render all routes that are inside of thus Layout */}
            <div className="flex">
                {SideBarRenderer()}
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;