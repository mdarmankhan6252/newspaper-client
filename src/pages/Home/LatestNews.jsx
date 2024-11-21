import Card from "../../components/Card";
import SharedTitle from "../../components/SharedTitle";
import useNews from "../../hooks/useNews";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const LatestNews = () => {
   const [news] = useNews();
   return (
      <div >
         <SharedTitle title="Latest News"/>

         <div>
            <Swiper
               spaceBetween={30}
               slidesPerView={4}
               loop={true}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination, Navigation]}
               className="mySwiper"
               breakpoints={{
                  320: {
                     slidesPerView: 1, 
                  },
                  766: {
                     slidesPerView: 2,
                  },
                  1024: {
                     slidesPerView: 3,
                  },
                  1200: {
                     slidesPerView: 4,
                  },
               }}
            >

               <div>
                  {
                     news.filter(item => item.category === 'popular').map((item, i) => <SwiperSlide className="mb-10" key={i}><Card item={item}></Card></SwiperSlide>)
                  }
               </div>
            </Swiper>
         </div>
      </div>
   );
};

export default LatestNews;