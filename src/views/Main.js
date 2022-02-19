import { Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import Items from '../views/Items';
import Item from '../views/Item';
import UserWrapper from './UserWrapper';
import UserOrders from '../components/UserOrders';
import UserEdit from '../components/UserEdit';
import UserHome from '../components/UserHome';
import Cart from './Cart';
import CartItems from '../components/CartItems';
import CartAddress from '../components/CartAddress';
import CartPayment from '../components/CartPayment';

function Main() {
  return (
    <section className="container">
      <div className="row">
        <div className="col">
          <Menu />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />}>
              <Route path="" element={<CartItems />} />
              <Route path="address" element={<CartAddress />} />
              <Route path="payment" element={<CartPayment />} />
            </Route>
            <Route path="/" exact element={<Items />} />
            <Route path="/:id" element={<Item />} />
            <Route path="/user/:id" element={<UserWrapper />}>
              <Route path="" element={<UserHome />} />
              <Route path="orders" element={<UserOrders />} />
              <Route path="edit" element={<UserEdit />} />
            </Route>
          </Routes>
        </div>
      </div>
    </section>
  );
}

export default Main;
