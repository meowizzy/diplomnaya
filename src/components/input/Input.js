import React from "react";
import s from "./Input.module.scss";
import registerStyles from "../../pages/register/Registr.module.scss";

const Input = ({
    open,
    setOpen,
    placeholder,
    value,
    valueLabel,
    onChange,
    name,
    width,
    type,
}) => {
  const toggle = () => {
    setOpen(!open);
  };

  // const foggle = () => {
  //   setSecondOpen(!secondOpen);
  // };

  return (
    <div className={s.input_container}>
      <label className={s.label}>{valueLabel}</label>
      <div  style={{width:width}} className={s.gradient}>
        <input
          className={s.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          type={type}
        />
      </div>
    </div>
  );
};

export default Input;
