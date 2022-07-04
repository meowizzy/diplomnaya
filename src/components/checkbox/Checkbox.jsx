import React from "react";
import s from "./Checkbox.module.scss";

export const Checkbox = ({ value, onClick, onChange, name }) => {
  return (
    <label>
      <input
        type="checkbox"
        className={s.custom_checkbox}
        value={value}
        onClick={onClick}
        name={name}
        onChange={onChange}
      />
      <span></span>
    </label>
  );
};
