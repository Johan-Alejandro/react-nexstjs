import classes from "./StyleButtom.module.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
const Buttom = () => {
  return (
    <div>
      <button>
        <LocalShippingIcon />
        entrega a domicilio
        <input className={classes.select} type="checkbox" name="" id="" />
        <span class="custom-checkbox"></span>
      </button>
    </div>
  );
};
export default Buttom;
