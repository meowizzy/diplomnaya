import React from "react";
import { NavLink } from "react-router-dom";
import s from "./ArrowButton.module.scss";

const BackButton = ({ onClick, to="" }) => {
  return (
    <NavLink to={to} className={s.button_back} onClick={onClick}>
      <div className={s.img_2}></div>
    </NavLink>
  );
};

export default BackButton;