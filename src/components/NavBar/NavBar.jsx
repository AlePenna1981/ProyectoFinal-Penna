import styles from "./NavBar.module.css";
import { CartWidget } from "../CarWidget/CartWidget";
import { NavLink } from "react-router";
const NavBar = () => {
  //
  return (
    <div className={styles.cajaNavBar}>
      <h2 className={styles.titulo}>The Bass Shop</h2>
      <ul className={styles.btnNavegacion}>
        <NavLink to="/">
          <li className={styles.links}>inicio</li>
        </NavLink>
        <NavLink to="type/jb">
          <li>Jazz Bass</li>
        </NavLink>
        <NavLink to="type/pb">
          <li>Precision Bass </li>
        </NavLink>
      </ul>
      <NavLink to="/cart" style={{ textDecoration: "none" }}>
        <CartWidget />
      </NavLink>
    </div>
  );
};

export default NavBar;
