import { Link } from 'react-router-dom';
import img from '../assets/images/seitan-1.jpg';
import { Wrapper } from '../Wrappers/RecetasCard';
import Ingredients from './IngredientsSection';
import Preparation from './Preparation';

const RecetasCard = () => {
  return (
    <Wrapper>
      <div className='receta-card'>
        <div className='container-img'>
          <img src={img} />
        </div>
        <div className='receta-info'>
          <h2> Seitan Saltado</h2>
          <Ingredients />
          <Preparation />
        </div>
        <div className='link-container'>
          <Link to='/' className='seguir-leyendo'>
            Seguir Leyendo +
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default RecetasCard;
