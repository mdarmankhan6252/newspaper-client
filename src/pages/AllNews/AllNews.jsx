import Card from "../../components/Card";
import useNews from "../../hooks/useNews";

const AllNews = () => {
   const [news] = useNews();

   return (
      <div className="py-20">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {
               news.map((item, i) => <Card key={i} item={item}></Card>)
            }
         </div>

      </div>
   );
};

export default AllNews;