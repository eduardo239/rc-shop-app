import poster_default from '../assets/celular.png';
import Card from './Card';

export const SliderFourItems = ({ items }) => {
  return (
    <section className="cards-wrapper mb-20">
      {items.length > 0 ? (
        items
          .slice(-4)
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
  );
};
