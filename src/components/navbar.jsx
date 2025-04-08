import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Navbar = ({ dev = false, photography = false }) => {
  return (
    <nav>
      <div className="container inner-nav">
        <div className="logo-container">
          <img className="logo" src="./assets/images/logo.png" alt="logo" />
        </div>
        <ul className="navigation">
          <li>
            <Link className={dev ? 'active' : ''} to="/">
              Developer
            </Link>
          </li>
          <li>
            <Link className={photography ? 'active' : ''} to="/photography">
              Photography
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
