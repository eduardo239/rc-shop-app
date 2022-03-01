import { useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { UserContext } from './context/UserContext';
import Main from './views/Main';
// import { auth } from './firebase/firebase';
import apis from './api';
import Footer from './components/Footer';

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
    <section className="flex flex-column mh-100vh">
      <Main />
      <Footer />
    </section>
  );
}

export default App;
