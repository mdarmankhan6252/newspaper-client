import { Link } from 'react-router-dom';
import about from '../../assets/banner/about.png'
const Details = () => {
   return (
      <div className='flex items-center justify-between space-x-12 mb-20'>
         <div>
            <img src={about} alt="about_us" className='w-full rounded-xl'/>
         </div>
         <div className='space-y-3'>
            <h2 className='text-2xl sm:text-3xl font-semibold'>Welcome to <span className='font-bold text-purple-500'>Global Vista,</span> where news meets perspective!</h2>
            <p className='text-[15px]'><span className='pl-8'></span> At Global Vista, we are committed to delivering accurate, insightful, and thought-provoking journalism. Our mission is to bridge the gap between global events and local communities by offering a comprehensive view of the stories that matter.</p>
            <h4 className='text-lg font-semibold sm:text-xl'>Why Choose Global Vista?</h4>
            <ul className='list list-disc ml-5' >
               <li>Trusted Reporting</li>
               <li>Global Perspective</li>
               <li>Innovative Experience</li>
            </ul>
            <Link to='/' className='inline-block px-6 py-2 font-semibold bg-purple-600 text-white rounded-xl'>See News</Link>
         </div>
      </div>
   );
};

export default Details;