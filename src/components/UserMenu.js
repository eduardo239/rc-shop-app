import Avatar from './Avatar';
import random_avatar from '../assets/21.jpg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserMenu() {
  const { userInfo } = useContext(UserContext);

  return (
    <section>
      <Avatar url={userInfo?.avatar ? userInfo.avatar : random_avatar} />
      <div>
        <h4>User</h4>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'link-active' : '')}
              to={`/user/${userInfo?.uid}/home`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'link-active' : '')}
              to={`/user/${userInfo?.uid}/edit`}
            >
              Editar
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'link-active' : '')}
              to={`/user/${userInfo?.uid}/orders`}
            >
              Pedidos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? 'link-active' : '')}
              to={`/user/${userInfo?.uid}/favorites`}
            >
              Favoritos
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default UserMenu;
