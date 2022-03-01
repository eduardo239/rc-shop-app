import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import apis from '../api';
import AdminCreateNewItem from '../components/AdminCreateNewItem';
import AdminTableItems from '../components/AdminTableItems';
import AdminTableUsers from '../components/AdminTableUsers';

function App() {
  const { user, userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [updateDisabled, setUpdateDisabled] = useState(true);

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

      <AdminCreateNewItem
        updateDisabled={updateDisabled}
        setUpdateDisabled={setUpdateDisabled}
      />

      <hr />

      <section>
        <h4>Todos os usuários</h4>
        <AdminTableUsers users={users} />
      </section>

      <hr />

      <section>
        <h4>Todos os produtos</h4>
        <AdminTableItems setUpdateDisabled={setUpdateDisabled} />
      </section>
    </section>
  );
}

export default App;
