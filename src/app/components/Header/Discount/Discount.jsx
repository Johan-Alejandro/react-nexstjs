import classes from './StyleDescuento.module.css';
import TopMenuButtons from '../TopMenu/TopMenuButtons';

const Discount = () => {
  return (
    /*
      FEEDBACK: Aqui deberías usar una grilla para estructurar los elementos y no usar margenes
      en pixeles entre ellos, si no te va a pasar que cuando el tamaño de la pantalla cambie se va
      a descuadrar https://imgur.com/ITRCoIO, aquí lo que se necesita es que el texto quede centrado
      y los botones a la derecha.

      Puedes usar https://mui.com/material-ui/react-grid/ con una grilla de 3 columnas con la
      primera columna vacía

      También debes usar un contenedor máximo, porque en pantallas grandes se va a estirar al 100%
      y ver de esta manera https://imgur.com/v9toTBb

      Para esto puedes usar un Container https://mui.com/material-ui/react-container/
    */
    <div className={classes.descuento}>
      <h5 className={classes.title}>15% OFF EN TODO CON EL CODIGO XX15 OFF</h5>
      <TopMenuButtons />
    </div>
  );
};
export default Discount;
