import Imagen1 from "../../../Images/imagenprincipal.png";
import classes from "./StyleGaleria.module.css";
const Galeria = () => {
  return (
    <div className={classes.principal}>
      <img src={Imagen1} alt="imagen principal" />
    </div>
  );
};
export default Galeria;
