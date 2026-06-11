
import { getCookie } from "@/helpers/getCookie";
import { Navigate, Outlet } from "react-router";

export const PublicRoute = () => {
 const token = getCookie('token'); // Token key

  if (token) return <Navigate to="/" replace />;

  return <Outlet />;
};