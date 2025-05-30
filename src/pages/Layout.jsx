import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Register from "../Components/Forms/Register/register";



function Layout() {

  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
        
        

    </div>
  );
}


export default Layout;

