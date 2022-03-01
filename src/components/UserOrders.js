import { useContext, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import CartTableItems from './CartTableItems';

function UserOrders() {
  const { order } = useContext(OrderContext);

  console.log(order);

  return (
    <section>
      <div>
        <h3>Pedidos</h3>
      </div>

      <div>
        <CartTableItems order={order} disabled={true} />
      </div>
    </section>
  );
}

export default UserOrders;
