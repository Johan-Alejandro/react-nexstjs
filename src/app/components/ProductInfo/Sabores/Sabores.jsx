import classes from "./StyleSabores.module.css";
const Sabores = () => {
  return (
    <>
      <div className={classes.sabores}>
        <h5 className={classes.title}>Sabor:</h5>
        <select
          className={classes.select}
          name="sabores"
          id="sabores"
          defaultValue=""
        >
          <option value="" disabled>
            Escoge un sabor
          </option>
          <option value="Vainilla">Vainilla</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Fresas">Fresas</option>
        </select>
      </div>
    </>
  );
};
export default Sabores;
