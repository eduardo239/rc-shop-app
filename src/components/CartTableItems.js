import { useContext } from 'react';
import { MdClose, MdPalette } from 'react-icons/md';
import { OrderContext } from '../context/OrderContext';
import { convertToCurrency } from '../helper';
import Button from '../form/Button';
import Input from '../form/Input';

function CartTableItems({ order, disabled }) {
  // eslint-disable-next-line no-unused-vars
  const { setOrder } = useContext(OrderContext);

  const handleQuantityChange = async (item, quantity) => {
    try {
      // TODO: update item quantity
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveItem = async (item) => {
    try {
      let arr = order.items.filter((i) => i.itemId !== item.itemId);
      setOrder({ ...order, items: arr });
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log(order);

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: '30%' }}>Nome</th>
          <th className="w-32">C</th>
          <th style={{ width: '10%' }}>Armazenamento</th>
          <th style={{ width: '10%' }}>Quantidade</th>
          <th style={{ width: '10%' }}>Promoção</th>
          <th style={{ width: '10%' }}>Preço</th>
          <th style={{ width: '21%' }}>Total vezes unidade</th>
          <th className="w-32">R</th>
        </tr>
      </thead>
      <tbody>
        {order?.items.length > 0 ? (
          order.items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td className="cart-table-items__color">
                <div style={{ background: item.color }}></div>
              </td>
              <td>{item.storage} GB</td>
              <td>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item, e.target.value)}
                  disabled={disabled}
                />
              </td>
              <td>{item.promo}</td>
              <td>{convertToCurrency(item.price)}</td>
              <td>{convertToCurrency(item.price * item.quantity)}</td>
              <td>
                <Button
                  icon
                  value={<MdClose />}
                  onClick={() => handleRemoveItem(item)}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="8">Não há itens no carrinho</td>
          </tr>
        )}
        {order.items.length > 0 && (
          <tr>
            <td colSpan="5">
              <h5>Total</h5>
            </td>
            <td colSpan="3">
              <h5>
                {convertToCurrency(
                  order.items.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )
                )}
              </h5>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default CartTableItems;
