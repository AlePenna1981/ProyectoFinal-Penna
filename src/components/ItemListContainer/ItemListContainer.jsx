import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../data/firebase";
import styles from "./ItemListContainer.module.css";
import ItemList from "../ItemList/ItemList";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const { type } = useParams();

  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const asyncFunc = type ? getProductsByCategory : getProducts;

    asyncFunc(type)
      .then((resp) => setProductos(resp))
      .finally(() => setIsLoading(false));
  }, [type]);

  return (
    <>
      {isLoading ? (
        <h2 className={styles.loading}>
          Cargando Productos...{" "}
          <AiOutlineLoading3Quarters className={styles.spin} />
        </h2>
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
};

export default ItemListContainer;
