import Avatar from './Avatar';
import random_avatar from '../assets/21.jpg';
import { Link } from 'react-router-dom';

function UserMenu() {
  return (
    <section>
      {/* component avatar */}

      <Avatar url={random_avatar} />
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
