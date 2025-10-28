import { useContext } from "react";
import { CartContex } from "../../context/CartContext";
import { createOrder } from "../../data/firebase";
import FormCheckout from "./FormCheckout";

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
    <div>
      {cart.length === 0 ? (
        <h3>Tu carrito esta vacio</h3>
      ) : (
        <>
          {cart.map((p) => (
            <div key={p.id}>
              <h2>Brand: {p.brand} </h2>
              <img src={p.img} alt="" style={{ width: 250 }} />
              <h3>Cantidad: {p.quantity}</h3>
              <h3>Subtotal: {p.subTotal}</h3>
              <button
                className="btn btn-primary m-1"
                onClick={() => removeItem(p.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
          <h2>Total de tu compra: {total}</h2>
          <button className="btn btn-primary m-1" onClick={() => clearCart()}>
            Vaciar Carrito
          </button>
          <FormCheckout handleChekout={handleChekout} />
        </>
      )}
    </div>
  );
};

export default Crat;
