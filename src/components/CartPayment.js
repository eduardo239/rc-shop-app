import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../form/Button';
import InputRadio from '../form/InputRadio';
import CartTableItems from './CartTableItems';
import CartTableAddress from './CartTableAddress';

function CartPayment() {
  let navigate = useNavigate();

  const [payment, setPayment] = useState('credit');
  const [address, setAddress] = useState(null);

  return (
    <section>
      <div>
        <h2>Pagamento</h2>
        <p>{payment}</p>
        <div>
          <InputRadio
            label="label"
            id="credit"
            value="credit"
            name="payment"
            onChange={(e) => setPayment(e.target.value)}
          />
          <InputRadio
            label="PIX"
            id="pix"
            value="pix"
            name="payment"
            onChange={(e) => setPayment(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h2>Items</h2>
        <CartTableItems />
      </div>

      <div>
        <h2>Endereço</h2>
        {address ? (
          <CartTableAddress address={address} />
        ) : (
          <p>Não há endereço</p>
        )}
      </div>
      <div>
        <Button value="Voltar" onClick={() => navigate(`/cart/address`)} />
        <Button value="Próximo" />
      </div>
    </section>
  );
}

export default CartPayment;
