import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {

  let isLogged = localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== null;

  if (!isLogged) {
    return <Navigate to="/" />;
  }

  return (
    <Outlet />
  );
};

export default ProtectedRoute;