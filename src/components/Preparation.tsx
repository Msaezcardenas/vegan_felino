import { Wrapper } from '../Wrappers/Preparation';

const steps = [
  'cortar las cositas ya tu sae',
  'sofreir las vainas y condimentar',
  'mmmm no se que mas, poner en un plato',
  'Disfrutar porque #ñami ñami',
];

const Preparation = () => {
  return (
    <Wrapper>
      <div className='preparacion'>
        <h3> Preparación:</h3>
        <ul>
          {steps.map((step, index) => {
            return (
              <li key={index} className='steps'>
                <h4> Paso {index + 1} </h4>
                <p> {step} </p>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default Preparation;
