import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner from '../assets/images/banner.jpeg';
import banner2 from '../assets/images/banner2desktop.png';
import banner2Mobile from '../assets/images/banner2_mobile.png';
import banner3 from '../assets/images/b__veganfelino.jpeg';
import banner3mobile from '../assets/images/banner3mobile.jpeg';
import { Wrapper } from '../Wrappers/Banner';
import useIsMobile from '../utils/useIsMobile';

const Carousel = () => {
  const isMobile = useIsMobile(992);
  return (
    <Wrapper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        className='swiper'
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <img src={banner} alt='Slide 1' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={isMobile ? banner2Mobile : banner2} alt='Slide 2' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={isMobile ? banner3mobile : banner3} alt='Slide 3' className='slide_3' />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Carousel;
