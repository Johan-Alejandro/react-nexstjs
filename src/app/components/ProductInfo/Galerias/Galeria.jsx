import imagen1 from "../../images/principal.png";
import classes from "./StyleGaleria.module.css";
const Galeria = () => {
  return (
    <div className={classes.principal}>
      <img className={classes.img1} src={imagen1} alt="Imagen Principal" />
    </div>
  );
};
export default Galeria;
