import Preparation from '../components/Preparation';
import Ingredients from '../components/IngredientsSection';
import img from '../assets/images/seitan-1.jpg';
import { Wrapper } from '../Wrappers/DetailRecipe';

const DetailRecipe = () => {
  return (
    <Wrapper>
      <div className='detail-recipe'>
        <div className='img-container'>
          <img src={img} />
        </div>
        <div className='recipe-section'>
          <div className='info-recipe'>
            <h1> Seitan Saltado</h1>
            <Ingredients />
            <Preparation />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DetailRecipe;
