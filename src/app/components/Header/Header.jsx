import Discount from "./Discount/Discount";
import NavBar from "./NavBar/Navbar";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.headerContainer}>
        <Discount />
        <h1 className={classes.title}>
          {process.env.NEXT_PUBLIC_COMPANY_NAME}
        </h1>
        <NavBar className={classes.navBarContainer} />
      </header>
    </>
  );
};

export default Header;
