import { Navigate } from 'react-router-dom';

interface props {
  children: JSX.Element | JSX.Element[];
  isLogged: boolean;
}

export const PrivateRoutes: React.FC<props> = ({ isLogged, children }) => {
  return <>{isLogged ? children : <Navigate to='/auth' />}</>;
};
