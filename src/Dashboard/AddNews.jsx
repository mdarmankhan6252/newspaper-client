import SharedAdminTitle from "../components/SharedAdminTitle";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from 'react-hot-toast'


const apiKey = import.meta.env.VITE_ImgBB_api_key;
const imageUpload = `https://api.imgbb.com/1/upload?key=${apiKey}`

const AddNews = () => {
   const today = new Date()
   const posted_date = today.toISOString().split('T')[0];
   const { user } = useAuth()
   const axiosPublic = useAxiosPublic();


   const handleAddNews = async e => {
      e.preventDefault();

      const form = e.target;
      const currentBanner = form.banner.files[0];
      if (!currentBanner) {
         toast.error("Please select a banner image.");
         return
      }

      const formData = new FormData();
      formData.append("image", currentBanner)

      try {
         const res = await axiosPublic.post(imageUpload, formData, {
            headers: {
               "Content-Type": "multipart/form-data",
            },
         });

         console.log(res.data);
         if (res.data.success) {
            const title = form.title.value;
            const banner = res.data.data.display_url;
            const description = form.description.value;
            const category = form.category.value;

            const news = {
               title,
               description,
               banner,
               category,
               author : {
                  name : user?.displayName,
                  email : user?.email,
                  posted_date,
                  photo : user?.photoURL
               }
            }

            axiosPublic.post('/news', news)
            .then(res =>{
               if(res.data.insertedId){
                  toast.success('News has been posted successfully!')
                  form.reset();
               }
            })
         }

      } catch (error) {
         console.log(error);
         toast.error(error.message)
      }
   }
   return (
      <div className="mx-3">
         <SharedAdminTitle title="Add a News" />

         <form onSubmit={handleAddNews} className="p-10 border rounded-lg shadow-[0px_0px_3px_0] shadow-purple-500 space-y-4 border-purple-300 max-w-3xl mx-auto">
            <input type="text" name="title" placeholder="Write News Title" className="w-full p-2 outline-purple-300 font-semibold text-[15px] border border-purple-300" required />

            <input type="file" name="banner" placeholder="Write Banner URL" className="w-full p-2 outline-purple-300 font-semibold text-[15px] border border-purple-300" required />

            <select name="category" className="w-full p-2 outline-purple-300 font-semibold text-[15px] border border-purple-300" required>
               <option hidden>Select Category</option>
               <option value="popular">Popular</option>
               <option value="health">Health</option>
               <option value="sports">Sports</option>
               <option value="technology">Technology</option>
               <option value="politics">Politics</option>
               <option value="business">Business</option>
            </select>

            <textarea rows={4} name="description" className="w-full p-2 outline-purple-300 font-semibold text-[15px] border border-purple-300" placeholder="Write Description" required></textarea>

            <input type="submit" placeholder="Write Banner URL" className="w-full p-2 outline-purple-300 font-semibold text-[15px] border border-purple-300 uppercase cursor-pointer text-white bg-purple-600 hover:bg-purple-700" />
         </form>
      </div>
   );
};

export default AddNews;