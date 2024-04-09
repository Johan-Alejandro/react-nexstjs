import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import classes from "./TopMenuButtons.module.css";

const TopMenuButtons = () => {
  const buttons = [
    {
      icon: <PersonIcon className={classes.icon} />,
      title: "Inicia Sesión",
      href: "/iniciar-sesion",
    },
    {
      icon: <LocalShippingOutlinedIcon className={classes.icon} />,
      title: "Seguimiento",
      href: "/seguimiento",
    },
    {
      icon: <ShoppingBagOutlinedIcon className={classes.icon} />,
      title: "Tiendas",
      href: "/tiendas",
    },
  ];

  return (
    <div className={classes.btns1}>
      {buttons.map((button, index) => (
        <React.Fragment key={index}>
          <a href={button.href}>
            {button.icon}
            <span>{button.title}</span>
          </a>
          <span className={classes.btnSeparator}>|</span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TopMenuButtons;
