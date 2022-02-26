import { useContext, useState } from 'react';
import apiItem from '../api/item';
import { OrderContext } from '../context/OrderContext';
import Input from '../form/Input';
import { convertToCurrency, isEmpty } from '../helper';

function CartTableItems({ order }) {
  const { setOrder } = useContext(OrderContext);

  const handleQuantityChange = async (item, quantity) => {
    try {
      // update item quantity
    } catch (err) {
      console.log(err);
    }
  };
  console.log(isEmpty(order));
  return (
    <table className="mb-10">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cor</th>
          <th>Armazenamento</th>
          <th>Quantidade</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {!isEmpty(order) ? (
          order.items.map((item, index) => (
            <tr key={index}>
              {console.log(item)}
              <td>{item.name}</td>
              <td>
                <div
                  style={{
                    height: '30px',
                    width: '30px',
                    display: 'block',
                    background: item.color,
                  }}
                ></div>
              </td>
              <td>{item.storage} GB</td>
              <td>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item, e.target.value)}
                />
              </td>
              <td>{convertToCurrency(item.price * item.quantity)}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">Não há itens no carrinho</td>
          </tr>
        )}
        {order.length > 0 && (
          <tr>
            <td colSpan="4">Total</td>
            <td>
              {convertToCurrency(
                order.items.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )
              )}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default CartTableItems;
