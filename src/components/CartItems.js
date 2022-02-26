import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import CartTableItems from './CartTableItems';
import ButtonIcon from '../form/ButtonIcon';

function CartItems() {
  let navigate = useNavigate();

  const { order } = useContext(OrderContext);

  const [quantity, setQuantity] = useState(1);

  return (
    <section>
      <div>
        <h3>Itens</h3>
        <CartTableItems
          items={order}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
      <div className="flex">
        <ButtonIcon
          value="Voltar"
          iconAfter={<MdNavigateBefore />}
          onClick={() => navigate(`/`)}
        />
        <ButtonIcon
          value="Próximo"
          iconAfter={<MdNavigateNext />}
          onClick={() => navigate(`/cart/address`)}
        />
      </div>
    </section>
  );
}

export default CartItems;
