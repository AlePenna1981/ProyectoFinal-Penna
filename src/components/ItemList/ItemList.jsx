import styles from "./ItemList.module.css";
import Item from "../Item/Item";
const ItemList = ({ productos }) => {
  //
  return (
    <div className={styles.itemsContainer}>
      {productos.map((producto) => (
        <Item key={producto.id} {...producto} />
      ))}
    </div>
  );
};

export default ItemList;
