import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContex } from "../../context/CartContext";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ id, brand, img, description, price, stock }) => {
  //
  const { addItem } = useContext(CartContex);

  const onAdd = (quantity) => {
    const item = { id, price, brand, img };
    addItem(item, quantity);
  };

  return (
    <div className={styles.cajaItemDetail}>
      <h2>{brand}</h2>
      <img src={img} alt={brand} className="m-3 img-fluid p-5" />
      <h5>Descripción: {description}</h5>
      <h4>Precio: ${price}</h4>
      <h5>Stock: {stock}</h5>
      <ItemCount stock={stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
