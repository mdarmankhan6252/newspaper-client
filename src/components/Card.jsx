import { Link } from "react-router-dom";

const Card = ({ item }) => {
   if (!item) {
      return <div className="text-center">Item is not available</div>;
   }
   const { title, banner, description, category, author, _id } = item;


   return (
      <Link to={`/news/${_id}`} className="max-w-2xl min-h-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 border flex flex-col group">
         <div>
            <img className="object-cover w-full h-64 group-hover:scale-105 duration-300" src={banner} alt="Article banner" />
         </div>

         <div className="p-3">
            <div>
               <span className={`font-medium text-blue-600 uppercase bg-blue-300 bg-opacity-25 px-3 py-0.5 border rounded-sm text-[12px] ${category === 'business' && 'bg-blue-300 text-blue-600'} ${category === 'technology' && 'bg-pink-300 text-pink-600'} ${category === 'sports' && 'bg-green-300 text-green-600'} ${category === 'politics' && 'bg-purple-300 text-purple-600'} ${category === 'health' && 'bg-amber-300 text-amber-600'}`}>{category}</span>
               <h2 className="block mt-2 text-lg font-semibold text-gray-800 transition-colors duration-100 transform dark:text-white hover:text-[#8150fe] hover:underline " >{title}</h2>
               {category === 'popular' ? '' :
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description.slice(0, 52)}...</p>
               }
            </div>

            <div id="goBottom" className="flex items-center justify-between py-4">
               <img className="object-center object-cover h-10 w-10 rounded-full" src={author?.photo} alt="Avatar" />
               <p className="mx-2 font-semibold text-gray-700 dark:text-gray-200 text-[13px]" >{author.name}</p>
               <div>
                  <p className="mx-1 text-xs text-gray-600 dark:text-gray-300">{author.email}</p>
                  <p className="mx-1 text-xs text-gray-600 dark:text-gray-300">{author.posted_date}</p>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default Card;