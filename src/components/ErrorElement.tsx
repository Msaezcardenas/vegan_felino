import { useRouteError } from 'react-router-dom';
function ErrorElement() {
  const error = useRouteError();
  console.log(error);

  return <h4>there was an error... </h4>;
}
export default ErrorElement;
