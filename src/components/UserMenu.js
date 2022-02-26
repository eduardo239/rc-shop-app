import Avatar from './Avatar';
import random_avatar from '../assets/21.jpg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserMenu() {
  const { user, userInfo } = useContext(UserContext);
  return (
    <section>
      {/* component avatar */}

      <Avatar url={userInfo.avatar ? userInfo.avatar : random_avatar} />
      <div>
        <h4>User</h4>
        <ul>
          <li>
            <Link to="/user/234234234234">User</Link>
          </li>
          <li>
            <Link to="/user/234234234234/edit">User Edit</Link>
          </li>
          <li>
            <Link to="/user/234234234234/orders">User Orders</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default UserMenu;
