import { useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { UserContext } from './context/UserContext';
import Main from './views/Main';
// import { auth } from './firebase/firebase';
import apis from './api';

function App() {
  const { user, setUser, setUserId, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        if (uid) setUser(user);
        setUserId(uid);
        window.localStorage.setItem('userId', uid);
      } else {
        signOut(auth)
          .then(() => {
            setUser(null);
          })
          .catch((err) => {
            console.error(err);
          })
          .finally(() => {
            window.localStorage.removeItem('userId');
          });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      (async () => {
        const {
          data: { data },
        } = await apis.getUserById(user.uid);
        setUserInfo(data);
      })();
    }
  }, [user, setUserInfo]);

  return (
    <section>
      <Main />
    </section>
  );
}

export default App;
