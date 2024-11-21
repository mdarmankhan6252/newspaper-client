import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import banner_1 from '../../assets/banner/banner_1.jpg'
import banner_2 from '../../assets/banner/banner_2.jpg'
import banner_3 from '../../assets/banner/banner_3.jpg'
import { Link } from 'react-router-dom';

const Slider = () => {
   return (
      <div className='py-4 slider'>
         <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
               delay: 4000,
               disableOnInteraction: false,
             }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
         >
            <SwiperSlide className='relative text-center text-white '>
               <img src={banner_1} alt="" className='h-[30vh] sm:h-[50vh] md:h-[65vh] lg:h-[75vh] w-full rounded-xl' />
               <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] z-50'>
                  <h1 className='text-xl sm:text-2xl uppercase font-serif md:text-3xl font-semibold '>We are the biggest news portal platform</h1>
                  <p className='py-4 sm:text-[15px] text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <Link className='btn_1'>See More</Link>
               </div>
               <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-950 bg-opacity-50 rounded-xl'></div>
            </SwiperSlide>
            <SwiperSlide className='relative text-center text-white'>
               <img src={banner_2} alt="" className='h-[30vh] sm:h-[50vh] md:h-[65vh] lg:h-[75vh] w-full rounded-xl' />
               <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] z-50'>
                  <h1 className='text-xl sm:text-2xl uppercase font-serif md:text-3xl font-semibold '>Our Service is popular to people.</h1>
                  <p className='py-4 sm:text-[15px] text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <Link className='btn_1'>See More</Link>
               </div>
               <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-950 bg-opacity-50 rounded-xl'></div>
            </SwiperSlide>
            <SwiperSlide className='relative text-center text-white'>
               <img src={banner_3} alt="" className='h-[30vh] sm:h-[50vh] md:h-[65vh] lg:h-[75vh] w-full rounded-xl' />
               <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] z-50'>
                  <h1 className='text-xl sm:text-2xl uppercase font-serif md:text-3xl font-semibold '>We are the Bangladeshi news portal.</h1>
                  <p className='py-4 sm:text-[15px] text-[13px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <Link className='btn_1'>See More</Link>
               </div>
               <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-950 bg-opacity-50 rounded-xl'></div>
            </SwiperSlide>
         </Swiper>


      </div>
   );
};

export default Slider;