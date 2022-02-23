import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Search from './Search';
import apiItem from '../api/item';

function Menu() {
  const [term, setTerm] = useState('');
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

  const handleSearch = async (x) => {
    setTerm(x);
    if (x.length > 2) {
      // fetch data from api
      const response = await apiItem.getItemsByTerm(x);

      // set data to context
    }
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
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
            <Search
              value={term}
              onChange={(e) => handleSearch(e.target.value)}
            />
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
