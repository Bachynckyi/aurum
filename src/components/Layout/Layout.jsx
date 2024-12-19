import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";
import scss from "./Layout.module.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, [pathname]);
    
    return (
        <div className={scss.container_page}>
            <div className={scss.main_container}>
                <div className={scss.background_wrapper1}></div>
                <div className={scss.content_wrapper}>
                    <Outlet/>
                </div>
            </div>
            <div className={scss.footer_container}>
                <div className={scss.background_wrapper2}></div>
                <Footer/>
            </div>
        </div>
    )

};

export default Layout;