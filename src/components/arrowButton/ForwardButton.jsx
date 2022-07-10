import React from "react";
import { NavLink } from "react-router-dom";
import s from "./ArrowButton.module.scss";

const ForwardButton = ({ onClick, to="" }) => {
  return (
    <NavLink to={to} className={s.button} onClick={onClick}>
      <div className={s.img}></div>
    </NavLink>
  );
};

export default ForwardButton;