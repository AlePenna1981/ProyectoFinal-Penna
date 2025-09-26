import styles from "./NavBar.module.css";
import logo from "../../img/bassLogo.jpg";
import { CartWidget } from "../CarWidget/CartWidget";
import { Link } from "react-router";
const NavBar = () => {
  //
  return (
    <div className={styles.cajaNavBar}>
      <img className={styles.logo} src={logo} alt="" />
      <ul className={styles.btnNavegacion}>
        <Link to="/">
          <li>inicio</li>
        </Link>
        <Link to="type/jb">
          <li>Jazz Bass</li>
        </Link>
        <Link to="type/pb">
          <li>Precision Bass </li>
        </Link>
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default NavBar;
