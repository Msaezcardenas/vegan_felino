import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export const AppForm = ({ children }: Props) => {
  return (
    <form>
      <h1> Login </h1>
      <div>
        <label> Nombre</label>
        <input />
      </div>

      {children}
    </form>
  );
};
