import Sabores from '../Sabores/Sabores';
import Select from '../Select/Select';
import Envio from '../Envio/Envio';
import classes from './StyleDescription.module.css';

/*
  FEEDBACK: Aquí crearía más componentes, ProductInfo, ProductPrice, ProductDescription,
  para que sea mas legible el código, podrías probar pasando props para que se demuestre
  mejor tu manejo de componentes, ejemplo:

  <ProductInfo
    brand="Brand"
    title="Whey Protein - Original"
  />
*/
const Description = () => {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <h5 className={classes.title}>Brand</h5>
        <h1 className={classes.product}>Whey Protein - Original</h1>
      </div>
      <div className={classes.price}>
        <p>
          <span className={classes.desc}>-5%</span>
          <span className={classes.pricefinish}>$68.390</span>
          <span className={classes.priceof}>$71.990</span>
        </p>
        <p className={classes.envios}>ENVIOS GRATIS STGO</p>
        <p className={classes.cod}>SKU 1588023425509</p>
      </div>
      <div className={classes.details}>
        <p className={classes.text}>
          Exclusiva fórmula proteica a base de suero de leche aislado e
          hidrolizado que ha sido científicamente diseñada para construir
          músculo magro libre de grasa, aumentar la fuerza y mejorar el
          rendimiento deportivo. Cada porción contiene 30 g de proteína y una
          matriz de aminoácidos de cadena ramificada, glutamina y creatina para
          acelerar el aumento de músculo y la fuerza.
        </p>
      </div>
      <Sabores />
      <Select />
      <Envio />
    </div>
  );
};

export default Description;
