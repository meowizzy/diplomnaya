import React from "react";
import s from "./Input.module.scss";

const Input = ({ placeholder, value }) => {
  return (
    <div className={s.input_container}>
      <label className={s.label}>{value}</label>
      <input className={s.input} placeholder={placeholder} />
    </div>
  );
};

export default Input;
