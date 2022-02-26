import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserHome() {
  const { user, userInfo } = useContext(UserContext);

  return (
    <section>
      <div>
        <h3>User Home</h3>
      </div>

      <div>
        <h4>User</h4>
        <p>{userInfo.username}</p>

        <h4>Email</h4>
        <p>{userInfo.email}</p>
      </div>
    </section>
  );
}

export default UserHome;
