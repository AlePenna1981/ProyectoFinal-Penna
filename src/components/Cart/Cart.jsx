import { useContext } from "react";
import { CartContex } from "../../context/CartContext";
const Crat = () => {
  const { cart, removeItem, clearCart, total } = useContext(CartContex);
  console.log(cart);

  return (
    <div>
      {cart.map((p) => (
        <div key={p.id}>
          <h2>Brand: {p.brand} </h2>
          <h3>Cantidad: {p.quantity}</h3>
          <h3>Subtotal: {p.subTotal}</h3>
          <button className="btn btn-primary" onClick={() => removeItem(p.id)}>
            Eliminar
          </button>
        </div>
      ))}
      <h2>Total de tu compra: {total}</h2>
      <button className="btn btn-primary" onClick={() => clearCart()}>
        Vaciar Carrito
      </button>
    </div>
  );
};

export default Crat;
