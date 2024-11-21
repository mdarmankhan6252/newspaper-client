import { IoIosSearch } from "react-icons/io";
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import useAuth from "../hooks/useAuth";

const Nav = () => {
   const { user, logOut } = useAuth();
   console.log(user, 'user in the nav bar.');
   return (
      <nav className="border-b border-gray-100 shadow py-3 fixed top-0 left-0 right-0 z-50 bg-white">
         <div className="flex items-center justify-between w-full relative max-w-7xl mx-auto px-3">
            <Link to='/'><img src={logo} alt="logo" className="w-12 " /></Link>
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden nav">
               <NavLink to='/' className="hover:border-b-[#8150fe] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#8150fe] capitalize">Home</NavLink>
               <NavLink to='/about' className="hover:8150fe-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#8150fe] capitalize">About Us
               </NavLink>
               <NavLink to='/news' className="hover:8150fe-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#8150fe] capitalize">All News
               </NavLink>
               {!user && <NavLink to='/auth' className="hover:border-b-[#8150fe] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#8150fe] capitalize">Sign In</NavLink>}
               {user && <NavLink to='/dashboard/adminHome' className="hover:border-b-[#8150fe] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#8150fe] capitalize">Dashboard</NavLink>}
            </ul>

            <div className="flex items-center gap-[10px]">
               {user && <span onClick={() => logOut()} className="text-white px-1 py-0.5 bg-purple-600 rounded-md text-[13px] font-semibold">LogOut</span>}

               {user?.photoURL &&
                  <img title={user?.displayName} src={user?.photoURL} alt="user" className="w-10 h-10 rounded-full object-cover border" />}

               <Link to='/news' className="relative lg:flex">
                  <input
                     className="py-1.5 pr-4 border border-text pl-10 rounded-full outline-none focus:border-[#8150fe]"
                     placeholder="Search..." />
                  <IoIosSearch className="absolute top-[9px] left-3 text-[#424242] text-[1.3rem]" />
               </Link>
            </div>


         </div>
      </nav>
   );
};

export default Nav;