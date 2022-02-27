import React, { useState } from 'react';

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;

const UserContextContent = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userItems, setUserItems] = useState([]);
  const [userAddress, setUserAddress] = useState(null);
  const [userPayment, setUserPayment] = useState(null);
  const [userId, setUserId] = useState(null);

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
        userId,
        setUserId,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </UserProvider>
  );
};

export { UserContext, UserContextContent };
