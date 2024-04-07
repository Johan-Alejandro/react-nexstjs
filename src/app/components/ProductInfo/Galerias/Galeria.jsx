import Imagen1 from "../../../Images/imagenprincipal.png";
import Image from "next/legacy/image";
import classes from "./StyleGaleria.module.css";
const Galeria = () => {
  return (
    <div className={classes.principal}>
      <figure>
        <Image src={Imagen1}></Image>
      </figure>
    </div>
  );
};
export default Galeria;
