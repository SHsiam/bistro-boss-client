import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    
    const noHeaderFooter = location.pathname.includes('login') ||location.pathname.includes('signup') ;
    
    return (
        <>
        { noHeaderFooter ||<NavBar></NavBar>}
            <Outlet></Outlet>
         { noHeaderFooter ||<Footer></Footer>}   
        </>
    );
};

export default Main;