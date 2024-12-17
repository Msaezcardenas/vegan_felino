import { useRouteError } from 'react-router-dom';
import { Wrapper } from '../Wrappers/Error';
import errorImg from '../assets/images/error.png';

function ErrorElement() {
  const error = useRouteError();
  console.log(error);

  return (
    <Wrapper>
      <h1> Upsss! Lo siento, Hubo un error </h1>
      <img src={errorImg} alt='error image' />
    </Wrapper>
  );
}
export default ErrorElement;
