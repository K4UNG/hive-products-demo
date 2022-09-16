import styles from "./Navbar.module.css";
import Logo from "../ui/Logo";
import CloseBtn from "../ui/CloseBtn";
import MenuBtn from "../ui/MenuBtn";
import CartBtn from "../ui/CartBtn";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);

  function closeMenu() {
    setShow(false);
  }

  function showMenu() {
    setShow(true)
  }

  return (
    <nav className={styles.nav}>
      <Logo />
      <div className={styles.mobile}>
        <CartBtn />
        <MenuBtn clickHandler={showMenu} />
      </div>
      <ul className={`${styles.links} ${show && styles.show}`}>
        <li className={styles.close}>
          <CloseBtn clickHandler={closeMenu} />
        </li>
        <li>
          <NavLink onClick={closeMenu} className={styles.link} to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closeMenu} className={styles.link} to="/products">
            products
          </NavLink>
        </li>
        <li>
          <button className={styles.logout}>Logout</button>
        </li>
      </ul>
      <div onClick={closeMenu} className={`${styles.overlay} ${show && styles.show}`} />
    </nav>
  );
};

export default Navbar;
