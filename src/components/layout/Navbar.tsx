import styles from "./Navbar.module.css";
import Logo from "../ui/Logo";
import CloseBtn from "../ui/CloseBtn";
import MenuBtn from "../ui/MenuBtn";
import CartBtn from "../ui/CartBtn";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { authContext } from "../../store/authContext";
import { cartContext } from "../../store/cartContext";

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { logout } = useContext(authContext);
  const { clearCart } = useContext(cartContext);
  const { pathname } = useLocation();

  function closeMenu() {
    setShow(false);
  }

  function showMenu() {
    setShow(true);
  }

  function logoutHandler() {
    logout();
    clearCart();
    navigate("/auth");
  }

  return (
    <nav className={styles.nav}>
      <Logo />
      <div className={styles.mobile}>
        {pathname !== "/cart" && <CartBtn />}
        <MenuBtn clickHandler={showMenu} />
      </div>
      <ul className={`${styles.links} ${show && styles.show}`}>
        <li className={styles.close}>
          <CloseBtn clickHandler={closeMenu} />
        </li>
        <li>
          <NavLink
            onClick={closeMenu}
            className={() =>
              pathname === "/" ? `${styles.link} ${styles.active}` : styles.link
            }
            to="/"
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeMenu}
            className={() =>
              pathname === "/products"
                ? `${styles.link} ${styles.active}`
                : styles.link
            }
            to="/products"
          >
            products
          </NavLink>
        </li>
        <li className={styles.cart}>{pathname !== "/cart" && <CartBtn />}</li>
        <li>
          <button onClick={logoutHandler} className={styles.logout}>
            Logout
          </button>
        </li>
      </ul>
      <div
        onClick={closeMenu}
        className={`${styles.overlay} ${show && styles.show}`}
      />
    </nav>
  );
};

export default Navbar;
