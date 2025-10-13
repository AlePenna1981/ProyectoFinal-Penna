import styles from "./Item.module.css";
import { Link } from "react-router";
const Item = ({ id, brand, img }) => {
  return (
    <div className={styles.productContainer}>
      <h3>Producto: {brand}</h3>
      <img src={img} alt="" />
      <Link to={`/item/${id}`}>
        <button className="btn btn-primary">Info del Producto</button>
      </Link>
    </div>
  );
};

export default Item;
