import img from '../assets/images/seitan-1.jpg';
import { Wrapper } from '../Wrappers/RecetasCard';

const RecetasCard = () => {
  return (
    <Wrapper>
      <div className='receta-card'>
        <div className='container-img'>
          <img src={img} />
        </div>
        <div className='receta-info'>
          <h2> Seitan Saltado</h2>
          <div className='ingredientes'>
            <h3> Ingredientes:</h3>
          </div>
          <div className='preparacion'>
            <h3> Preparación:</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default RecetasCard;
