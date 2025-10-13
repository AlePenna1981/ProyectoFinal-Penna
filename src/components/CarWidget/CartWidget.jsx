import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContex } from "../../context/CartContext";
export const CartWidget = () => {
  //
  const { totalItems } = useContext(CartContex);

  return (
    <div>
      <FaShoppingCart size={50} style={{ color: "black" }} />
      <strong style={{ color: "black" }}>{totalItems}</strong>
    </div>
  );
};
