import Grid from "@mui/material/Grid";
import Breacrumb from "./Breacrumb/Breacrumb";
import Galeria from "./Galerias/Galeria";
const ProductInfo = () => {
  return (
    <>
      <Grid container marginTop={5} spacing={2}>
        <Grid item xs={6}>
          <Breacrumb />
          <Galeria />
        </Grid>
        <Grid item xs={6}>
          2
        </Grid>
      </Grid>
    </>
  );
};
export default ProductInfo;
