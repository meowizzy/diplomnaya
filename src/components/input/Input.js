import React from "react";
import s from "./Input.module.scss";

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
  minHeight,
    background,
}) => {

  // const [state, setState] = useState(false)

  // type === "password" ? setState(true) : setState(false)

  return (
    <div className={s.input_container}>
      <label className={s.label}>{valueLabel}</label>
      <div className={s.gradient} style={{ background: background ,maxWidth:maxWidth, width:width, margin:margin, minWidth:minWidth, minHeight:minHeight}}>
        <input
          className={s.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          type={type}
        />
          {/* {state && <div></div>}</input> */}
      </div>
    </div>
  );
};

export default Input;
