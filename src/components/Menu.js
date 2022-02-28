import { NavLink, useNavigate } from 'react-router-dom';
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
  MdOutlineWbSunny,
  MdOutlineBedtime,
} from 'react-icons/md';
import { ItemContext } from '../context/ItemContext';

function Menu() {
  const { user, setUser, setUserInfo } = useContext(UserContext);
  const { setSearchResults } = useContext(ItemContext);

  const [term, setTerm] = useState('');
  const [theme, setTheme] = useState('dark');

  const navigate = useNavigate();
  const auth = getAuth();

  const logout = () => {
    console.log('logout');
    signOut(auth)
      .then(() => {
        setUser(null);
        setUserInfo(null);
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
      const response = await apiItem.getItemsByTerm(x);
      setSearchResults(response.data.data);
    } else {
      setSearchResults([]);
    }
  };

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // 42.5
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div
            className="flex flex-justify-between flex-align-center"
            style={{ height: '42.5px' }}
          >
            <ul className="menu">
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? 'link-active' : ''
                  }
                  to="/"
                >
                  <MdOutlineHouse />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? 'link-active' : ''
                  }
                  to="/cart/items"
                >
                  <MdShoppingCart />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? 'link-active' : ''
                  }
                  to="/admin"
                >
                  <MdOutlineAdminPanelSettings />
                </NavLink>
              </li>
            </ul>

            <Search
              value={term}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Nome do produto ..."
            />

            <ul className="menu">
              {!user && (
                <>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? 'link-active' : ''
                      }
                      to="/signin"
                    >
                      <MdOutlineAssignmentInd />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? 'link-active' : ''
                      }
                      to="/signup"
                    >
                      <MdOutlineAssignment />
                    </NavLink>
                  </li>
                </>
              )}
              {user && (
                <>
                  <li>
                    <NavLink to="#" onClick={handleTheme}>
                      {theme === 'dark' ? (
                        <MdOutlineBedtime />
                      ) : (
                        <MdOutlineWbSunny />
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? 'link-active' : ''
                      }
                      to={`/user/${user.uid}/home`}
                    >
                      <MdFace />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#" onClick={logout}>
                      <MdOutlineSensorDoor />
                    </NavLink>
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
