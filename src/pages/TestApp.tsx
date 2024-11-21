import { createContext, useState } from 'react';
import './App.css';
import { AppForm, Button, ColorRed } from '../components';
import { useFetch } from '../hooks/useFetch';
import { ApiResponse } from '../types';
import { Cards } from '../components/Cards/Cards';
import { Navbar } from '../components/Navbar';

export const ProbandoContext = createContext({});
const url = 'http://localhost:8080/api/carts';

function App() {
  const [probandoContextValue, setProbandoContextValue] = useState(false);
  const { data, loading, error } = useFetch<ApiResponse>(url);

  console.log(data);

  const submit = () => {
    console.log('submitted');
  };

  const handleClick = () => {
    console.log('uy me clickio todo');
  };

  const dimeHola = () => {
    alert('hola !!');
  };

  return (
    <>
      <ProbandoContext.Provider value={{ probandoContextValue, setProbandoContextValue }}>
        <ColorRed>
          <Button parentMethod={dimeHola}>My Boton Rojo</Button>
        </ColorRed>
        <Button parentMethod={handleClick}> My Boton Normal</Button>
        <Cards />

        <AppForm>
          <button type='submit' onClick={submit}></button>
        </AppForm>
        <Navbar />
      </ProbandoContext.Provider>
    </>
  );
}

export default App;
