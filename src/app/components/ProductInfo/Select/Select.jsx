import classes from "./StyleSelect.module.css";
const Select = () => {
  return (
    <div className={classes.controls}>
      <button>-</button>
      <input type="Number" />
      <button>+</button>
      <button className={classes.add}>Agregar Al Carrito</button>
    </div>
  );
};
export default Select;
