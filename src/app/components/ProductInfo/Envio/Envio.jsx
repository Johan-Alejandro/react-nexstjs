import classes from "./StyleEnvio.module.css";
import Buttom from "../Entrega/Buttom";
const Envio = () => {
  return (
    <>
      <div className={classes.entrega}>
        <h5 className={classes.title}>Tipo de Entrega:</h5>
        <Buttom />
      </div>
    </>
  );
};
export default Envio;
