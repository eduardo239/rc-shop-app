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
          className={(navData) =>
            navData.isActive
              ? 'link-active__dark'
              : 'link-active__dark-disabled'
          }
          to="/cart/items"
        >
          <MdProductionQuantityLimits /> Produtos
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? 'link-active__dark'
              : 'link-active__dark-disabled'
          }
          to="/cart/address"
        >
          <MdLocationOn /> Endereço
        </NavLink>
      </li>
      <li>
        <NavLink
          className={(navData) =>
            navData.isActive
              ? 'link-active__dark'
              : 'link-active__dark-disabled'
          }
          to="/cart/payment"
        >
          <MdOutlinePayment /> Pagamento
        </NavLink>
      </li>
    </ul>
  );
}

export default CartMenu;
