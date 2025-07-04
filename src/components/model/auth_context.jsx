import { createContext, useContext, useState, } from "react";
import { useNavigate } from "react-router";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setAuth] = useState(() => {
    const stored = localStorage.getItem("isAuthenticated");
    return !!stored;
  });

  return (
    <AuthContext.Provider value={[ isAuth, setAuth ]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const [isAuth, setAuthContext] = useContext(AuthContext);
  const navigate = useNavigate();

  const setAuth = (value) => {
    setAuthContext(value);
    if (value) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    }
    else {
      localStorage.removeItem("isAuthenticated");
      navigate("/login");
    }
  };

  return [isAuth, setAuth];
};
