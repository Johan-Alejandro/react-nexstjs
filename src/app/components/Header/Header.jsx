import Discount from './Discount/Discount';
import NavBar from './NavBar/Navbar';
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={classes.headerContainer}>
        {/*
          FEEDBACK: Este componente se llama Discount pero no es un componente que muestra solo
          un descuento, si no que unos botones secundarios como login, seguimiento, tiendas, etc.,
          En general hay que ir mejorando el naming que le asignas a los componentes, imagina que
          tu código lo veras en 1 año más o que otro desarrollador deberá verlo y trabajar en él,
          la palabra "Discount" no le serviría para saber a que componente te refieres, hay que ser
          más descriptivo y claro, yo usaría algo como "HeaderTopbar", "Topbar", etc.
        */}
        <Discount />

        <h1 className={classes.title}>
          {/*
            FEEDBACK: Si vas a usar variables de ambiente sugiero dejar un archivo `.env.example`
            con las variables que necesita tu proyecto para que funcione y en este caso, especificar
            ese detalle en el README.md o dejar un valor por defecto, si no me poreguntaré porque
            no aparece el logo de la empresa https://imgur.com/MhNJR9n
          */}
          {process.env.NEXT_PUBLIC_COMPANY_NAME}
        </h1>

        <NavBar className={classes.navBarContainer} />
      </header>
    </>
  );
};

export default Header;
