import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContex } from "../../context/CartContext";
export const CartWidget = () => {
  //
  const { totalItems } = useContext(CartContex);

  return (
    <div>
      <FaShoppingCart size={50} style={{ color: "white" }} />
      <strong style={{ color: "white", margin: 5 }}>{totalItems}</strong>
    </div>
  );
};
