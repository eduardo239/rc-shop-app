import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputRadio from '../form/InputRadio';
import CartTableAddress from './CartTableAddress';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import ButtonIcon from '../form/ButtonIcon';

function CartPayment() {
  let navigate = useNavigate();

  const [payment, setPayment] = useState('credit');
  // eslint-disable-next-line no-unused-vars
  const [address, setAddress] = useState(null);

  return (
    <section>
      <div>
        <h3>Pagamento</h3>
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
        {/* <CartTableItems /> */}
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
        <ButtonIcon
          value="Voltar"
          iconAfter={<MdNavigateBefore />}
          onClick={() => navigate(`/cart/address`)}
        />
        <ButtonIcon
          value="Página Inicial"
          iconAfter={<MdNavigateNext />}
          onClick={() => navigate(`/`)}
        />
      </div>
    </section>
  );
}

export default CartPayment;
