import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apis from '../api';
import apiItem from '../api/item';
import AdminCreateNewItem from '../components/AdminCreateNewItem';
import AdminTableItems from '../components/AdminTableItems';
import AdminTableUsers from '../components/AdminTableUsers';
import { UserContext } from '../context/UserContext';
import Button from '../form/Button';
import Input from '../form/Input';
import InputAdd from '../form/InputAdd';

function App() {
  const { user, userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const {
        data: { data },
      } = await apis.getAllUsers();
      if (isMounted) setUsers(data);
    })();
    return () => (isMounted = false);
  }, []);

  useEffect(() => {
    if (user) {
      (async () => {
        if (!userInfo.isAdmin) navigate('/');
      })();
    } else {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, userInfo]);

  return (
    <section>
      <h2>Admin</h2>

      <AdminCreateNewItem />

      <hr />

      <section>
        <h4>Todos os usuários</h4>
        <AdminTableUsers users={users} />
      </section>

      <hr />

      <section>
        <h4>Todos os produtos</h4>
        <AdminTableItems />
      </section>
    </section>
  );
}

export default App;
