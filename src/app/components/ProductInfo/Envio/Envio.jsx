import classes from "./StyleEnvio.module.css";
const Envio = () => {
  return (
    <div className={classes.controls}>
      <button>-</button>
      <input type="Number" />
      <button>+</button>
      <button className={classes.add}>Agregar Al Carrito</button>
    </div>
  );
};
export default Envio;
