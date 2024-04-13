import Imagen1 from '../../../Images/imagenprincipal.png';
import Image from 'next/legacy/image';
import classes from './StyleGalery.module.css';

/*
  FEEDBACK: Aquí podrías usar alguna librería para crear la galería del producto, por ejemplo
  https://www.npmjs.com/package/react-image-gallery, en NPM puedes buscar "product gallery" y
  te van a salir muchas alternativas, algunas con demo y documentación de como implementarlas.
  Importante que sea para React y puedes fijarte en su popularidad, descargas, peso para elegir
  la que necesites para tu proyecto.
*/

const Galery = () => {
  return (
    <div className={classes.container}>
      <div className={classes.principal}>
        {/* FEEDBACK: Hay un warning que alerta de que falta la propiedad `alt` en el Image */}
        <Image
          src={Imagen1}
          layout="responsive"
          width={1000}
          height={600}
        ></Image>
      </div>
      <div className={classes.slider}>
        <Image src={Imagen1}></Image>
        <Image src={Imagen1}></Image>
        <Image src={Imagen1}></Image>
      </div>
    </div>
  );
};
export default Galery;
