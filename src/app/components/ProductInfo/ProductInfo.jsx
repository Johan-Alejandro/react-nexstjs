'useClient';
import Grid from '@mui/material/Grid';
import Breacrumb from './Breacrumb/Breacrumb';
import Galery from './Galery/Galery';
import Description from './Description/Description';
import classes from './StyleProductInfo.module.css';
const ProductInfo = () => {
  /*
    FEEDBACK: Aquí también deberíamos usar https://mui.com/material-ui/react-container/ para determinar
    un ancho máximo del contenido y que no se estire al 100% de la pantalla
  */
  return (
    <>
      <Grid className={classes.principal} container spacing={2}>
        {/*
          FEEDBACK: Estas usando `classes.galery` pero esa clare no se declara en ningún lado, ojo con esto,
          según la configuración del proyecto te podría mostrar errores
        */}
        <Grid className={classes.galery} item xs={true} md={6}>
          <Breacrumb />
          <Galery />
        </Grid>
        <Grid item xs={12} md={6}>
          <Description />
        </Grid>
      </Grid>
    </>
  );
};
export default ProductInfo;
