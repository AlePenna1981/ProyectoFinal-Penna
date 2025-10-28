import { useContext } from "react";
import { CartContex } from "../../context/CartContext";
import { createOrder } from "../../data/firebase";
import FormCheckout from "./FormCheckout";
import styles from "./Cart.module.css";

const Crat = () => {
  const { cart, removeItem, clearCart, total } = useContext(CartContex);

  async function handleChekout(formData) {
    console.log(`FormData:`, formData);

    const orderData = {
      buyer: formData,
      item: cart,
      price: total,
      date: new Date(),
    };

    const newOrder = await createOrder(orderData);
    alert(`Compra realizada con exito, tu id de compra es ${newOrder.id}`);
    clearCart();
  }

  console.log(cart);
  return (
    <div className={styles.cajaCart}>
      {cart.length === 0 ? (
        <h3>Tu carrito esta vacio</h3>
      ) : (
        <>
          {cart.map((p) => (
            <div key={p.id} className={styles.cajaItemCart}>
              <h3>Brand: {p.brand} </h3>
              <img src={p.img} alt="" />
              <h4>Cantidad: {p.quantity}</h4>
              <h4>Subtotal: {p.subTotal} u$d</h4>
              <button
                className="btn btn-primary m-2"
                onClick={() => removeItem(p.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
          <h2>Total de tu compra: {total} u$d</h2>
          <button className="btn btn-primary mb-4" onClick={() => clearCart()}>
            Vaciar Carrito
          </button>
          <FormCheckout handleChekout={handleChekout} />
        </>
      )}
    </div>
  );
};

export default Crat;
