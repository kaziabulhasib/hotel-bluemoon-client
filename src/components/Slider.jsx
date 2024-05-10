import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import SingleSlide from "./SingleSlide";
import "swiper/css/pagination";
import "swiper/css/navigation";
// img import
import bgImg1 from "../assets/images/carousel1.jpg";
import bgImg2 from "../assets/images/carousel2.jpg";
import bgImg3 from "../assets/images/carousel3.jpg";
const Slider = () => {
  return (
    <div className=' py-8 border px-8 my-16'>
      <Swiper
        loop={true}
        navigation={false}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className='mySwiper'>
        <SwiperSlide>
          <SingleSlide
            img={bgImg3}
            text='Fuel wanderlust with hotel room visuals'></SingleSlide>
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlide
            img={bgImg2}
            text='Indulge in luxury through captivating visuals!'></SingleSlide>
        </SwiperSlide>
        <SwiperSlide>
          <SingleSlide
            img={bgImg1}
            text='Escape with enticing hotel room images'></SingleSlide>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
