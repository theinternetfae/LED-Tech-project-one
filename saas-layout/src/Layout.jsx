import Navigation from "./Navigation.jsx";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

function Layout() {
    return ( 
        <div className="layout">
            <Navigation/>

            <section className="body-cont">

                <Header/>
            
                <div className="outlet-body">
                    <Outlet/>
                </div>

            </section>
        </div>
    );
}

export default Layout;