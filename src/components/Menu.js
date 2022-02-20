import { Link } from 'react-router-dom';

function Menu() {
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
              <li>
                <Link to="/user/1">User</Link>
              </li>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
