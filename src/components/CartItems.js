import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../form/Button';
import CartTableItems from './CartTableItems';

function CartItems() {
  let navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  return (
    <section>
      <div>
        <h2>Itens</h2>
        <CartTableItems />
      </div>
      <div>
        <Button value="Voltar" />
        <Button value="Próximo" onClick={() => navigate(`/cart/address`)} />
      </div>
    </section>
  );
}

export default CartItems;
