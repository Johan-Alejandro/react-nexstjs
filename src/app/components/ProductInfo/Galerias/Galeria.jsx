import Imagen1 from "../../../Images/imagenprincipal.png";
import Image from "next/legacy/image";
import classes from "./StyleGaleria.module.css";
const Galeria = () => {
  return (
    <div className={classes.container}>
      <div className={classes.principal}>
        <Image src={Imagen1}></Image>
      </div>
      <div className={classes.slider}>
        <Image src={Imagen1}></Image>
        <Image src={Imagen1}></Image>
        <Image src={Imagen1}></Image>
      </div>
    </div>
  );
};
export default Galeria;
