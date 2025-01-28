import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import banner from '../assets/images/banner.jpeg';
import banner2 from '../assets/images/banner3.jpeg';
import banner3 from '../assets/images/b__veganfelino.jpeg';
import { Wrapper } from '../Wrappers/Banner';

const Carousel = () => {
  return (
    <Wrapper>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        className='swiper'
        autoplay={{
          delay: 5000, // Tiempo entre diapositivas (en milisegundos)
          disableOnInteraction: false, // Mantener autoplay aunque el usuario interactúe
        }}
        loop={true} // Permitir que el carrusel sea infinito
      >
        <SwiperSlide>
          <img src={banner} alt='Slide 1' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt='Slide 2' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt='Slide 3' />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default Carousel;
