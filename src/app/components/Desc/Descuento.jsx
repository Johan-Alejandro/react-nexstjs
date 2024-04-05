import PersonIcon from "@mui/icons-material/Person";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import classes from "./StyleDescuento.module.css";
const Descuento = () => {
  return (
    <div className={classes.descuento}>
      <h5 className={classes.title}>15% OFF EN TODO CON EL CODIGO XX15 OFF</h5>
      <div className={classes.btns1}>
        <a href="/inicia-sesion">
          <PersonIcon /> Inicia Sesion |
        </a>

        <a href="/seguimiento">
          <LocalShippingOutlinedIcon /> Seguimiento |
        </a>

        <a href="/tiendas">
          <ShoppingBagOutlinedIcon /> Tiendas |
        </a>
      </div>
    </div>
  );
};
export default Descuento;
