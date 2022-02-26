import { Link } from 'react-router-dom';
import {
  MdProductionQuantityLimits,
  MdLocationOn,
  MdOutlinePayment,
} from 'react-icons/md';

function CartMenu() {
  return (
    <ul className="menu menu__item">
      <li>
        <Link to="/cart">
          <MdProductionQuantityLimits />
        </Link>
      </li>
      <li>
        <Link to="/cart/address">
          <MdLocationOn />
        </Link>
      </li>
      <li>
        <Link to="/cart/payment">
          <MdOutlinePayment />
        </Link>
      </li>
    </ul>
  );
}

export default CartMenu;
