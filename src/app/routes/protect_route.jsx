import { Navigate } from "react-router";
import { useAuth } from "@/components/model/auth_context";

const ProtectedRoute = ({ children }) => {
  const [isAuth] = useAuth();

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
