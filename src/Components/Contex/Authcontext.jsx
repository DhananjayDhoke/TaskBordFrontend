// TokenContext.js
import { createContext, useState } from 'react';

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState('');

  const storeToken = (newToken) => {
    setToken(newToken);
  };

  return (
    <TokenContext.Provider value={{ token, storeToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
