import React from "react";
import { useState } from "react";
import Button from "../button/Button";
import s from "./ThreeDot.module.scss";

export const ThreeDot = ({ disabled, type, onClick }) => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };
  return (
    <>
      <button
        disabled={disabled}
        className={s.button}
        type={type}
        onClick={toggle}
      >
        <div className={s.img}></div>
      </button>
    <div className={s.pos}>
      {state === true ? (
        <div className={s.cont}>
          <div className={s.content}>
            <Button
              width="200px"
              text="Редактировать"
              margin="0 0 20px"
              disabled
              color="black"
            />
            <Button
              width="200px"
              text="Удалить"
              margin="0 0"
              disabled
              color="black"
            />
          </div>
        </div>
      ) : (
        <></>
      )}
      </div>
    </>
  );
};
