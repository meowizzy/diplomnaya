import React from "react";
import s from "./ArrowButton.module.scss";

const ArrowButton = ({rotate, type, disabled }) => {
  return (
    <button style={{transform: rotate}} disabled={disabled} className={s.button} type={type}>
      <div className={s.img}></div>
    </button>
  );
};

export default ArrowButton;
