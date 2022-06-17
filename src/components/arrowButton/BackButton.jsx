import React from "react";
import s from "./ArrowButton.module.scss";

const BackButton = ({ type, disabled,onClick }) => {
  return (
    <button disabled={disabled} className={s.button_back} type={type} onClick={onClick}>
      <div className={s.img_2}></div>
    </button>
  );
};

export default BackButton;