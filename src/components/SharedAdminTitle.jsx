
const SharedAdminTitle = ({title}) => {
   return (
      <div className="px-6">
         <div className="text-center space-y-3 py-12">
            <h3 className="text-xl text-purple-600">--- What's New ? ---</h3>
            <p className="border border-purple-100 w-56 mx-auto"></p>
            <h1 className="uppercase text-2xl sm:text-4xl">{title}</h1>
            <p className="border border-purple-100 w-72 mx-auto"></p>
         </div>         
      </div>
   );
};

export default SharedAdminTitle;