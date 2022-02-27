import { Link, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import { convertToCurrency } from '../helper';
import Admin from '../admin';
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
  const { searchResults, setSearchResults } = useContext(ItemContext);

  return (
    <section>
      <div className="bg-primary my-20">
        <Menu />
      </div>

      <div className="relative">
        {searchResults.length > 0 && (
          <section className="search-results-wrapper">
            <h4>Resultados</h4>
            {searchResults.length > 0 && (
              <ul className="search-results__list">
                {searchResults.map((item) => (
                  <li key={item._id}>
                    <Link
                      to={`/${item._id}`}
                      className="justify-between w-100"
                      onClick={() => setSearchResults([])}
                    >
                      <p>{item.name}</p>
                      <p>{convertToCurrency(item.price)}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </section>
        )}
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />}>
                <Route path="items" element={<CartItems />} />
                <Route path="address" element={<CartAddress />} />
                <Route path="payment" element={<CartPayment />} />
              </Route>
              <Route path="/" exact element={<Items />} />
              <Route path="/:id" element={<Item />} />
              <Route path="/user/:id" element={<UserWrapper />}>
                <Route path="home" element={<UserHome />} />
                <Route path="orders" element={<UserOrders />} />
                <Route path="edit" element={<UserEdit />} />
              </Route>
              <Route exact path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
