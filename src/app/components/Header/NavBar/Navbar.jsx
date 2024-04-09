import classes from "./StyleNavBar.module.css";

const Navbar = () => {
  return (
    <div className={classes.menu1}>
      <a href="/shop-all">SHOP ALL</a>
      <a href="/best-seller">BEST SELLER</a>
      <a href="/proteinas">PROTEINAS</a>
      <a href="/suplementos">SUPLEMENTOS</a>
      <a href="/pre-entrenos">PRE ENTRENOS</a>
      <a href="/accesorios">ACESORIOS</a>
      <a href="/barras-y-snack">BARRAS Y SNACK</a>
    </div>
  );
};
export default Navbar;
