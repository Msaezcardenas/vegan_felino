import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import seitan_1 from '../assets/images/seitan-1.jpg';
import seitan_3 from '../assets/images/seitan-3.jpg';
import { Wrapper } from '../Wrappers/Banner';

const Carousel = () => {
  return (
    <Wrapper>
      <Swiper modules={[Navigation, Pagination]} navigation pagination={{ clickable: true }} spaceBetween={0} slidesPerView={1} className='swiper'>
        <SwiperSlide>
          <img src={seitan_1} alt='Slide 1' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={seitan_3} alt='Slide 3' />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Carousel;
