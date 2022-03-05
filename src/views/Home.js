import { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import { SliderItems } from '../components/SliderItems';
import { SliderFourItems } from '../components/SliderFourItems';
import CardGroup from '../components/CardGroup';

function Items() {
  const { items } = useContext(ItemContext);

  return (
    <>
      <CardGroup items={items.slice(-3).reverse()} />

      <SliderFourItems items={items} />

      <SliderItems slides={items.slice(0, 3)} />
    </>
  );
}

export default Items;
