import React, { useEffect, useState } from 'react';
import apiItem from '../api/item';

const ItemContext = React.createContext();

const ItemProvider = ItemContext.Provider;

const ItemContextContent = ({ children }) => {
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const response = await apiItem.getAllItems();
      if (isMounted) setItems(response.data.data);
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ItemProvider
      value={{
        item,
        setItem,
        items,
        setItems,
      }}
    >
      {children}
    </ItemProvider>
  );
};

export { ItemContext, ItemContextContent };
