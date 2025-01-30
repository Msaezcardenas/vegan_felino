import RecetasCard from '../components/RecetasCard';
import { Wrapper } from '../Wrappers/Recetas';

const Recetas = () => {
  return (
    <Wrapper>
      <div className='page'>
        <h1>Recetas</h1>
        <h2> En construccion...</h2>
        <div className='recetas-container'>
          <RecetasCard />
          <RecetasCard />
          <RecetasCard />
          <RecetasCard />
          <RecetasCard />
          <RecetasCard />
        </div>
      </div>
    </Wrapper>
  );
};

export default Recetas;
