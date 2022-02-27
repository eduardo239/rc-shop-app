import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function UserHome() {
  const { userInfo } = useContext(UserContext);

  return (
    <section>
      <div>
        <h3>User Home</h3>
      </div>

      <div>
        <h5>User: {userInfo?.username}</h5>

        <h5>Email: {userInfo?.email}</h5>
      </div>
    </section>
  );
}

export default UserHome;
