import Navbar from "../Components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";




function Layout() {

  return (
    <>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  );
}


export default Layout;

