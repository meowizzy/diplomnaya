import React from "react";
import s from "./Input.module.scss";
import registerStyles from "../../pages/register/Registr.module.scss";

const Input = ({
  placeholder,
  value,
  valueLabel,
  onChange,
  name,
  type,
  maxWidth,
  width,
  margin,
  minWidth,
  minHeight
}) => {

  return (
    <div className={s.input_container}>
      <label className={s.label}>{valueLabel}</label>
      <div className={s.gradient} style={{maxWidth:maxWidth, width:width, margin:margin, minWidth:minWidth, minHeight:minHeight}}>
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
