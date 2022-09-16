import { createContext, ReactNode, useState } from "react";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthValue = {
  token: string | null;
  isLoggedin: boolean;
  login: (token: string) => void;
  logout: () => void;
};

export const authContext = createContext<AuthValue>({
  token: null,
  isLoggedin: false,
  login() {},
  logout() {},
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  function login(token: string) {
    setToken(token);
  }

  function logout() {
    setToken(null);
  }

  const authValue: AuthValue = {
    token,
    isLoggedin: !!token,
    login,
    logout,
  };

  return (
    <authContext.Provider value={authValue}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
