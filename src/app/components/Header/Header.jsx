import Descuento from "../Desc/Descuento";
import NavBar from "../NavBar/Navbar";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <>
      <header className={classes.myheader}>
        <Descuento />
        <h1 className={classes.title}>BRAND</h1>
        <NavBar />
      </header>
    </>
  );
};
export default Header;
