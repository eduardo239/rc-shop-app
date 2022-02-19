import { Outlet } from 'react-router-dom';
import UserMenu from '../components/UserMenu';

function UserWrapper() {
  return (
    <section className="user-wrapper">
      <UserMenu />
      <Outlet />
    </section>
  );
}

export default UserWrapper;
