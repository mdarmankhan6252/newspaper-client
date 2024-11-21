import { MdArrowForwardIos } from "react-icons/md";

const SharedTitle = ({title}) => {
   return (
      <div className="py-12 flex items-center space-x-2">
         <h2 className="text-lg font-semibold sm:text-xl md:text-2xl">{title} </h2>   
         <MdArrowForwardIos className="-mb-2"/>      
      </div>
   );
};

export default SharedTitle;