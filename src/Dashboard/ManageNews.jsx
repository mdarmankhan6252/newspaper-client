import SharedAdminTitle from "../components/SharedAdminTitle";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from 'sweetalert2'
import { useQuery } from '@tanstack/react-query'
import useAuth from "../hooks/useAuth";

const ManageNews = () => {
   const { user } = useAuth();
   const axiosPublic = useAxiosPublic();

   const {data : news = [], refetch} = useQuery({
      queryKey : ['myNews', user?.email],
      queryFn : async() =>{
         const res = await axiosPublic.get(`/myNews?email=${user.email}`) //we are doing query.
         return res.data;
         
      },
   })
   
   

   const handleDelete = id => {

      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {
            axiosPublic.delete(`/news/${id}`)
               .then(res => {
                  if (res.data.deletedCount > 0) {
                     refetch()
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                     });
                  }
               })

         }
      });


   }

   return (
      <div className="mx-6">
         <SharedAdminTitle title="Manage All News" />

         <div className="">
            <div className="overflow-x-auto">
               <table className="min-w-full text-xs">
                  <colgroup>
                     <col />
                     <col />
                     <col />
                     <col />
                     <col />
                     <col />
                     <col />
                     <col className="w-24" />
                  </colgroup>
                  <thead className="border">
                     <tr className="text-left">
                        <th className="p-3">SL</th>
                        <th className="p-3">Banner</th>
                        <th className="p-3">Title</th>
                        <th className="p-3">Name</th>
                        <th className="p-3 ">Email</th>
                        <th className="p-3 ">Category</th>
                        <th className="p-3">Posted Date</th>
                        <th className="p-3">Update</th>
                        <th className="p-3">Delete</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        news.map((item, i) => <tr key={i} className="border">
                           <td className="p-3">
                              <p>{i + 1}</p>
                           </td>
                           <td className="p-3">
                              <img src={item.banner} alt="" className="w-12 rounded-md" />
                           </td>
                           <td className="p-3">
                              <p>{item.title}</p>
                           </td>
                           <td className="p-3">
                              <p>{item.author.name}</p>
                           </td>
                           <td className="p-3">
                              <p>{item.author.email}</p>
                           </td>
                           <td className="p-3">
                              <p className={`${item.category === 'popular' && 'text-purple-500'} ${item.category === 'politics' && 'text-pink-500'} ${item.category === 'business' && 'text-cyan-500'} ${item.category === 'health' && 'text-green-500'} ${item.category === 'technology' && 'text-amber-500'} ${item.category === 'sports' && 'text-blue-500'}`}>{item.category}</p>
                           </td>
                           <td className="p-3">
                              <p>{item.author.posted_date}</p>
                           </td>
                           <td className="p-3">
                              <span className="px-3 py-1 font-semibold rounded-md bg-green-600 text-white cursor-pointer">
                                 <span>Update</span>
                              </span>
                           </td>
                           <td className="p-3 text-right">
                              <span onClick={() => handleDelete(item._id)} className="px-3 py-1 font-semibold rounded-md bg-red-600 text-white cursor-pointer">
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

export default ManageNews;