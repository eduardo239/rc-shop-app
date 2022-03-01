import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { Outlet } from 'react-router-dom';
import apis from '../api';
import UserMenu from '../components/UserMenu';

function UserWrapper() {
  const { user, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    let isMounted = true;
    if (user) {
      (async () => {
        const {
          data: { data },
        } = await apis.getUserById(user.uid);

        if (isMounted) setUserInfo(data);
      })();
    }
    return () => (isMounted = false);
  }, [user, setUserInfo]);

  return (
    <section className="user-wrapper">
      <UserMenu />
      <Outlet />
    </section>
  );
}

export default UserWrapper;
