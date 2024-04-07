import Grid from "@mui/material/Grid";
import Breacrumb from "./Breacrumb/Breacrumb";
import Galeria from "./Galerias/Galeria";
import Description from "./Description/Description";
import classes from "./StyleProductInfo.module.css";
const ProductInfo = () => {
  return (
    <>
      <Grid className={classes.principal} container spacing={2}>
        <Grid className={classes.galeria} item xs={12} md={6}>
          <Breacrumb />
          <Galeria />
        </Grid>
        <Grid item xs={12} md={6}>
          <Description />
        </Grid>
      </Grid>
    </>
  );
};
export default ProductInfo;
