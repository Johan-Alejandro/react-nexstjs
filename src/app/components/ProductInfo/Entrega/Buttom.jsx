import classes from "./StyleButtom.module.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
const Buttom = () => {
  return (
    <div>
      <button>
        entrega a domicilio
        <input className={classes.select} type="checkbox" name="" id="" />
      </button>
    </div>
  );
};
export default Buttom;
