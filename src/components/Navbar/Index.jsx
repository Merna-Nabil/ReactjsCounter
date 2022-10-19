import "./navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cartStore.cartCount);

  return (
    <div className="nav-wrapper ">
      <h3>logo</h3>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <Link to="/Cart">
          <li className="cart">cart{cartCount}</li>
        </Link>

        <Link to="/signup">
          <li className="cart">Singup</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
