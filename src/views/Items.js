import Card from '../components/Card';
import poster_default from '../assets/card_img.jpg';
import { useEffect, useState } from 'react';
import apiItem from '../api/item';

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await apiItem.getAllItems();
      setItems(response.data.data);
    })();
  }, []);

  return (
    <section className="cards-wrapper">
      {items.length > 0 ? (
        items.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            title={item.name}
            poster={item.poster ? item.poster : poster_default}
            alt={item.name}
            content={item.description}
            colors={item.colors}
            storages={item.storages}
            specs={item.specs}
          />
        ))
      ) : (
        <p>Não há itens cadastrados</p>
      )}
    </section>
  );
}

export default Items;
