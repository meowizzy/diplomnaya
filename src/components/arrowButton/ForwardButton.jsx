import React from "react";
import s from "./ArrowButton.module.scss";

const ForwardButton = ({ type, disabled, onClick }) => {
  return (
    <button disabled={disabled} className={s.button} type={type} onClick={onClick}>
      <div className={s.img}></div>
    </button>
  );
};

export default ForwardButton;