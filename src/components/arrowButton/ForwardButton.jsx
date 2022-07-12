import React from "react";
import { NavLink } from "react-router-dom";
import s from "./ArrowButton.module.scss";

const ForwardButton = ({ onClick, to="", position }) => {
  return (
    <NavLink style={{position: position}} to={to} className={s.button} onClick={onClick}>
      <div className={s.img}></div>
    </NavLink>
  );
};

export default ForwardButton;