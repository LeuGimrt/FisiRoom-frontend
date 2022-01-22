import { Navigate, Outlet } from 'react-router';

const PublicRoutes = () => {
  const authToken = localStorage.getItem('user-token');
  if (authToken) return <Navigate to="/cursos" />;
  else return <Outlet />;
};

export default PublicRoutes;
