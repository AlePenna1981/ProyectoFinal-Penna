import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>
        <button onClick={decrement} className="btn btn-primary mx-3">
          -
        </button>
        <strong>{count}</strong>
        <button onClick={increment} className="btn btn-primary mx-3">
          +
        </button>
      </div>
      <button onClick={() => onAdd(count)} className="btn btn-primary mt-2">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
