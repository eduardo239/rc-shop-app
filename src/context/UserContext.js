import React, { useState } from 'react';

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;

const UserContextContent = ({ children }) => {
  const [user, setUser] = useState(123);
  const [userItems, setUserItems] = useState([]);
  const [userAddress, setUserAddress] = useState(null);
  const [userPayment, setUserPayment] = useState(null);

  return (
    <UserProvider
      value={{
        user,
        setUser,
        userItems,
        setUserItems,
        userAddress,
        setUserAddress,
        userPayment,
        setUserPayment,
      }}
    >
      {children}
    </UserProvider>
  );
};

export { UserContext, UserContextContent };
