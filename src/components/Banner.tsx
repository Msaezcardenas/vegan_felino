import { Wrapper } from '../Wrappers/Banner';
import img from '../assets/images/seitan-1.jpg';

const Banner = () => {
  return (
    <Wrapper>
      <div className='banner'>
        <img src={img} alt='Banner promocional de nuestros productos' />
        <div className='content'>
          <h1>Explora nuestras ofertas</h1>
          <p>¡Productos de calidad al mejor precio!</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Banner;
