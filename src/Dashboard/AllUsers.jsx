import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SharedAdminTitle from "../components/SharedAdminTitle";
import Swal from "sweetalert2";

const AllUsers = () => {
   const axiosPublic = useAxiosPublic();

   const { data: users = [] } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         const res = await axiosPublic.get('/users')
         return res.data;
      }
   })

   const handleDelete = id => {

      Swal.fire({
         title: "Are you Admin?",
         text: "You have to be admin to delete it.",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Request for Admin!"
       }).then((result) => {
         if (result.isConfirmed) {
           //
         }
       });

   }

   return (
      <div className="mx-6">
         <SharedAdminTitle title="All users" />

         <div className="">
            <div className="overflow-x-auto">
               <table className="min-w-full text-xs">
                  <colgroup>
                     <col />
                     <col />
                     <col />
                     <col />
                     <col className="w-24" />
                  </colgroup>
                  <thead className="border">
                     <tr className="text-left">
                        <th className="p-3">SL</th>
                        <th className="p-3">Photo</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Role</th>
                        <th className="p-3 text-right pr-8">Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        users.map((user, i) => <tr key={i} className="border">
                           <td className="p-3">
                              <p>{i + 1}</p>
                           </td>
                           <td className="p-3">
                              <img src={user.photo} alt="" className="w-10 rounded-md" />
                           </td>
                           <td className="p-3">
                              <p>{user.name}</p>
                           </td>
                           <td className="p-3">
                              <p>{user.email}</p>
                           </td>
                           <td className="p-3">
                              <p>User</p>
                           </td>
                           <td className="p-3 text-right">
                              <span onClick={handleDelete} className="px-3 py-1 font-semibold rounded-md bg-red-600 text-white cursor-pointer">
                                 <span>Delete</span>
                              </span>
                           </td>
                        </tr>)
                     }
                  </tbody>
               </table>
            </div>
         </div>

      </div>
   );
};

export default AllUsers;