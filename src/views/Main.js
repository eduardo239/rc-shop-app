import { Link, Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import { convertToCurrency } from "../helper";
import { MdClose } from "react-icons/md";
import Admin from "../admin";
import Menu from "../components/Menu";
import SignIn from "../views/SignIn";
import SignUp from "../views/SignUp";
import Home from "../views/Home";
import Item from "../views/Item";
import UserWrapper from "./UserWrapper";
import UserOrders from "../components/UserOrders";
import UserEdit from "../components/UserEdit";
import UserHome from "../components/UserHome";
import Cart from "./Cart";
import CartItems from "../components/CartItems";
import CartAddress from "../components/CartAddress";
import CartPayment from "../components/CartPayment";
import ItemNotFound from "./ItemNotFound";
import NotFound from "./404";
import UserFavorites from "../components/UserFavorites";
import Button from "../form/Button";

function Main() {
  const { searchResults, setSearchResults } = useContext(ItemContext);

  return (
    <section className="flex-1 ">
      <div className="bg-primary my-20">
        <Menu />
      </div>

      <div className="relative">
        {searchResults.length > 0 && (
          <section className="search-results-wrapper">
            <div className="flex flex-justify-between flex-align-center">
              <h4>Resultados</h4>

              <Button
                icon
                value={<MdClose />}
                onClick={() => setSearchResults([])}
              />
            </div>
            {searchResults.length > 0 && (
              <ul className="search-results__list">
                {searchResults.map((item) => (
                  <li key={item._id}>
                    <Link
                      to={`/${item._id}`}
                      className="justify-between w-100"
                      onClick={() => setSearchResults([])}
                    >
                      <span>{item.name}</span>
                      <span>{convertToCurrency(item.price)}</span>
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
              <Route path="/" exact element={<Home />} />
              <Route path="/:id" element={<Item />} />
              <Route path="/user/:id" element={<UserWrapper />}>
                <Route path="home" element={<UserHome />} />
                <Route path="orders" element={<UserOrders />} />
                <Route path="edit" element={<UserEdit />} />
                <Route path="favorites" element={<UserFavorites />} />
              </Route>
              <Route exact path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/rc-app-shop" element={<Navigate to="/" />} />
              <Route path="/product-not-found" element={<ItemNotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
