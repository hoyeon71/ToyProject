import Footer from "../commons/components/Footer";
import Header from "../commons/components/Header";
import {Outlet} from 'react-router-dom';

function Layout() {
    return(
        <>
            <Header/> 
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout;