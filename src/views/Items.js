import Card from '../components/Card';
import poster_default from '../assets/card_img.jpg';
import { useContext, useEffect, useState } from 'react';
import apiItem from '../api/item';
import { ItemContext } from '../context/ItemContext';

function Items() {
  const { searchResults, setSearchResults } = useContext(ItemContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await apiItem.getAllItems();
      setItems(response.data.data);
    })();
  }, []);

  return (
    <>
      {searchResults.length > 0 && (
        <section className="search-results-wrapper">
          <h4>Resultados</h4>
          {searchResults.length > 0 && (
            <ul className="search-results__list">
              {searchResults.map((item) => (
                <li key={item._id}>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      <section className="cards-wrapper">
        {items.length > 0 ? (
          items
            .map((item) => (
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
            .reverse()
        ) : (
          <p>Não há itens cadastrados</p>
        )}
      </section>
    </>
  );
}

export default Items;
