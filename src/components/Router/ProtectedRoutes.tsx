import { Navigate, Outlet } from 'react-router';

const ProtectedRoutes = () => {
  const authToken = localStorage.getItem('user-token');
  if (authToken) return <Outlet />;
  else return <Navigate to="/login" />;
};

export default ProtectedRoutes;
