import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Search from './Search';
import apiItem from '../api/item';
import {
  MdFace,
  MdOutlineHouse,
  MdShoppingCart,
  MdOutlineAdminPanelSettings,
  MdOutlineAssignment,
  MdOutlineAssignmentInd,
  MdOutlineSensorDoor,
  MdOutlineMenu,
  MdOutlineWbSunny,
  MdOutlineBedtime,
} from 'react-icons/md';
import { ItemContext } from '../context/ItemContext';

function Menu() {
  const [term, setTerm] = useState('');
  const [theme, setTheme] = useState('dark');
  const { user, setUser } = useContext(UserContext);
  const { setSearchResults } = useContext(ItemContext);

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
      setSearchResults(response.data.data);

      // set data to context
    } else {
      setSearchResults([]);
    }
  };

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="justify-between align-items-center">
            <ul className="menu">
              <li>
                <Link to="/">
                  <MdOutlineHouse />
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <MdShoppingCart />
                </Link>
              </li>
              <li>
                <Link to="/admin">
                  <MdOutlineAdminPanelSettings />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <MdOutlineMenu />
                </Link>
              </li>
            </ul>

            {user && (
              <Search
                value={term}
                onChange={(e) => handleSearch(e.target.value)}
              />
            )}
            <ul className="menu">
              {!user && (
                <>
                  <li>
                    <Link to="/signin">
                      <MdOutlineAssignmentInd />
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup">
                      <MdOutlineAssignment />
                    </Link>
                  </li>
                </>
              )}
              {user && (
                <>
                  <li>
                    <Link to="#" onClick={handleTheme}>
                      {theme === 'dark' ? (
                        <MdOutlineBedtime />
                      ) : (
                        <MdOutlineWbSunny />
                      )}
                    </Link>
                  </li>
                  <li>
                    <Link to={`/user/${user.uid}`}>
                      <MdFace />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={logout}>
                      <MdOutlineSensorDoor />
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
