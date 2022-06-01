import React from "react";
import s from "./Input.module.scss";

const Input = ({ placeholder, value, valueLabel, onChange, type, name }) => {

  return (
    <div className={s.input_container}>
      <label className={s.label}>{valueLabel}</label>
      <input className={s.input} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      name={name}
      type={type} 
      />
    </div>
  );
};

export default Input;
