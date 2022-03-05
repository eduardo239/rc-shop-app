import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

function UserHome() {
  const { userInfo } = useContext(UserContext);

  return (
    <section className="user-section">
      <div>
        <h3>Perfil</h3>
      </div>

      <div>
        <h5>User: {userInfo?.username}</h5>
        <h5>Email: {userInfo?.email}</h5>
      </div>
    </section>
  );
}

export default UserHome;
