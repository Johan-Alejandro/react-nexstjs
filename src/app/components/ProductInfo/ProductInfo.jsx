import Grid from "@mui/material/Grid";
import Breacrumb from "./Breacrumb/Breacrumb";
import Galeria from "./Galerias/Galeria";
import Description from "./Description/Description";
const ProductInfo = () => {
  return (
    <>
      <Grid container marginTop={5} spacing={2}>
        <Grid item xs={6}>
          <Breacrumb />
          <Galeria />
        </Grid>
        <Grid item xs={6}>
          <Description />
        </Grid>
      </Grid>
    </>
  );
};
export default ProductInfo;
