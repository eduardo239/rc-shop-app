import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../form/Button';
import CartTableItems from './CartTableItems';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
function CartItems() {
  let navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  return (
    <section>
      <div>
        <h2>Itens</h2>
        <CartTableItems quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className="flex">
        <Button
          icon
          iconLabelAfter="Voltar"
          value={<MdNavigateBefore />}
          onClick={() => navigate(`/`)}
        />
        <Button
          icon
          value={<MdNavigateNext />}
          onClick={() => navigate(`/cart/address`)}
        />
      </div>
    </section>
  );
}

export default CartItems;
