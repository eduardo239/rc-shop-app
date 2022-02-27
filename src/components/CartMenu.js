import { NavLink } from 'react-router-dom';
import {
  MdProductionQuantityLimits,
  MdLocationOn,
  MdOutlinePayment,
} from 'react-icons/md';

function CartMenu() {
  return (
    <ul className="menu menu__item">
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? 'link-active' : '')}
          to="/cart/items"
        >
          <MdProductionQuantityLimits />
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? 'link-active' : '')}
          to="/cart/address"
        >
          <MdLocationOn />
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) => (navData.isActive ? 'link-active' : '')}
          to="/cart/payment"
        >
          <MdOutlinePayment />
        </NavLink>
      </li>
    </ul>
  );
}

export default CartMenu;
