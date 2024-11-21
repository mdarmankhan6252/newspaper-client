import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {PacmanLoader} from 'react-spinners'

const PrivateRoute = ({children}) => {
   const {user, loading} = useAuth();
   if(loading){
      return <div className="flex items-center justify-center h-screen w-full">
         <PacmanLoader color="#963ae8" />
      </div>
   }
   if(user){
      return children;
   }
   return <Navigate to='/auth'></Navigate>
};

export default PrivateRoute;