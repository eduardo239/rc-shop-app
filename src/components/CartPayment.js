import { useContext, useRef, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';
import { convertToCurrency } from '../helper';
import { MdNavigateNext, MdNavigateBefore, MdLoop } from 'react-icons/md';
import CartTableAddress from './CartTableAddress';
import CartTableItems from './CartTableItems';
import ButtonIcon from '../form/ButtonIcon';
import InputRadio from '../form/InputRadio';
import QRCode from 'qrcode';

function CartPayment() {
  let navigate = useNavigate();

  const { order, setOrder } = useContext(OrderContext);
  const qrCodeRef = useRef(null);

  const [urlCode, setUrlCode] = useState('');
  const [payment, setPayment] = useState(
    order?.payment?.type ? order.payment.type : ''
  );

  const handlePayment = async () => {
    const payload = {
      type: payment,
      total: totalvalue,
    };
    try {
      const qr = await QRCode.toDataURL(JSON.stringify(payload));
      setUrlCode(qr);
      setOrder({ ...order, payment: payload });
    } catch (err) {
      console.log(err);
    }
  };

  const totalvalue = order.items.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  return (
    <section>
      <div className="mb-20">
        <h3>Pagamento</h3>

        <h5>Método de pagamento</h5>
        <form className="sign-form-2">
          <div>
            <InputRadio
              id="pix"
              type="radio"
              onChange={(e) => setPayment(e.target.value)}
              value={`PIX`}
              name="payment"
              checked={payment === 'PIX'}
            />
          </div>
          <div>
            <InputRadio
              type="radio"
              id="cartao-de-credito"
              onChange={(e) => setPayment(e.target.value)}
              value={`Cartão de Crédito`}
              name="payment"
              checked={payment === 'Cartão de Crédito'}
            />
          </div>
          <div>
            <InputRadio
              type="radio"
              id="boleto"
              onChange={(e) => setPayment(e.target.value)}
              value={`Boleto`}
              name="payment"
              checked={payment === 'Boleto'}
            />
          </div>
        </form>
      </div>

      <div className="mb-20">
        <h5>Produtos</h5>
        {order ? (
          <CartTableItems order={order} />
        ) : (
          <div>Não há itens no carrinho</div>
        )}
      </div>

      <div className="mb-20">
        <h5>Endereço</h5>
        <CartTableAddress address={order.address} />
      </div>

      <div className="mb-20">
        <h5>Resumo</h5>
        <div className="payment-wrapper">
          <div>
            <h5>Subtotal</h5>
            <p>{convertToCurrency(totalvalue)}</p>
          </div>
          <div>
            <h5>Frete</h5>
            <p>{convertToCurrency(123)}</p>
          </div>
          <div>
            <h5>Total</h5>
            <p>{convertToCurrency(totalvalue)}</p>
          </div>
        </div>
      </div>

      <div className="qrcode-wrapper mb-20">
        <div>
          <ButtonIcon
            iconAfter={<MdLoop />}
            type="submit"
            value="pagar"
            onClick={handlePayment}
          />
          {urlCode && (
            <div>
              <img
                className="qrcode"
                ref={qrCodeRef}
                src={urlCode}
                alt="Payment"
              />
            </div>
          )}
        </div>
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
