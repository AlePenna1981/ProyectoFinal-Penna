import { useEffect, useState } from "react";
import { getProduct } from "../../asyncMock";
import { useParams } from "react-router";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {
  //
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProduct(id).then((resp) => setItem(resp));
    console.log(typeof item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <h2>{item.brand}</h2>
      <img src={item.img} alt="" className="m-3 img-fluid w-100 p-1" />
      <h3>Descripcion: {item.description}</h3>
      <button className="btn btn-outline-success m-2">
        Cargar en mi carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;
