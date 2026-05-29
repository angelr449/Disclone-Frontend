
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // tu key del JWT

  if (!token) return <Navigate to="/auth" replace />;

  return <Outlet />;
};