import { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import Card from '../components/Card';
import CardGroup from '../components/CardGroup';
import poster_default from '../assets/celular.png';

function Items() {
  const { items } = useContext(ItemContext);

  return (
    <>
      <section>
        <CardGroup items={items.slice(-3).reverse()} />
      </section>

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
