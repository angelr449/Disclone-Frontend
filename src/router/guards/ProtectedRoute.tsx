
import { getCookie } from "@/helpers/getCookie";
import { Navigate, Outlet } from "react-router";

export const ProtectedRoute = () => {

  const token = getCookie('token'); // Token key

  if (!token) return <Navigate to="/auth" replace />;

  return <Outlet />;
};