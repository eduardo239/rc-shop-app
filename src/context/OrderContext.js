import React, { useState } from 'react';

const OrderContext = React.createContext();

const OrderProvider = OrderContext.Provider;

const OrderContextContent = ({ children }) => {
  const [order, setOrder] = useState({ userId: null, items: [], address: {} });
  const [address, setAddress] = useState(null);
  const [payment, setPayment] = useState(null);

  return (
    <OrderProvider
      value={{
        order,
        setOrder,
        address,
        setAddress,
        payment,
        setPayment,
      }}
    >
      {children}
    </OrderProvider>
  );
};

export { OrderContext, OrderContextContent };
