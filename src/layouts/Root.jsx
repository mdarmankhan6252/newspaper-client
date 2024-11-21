import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
   return (
      <div>
         <div className="h-[70px]">
            <Nav />
         </div>
         <div className="max-w-7xl mx-auto px-3 min-h-[calc(100vh-337px)]">
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default Root;
//70.83 + 216.45+50