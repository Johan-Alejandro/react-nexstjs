import { useState } from "react";
import classes from "./StyleSelect.module.css";

const Select = () => {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={classes.controls}>
      <button onClick={decreaseQuantity}>-</button>
      <input type="number" value={quantity} readOnly />
      <button onClick={increaseQuantity}>+</button>
      <button className={classes.add}>Agregar Al Carrito</button>
    </div>
  );
};

export default Select;
