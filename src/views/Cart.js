import { Outlet } from 'react-router-dom';
import CartMenu from '../components/CartMenu';

function Cart() {
  return (
    <section>
      <section className="cart-wrapper">
        <CartMenu />
        <Outlet />
      </section>
    </section>
  );
}

export default Cart;
