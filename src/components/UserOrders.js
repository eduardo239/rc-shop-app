import { useState } from 'react';
import CartTableItems from './CartTableItems';

function UserOrders() {
  const [quantity, setQuantity] = useState(1);

  return (
    <section>
      <div>
        <h3>User Orders</h3>
      </div>

      <div>
        <CartTableItems
          quantity={quantity}
          setQuantity={(e) => setQuantity(e.target.value)}
        />
      </div>
    </section>
  );
}

export default UserOrders;
