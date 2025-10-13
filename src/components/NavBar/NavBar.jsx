import styles from "./NavBar.module.css";
import logo from "../../img/bassLogo.jpg";
import { CartWidget } from "../CarWidget/CartWidget";
import { NavLink } from "react-router";
const NavBar = () => {
  //
  return (
    <div className={styles.cajaNavBar}>
      <img className={styles.logo} src={logo} alt="" />
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
