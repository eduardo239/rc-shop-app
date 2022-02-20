import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import CartMenu from '../components/CartMenu';

function Cart() {
  const { user, userItems, userAddress, userPayment } = useContext(UserContext);

  return (
    <section>
      <section className="cart-wrapper">
        <CartMenu />
        <Outlet user={user} />
      </section>
    </section>
  );
}

export default Cart;
