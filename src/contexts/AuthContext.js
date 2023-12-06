import React from 'react';
import {useState} from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setUserToken('hfhshfksf');
    setIsLoading(false);
  };

  const logout = () => {
    setUserToken(null);
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
