import React from "react";
import s from "./Button.module.scss";

const Button = ({ disabled, text = "", type, width, margin }) => {
  return (
    <button disabled={disabled} className={s.button} type={type} style={{width:width, margin:margin}}>
      {text}
    </button>
  );
};

export default Button;
