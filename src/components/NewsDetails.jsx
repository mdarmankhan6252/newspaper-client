import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NewsDetails = () => {
   const item = useLoaderData();
   const { user } = useAuth();
   console.log(item);
   return (
      <div className="py-10 space-y-6">
         <div className="flex items-center justify-between bg-gray-50 p-2 border border-gray-100">
            <div className="flex items-center space-x-3">
               <img src={item.author.photo} alt="" className="w-10 h-10 rounded-full object-cover" />
               <div className="">
                  <h4 className="font-semibold">{item.author.name}</h4>
                  <p className="text-[14px]">{item.author.email}</p>
               </div>
            </div>
            <p className="font-serif font-semibold text-[14px]">{item.author.posted_date}</p>
         </div>
         <div>
            <img src={item.banner} className="w-full rounded-xl" />
         </div>
         <h1 className="text-2xl sm:text-4xl font-bold ">{item.title}</h1>
         <p className="text-justify">{item.description} {item.description} {item.description} {item.description} {item.description} {item.description}{item.description} {item.description}</p>

         {/* comment about the news */}

         <div className="py-12">

            <div>
               <h3 className="pb-3 text-xl font-semibold">Write Your Comments</h3>
               <form className="flex border mr-2 rounded-md">
                  <input type="text" name="comment" placeholder="Write Your Comment" className="p-2 flex-grow rounded-l-md outline-none" />
                  <input type="submit" value="POST" className="px-3 text-[14px] font-semibold bg-purple-600 text-white cursor-pointer rounded-r-md" />
               </form>
            </div>

            {/* all comments */}

            <div className="my-6 border-r-purple-50 border p-1 rounded-lg flex space-x-4">
               <img src={user?.photoURL} alt="user_photo" className="w-10 h-10 rounded-full object-cover" />
               <div>
                  <h4 className="text-[14px] font-semibold">MD Arman Khan</h4>
                  <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam voluptate aliquid dolorum officiis voluptates!</p>
               </div>

            </div>
            <div className="my-6 border-r-purple-50 border p-1 rounded-lg flex space-x-4">
               <img src={user?.photoURL} alt="user_photo" className="w-10 h-10 rounded-full object-cover" />
               <div>
                  <h4 className="text-[14px] font-semibold">MD Arman Khan</h4>
                  <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam voluptate aliquid dolorum officiis voluptates!</p>
               </div>

            </div>
            <div className="my-6 border-r-purple-50 border p-1 rounded-lg flex space-x-4">
               <img src={user?.photoURL} alt="user_photo" className="w-10 h-10 rounded-full object-cover" />
               <div>
                  <h4 className="text-[14px] font-semibold">MD Arman Khan</h4>
                  <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam voluptate aliquid dolorum officiis voluptates!</p>
               </div>

            </div>
            <div className="my-6 border-r-purple-50 border p-1 rounded-lg flex space-x-4">
               <img src={user?.photoURL} alt="user_photo" className="w-10 h-10 rounded-full object-cover" />
               <div>
                  <h4 className="text-[14px] font-semibold">MD Arman Khan</h4>
                  <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam voluptate aliquid dolorum officiis voluptates!</p>
               </div>

            </div>
            <div className="my-6 border-r-purple-50 border p-1 rounded-lg flex space-x-4">
               <img src={user?.photoURL} alt="user_photo" className="w-10 h-10 rounded-full object-cover" />
               <div>
                  <h4 className="text-[14px] font-semibold">MD Arman Khan</h4>
                  <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam voluptate aliquid dolorum officiis voluptates!</p>
               </div>

            </div>
            <div className="my-6 border-r-purple-50 border p-1 rounded-lg flex space-x-4">
               <img src={user?.photoURL} alt="user_photo" className="w-10 h-10 rounded-full object-cover" />
               <div>
                  <h4 className="text-[14px] font-semibold">MD Arman Khan</h4>
                  <p className="text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. At quibusdam voluptate aliquid dolorum officiis voluptates!</p>
               </div>

            </div>

         </div>





      </div>
   );
};

export default NewsDetails;