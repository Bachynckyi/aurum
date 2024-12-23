import Footer from "components/Footer/Footer";
import { Outlet } from "react-router-dom";
import scss from "./Layout.module.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowDropup } from "react-icons/io";
import { motion } from 'framer-motion';


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
        <motion.div
        transition={{ duration: 1.1}}
        initial={{opacity: 0.1}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <div className={scss.container_page}>
                <div className={scss.main_container}>
                    <div className={scss.background_wrapper1}></div>
                    <div className={scss.content_wrapper}>
                        <Outlet/>
                    </div>
                </div>
                <ScrollToTop 
                    smooth
                    className={scss.scroll_button}
                    component={<IoIosArrowDropup className={scss.arrowUp}/>}
                />
                <div className={scss.footer_container}>
                    <div className={scss.background_wrapper2}></div>
                    <Footer/>
                </div>
            </div>
        </motion.div>
    )

};

export default Layout;