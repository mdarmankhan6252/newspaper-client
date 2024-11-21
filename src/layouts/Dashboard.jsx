import { Link, NavLink, Outlet } from "react-router-dom";
import logo from '../assets/logo.png'
import { MdOutlineHome } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LuMenuSquare } from "react-icons/lu";
import { FaUsers } from "react-icons/fa6";
import { RiHome4Line } from "react-icons/ri";


const Dashboard = () => {
   return (
      <div className="flex ">
         <div className="w-[300px] border p-6 space-y-6 h-screen fixed top-0 left-0 bottom-0">
            <Link to='/dashboard/adminHome' className="flex items-center justify-center">
               <img src={logo} alt="" className="w-20" />
            </Link>

            <ul className="dashboard space-y-4">
               <NavLink to='/dashboard/adminHome' className="flex items-center space-x-2 border py-1.5 px-2">
                  <MdOutlineHome className="text-xl" />
                  <span>Admin Home</span>
               </NavLink>
               <NavLink to='/dashboard/addNews' className="flex items-center space-x-2 border py-1.5 px-2">
                  <IoIosAddCircleOutline className="text-xl" />
                  <span>Add News</span>
               </NavLink>
               <NavLink to='/dashboard/manageNews' className="flex items-center space-x-2 border py-1.5 px-2">
                  <LuMenuSquare className="text-xl" />
                  <span>Manage News</span>
               </NavLink>
               <NavLink to='/dashboard/allUsers' className="flex items-center space-x-2 border py-1.5 px-2">
                  <FaUsers className="text-xl" />
                  <span>All Users</span>
               </NavLink>
               <br />
               <span className="border-t w-full block pb-6"></span>
               <NavLink to='/' className="flex items-center space-x-2 border py-1.5 px-2">
                  <RiHome4Line className="text-xl" />
                  <span>Home</span>
               </NavLink>

            </ul>

         </div>
         <div className="w-full pl-[300px]">
            <Outlet />
         </div>
      </div>
   );
};

export default Dashboard;