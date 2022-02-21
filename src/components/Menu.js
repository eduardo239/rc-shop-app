import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Menu() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const auth = getAuth();

  const logout = () => {
    console.log('logout');
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        window.localStorage.removeItem('userId');
        return navigate('/');
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="justify-between">
            <ul className="menu">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/">All Items</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
            <ul className="menu">
              {!user && (
                <>
                  <li>
                    <Link to="/signin">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </>
              )}
              {user && (
                <>
                  <li>
                    <Link to="/user/1">User</Link>
                  </li>
                  <li>
                    <Link to="#" className="" onClick={logout}>
                      logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
