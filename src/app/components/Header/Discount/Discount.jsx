import classes from "./StyleDescuento.module.css";
import TopMenuButtons from "../TopMenu/TopMenuButtons";

const Discount = () => {
  return (
    <div className={classes.descuento}>
      <h5 className={classes.title}>15% OFF EN TODO CON EL CODIGO XX15 OFF</h5>
      <TopMenuButtons />
    </div>
  );
};
export default Discount;
