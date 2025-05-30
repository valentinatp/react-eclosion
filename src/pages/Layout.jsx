import Navbar from "../Components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Register from "../Components/Forms/Register/register";



function Layout() {

  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  );
}


export default Layout;

