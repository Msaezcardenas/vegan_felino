import { Wrapper } from '../Wrappers/Ingredients';

const ingredientes = ['1 cebollin', '1 ajo', '1 tomate', '200gr de espinaca'];

const Ingredients = () => {
  return (
    <Wrapper>
      <div className='ingredientes'>
        <h3> Ingredientes:</h3>
        <ul className='list-ingredientes'>
          {ingredientes.map((item, index) => {
            return <li key={index}> {item} </li>;
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Ingredients;
