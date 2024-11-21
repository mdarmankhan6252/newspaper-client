import banner from '../../assets/banner/about.jpg'
const About_banner = () => {
   return (
      <div style={{backgroundImage : `url(${banner})`}} className='w-full h-[30vh] bg-cover bg-center object-cover my-8 rounded-xl relative flex items-center justify-center'>
         <span className='w-full h-full absolute left-0 bg-black bg-opacity-15 rounded-xl '>
            
         </span>
         <h3 className='text-white font-semibold text-2xl md:text-4xl font-serif z-20'>About Us</h3>
         
      </div>
   );
};

export default About_banner;