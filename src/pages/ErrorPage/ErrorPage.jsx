import { Link } from 'react-router-dom';
import photo from '../../assets/img_1.gif'

const ErrorPage = () => {
   return (
      <div className='flex items-center justify-center w-full h-screen flex-col'>
         <img src={photo} alt="" className='w-36 sm:w-44'/>
         <Link className='inline-block border-2 border-purple-600 text-purple-600 py-2 px-6 rounded-xl font-semibold'>Go Home</Link>
      </div>
   );
};

export default ErrorPage;