import { Navigate } from 'react-router-dom';

interface props {
  children: JSX.Element | JSX.Element[];
  isLogged: boolean;
}

export const PublicRoutes: React.FC<props> = ({ isLogged, children }) => {
  return <>{isLogged ? <Navigate to='/' /> : children}</>;
};
