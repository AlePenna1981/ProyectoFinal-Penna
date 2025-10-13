import { createContext, useEffect, useState } from "react";

export const CartContex = createContext(null);

export const CartContexProvider = ({ children }) => {
  //
  const [totalItems, setTotalItems] = useState(0);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const cartCopy = [...cart];
    const index = cartCopy.findIndex((product) => product.id === item.id);
    if (index != -1) {
      cartCopy[index].quantity = cartCopy[index].quantity + quantity;
      cartCopy[index].subTotal =
        cartCopy[index].price * cartCopy[index].quantity;
      setCart(cartCopy);
    } else {
      const newItem = { ...item, quantity, subTotal: item.price * quantity };
      setCart([...cart, newItem]);
      console.log(cart);
    }
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleTotalItems = () => {
    const newTotalItems = cart.reduce((acu, item) => acu + item.quantity, 0);
    const newTotal = cart.reduce(
      (acu, item) => acu + item.price * item.quantity,
      0
    );
    setTotalItems(newTotalItems);
    setTotal(newTotal);
  };

  useEffect(() => {
    handleTotalItems();
  }, [cart]);

  const objetValues = {
    cart,
    total,
    totalItems,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContex.Provider value={objetValues}>{children}</CartContex.Provider>
  );
};
