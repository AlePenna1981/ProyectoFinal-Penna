import { useEffect, useState } from "react";
import { getProduct } from "../../asyncMock";
import { useParams } from "react-router";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./ItemDetailContainer.module.css";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  //
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProduct(id).then((resp) => setItem(resp));
  }, [id]);

  if (!item) {
    return (
      <p>
        Cargando producto...
        <AiOutlineLoading3Quarters className={styles.spin} />
      </p>
    );
  }

  return (
    <div>
      <ItemDetail {...item} />
    </div>
  );
};

export default ItemDetailContainer;
