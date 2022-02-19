import { Link } from 'react-router-dom';

function CartMenu() {
  return (
    <ul className="menu menu__item">
      <li>
        <Link to="/cart">Itens</Link>
      </li>
      <li>
        <Link to="/cart/address">Endereço</Link>
      </li>
      <li>
        <Link to="/cart/payment">Pagamento</Link>
      </li>
    </ul>
  );
}

export default CartMenu;
