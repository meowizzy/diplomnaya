import React from "react";
import s from "./Button.module.scss";

const Button = ({ disabled, text = "", type }) => {
  return (
    <button disabled={disabled} className={s.button} type={type}>
      {text}
    </button>
  );
};

export default Button;
