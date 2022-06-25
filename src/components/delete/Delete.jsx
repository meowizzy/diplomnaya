import React, { useState } from "react";
import Button from "../button/Button";
import { Modal } from "../modal/Modal";
import s from "./Delete.module.scss";

export const Delete = ({text}) => {
  const [modalActive, setModalActive] = useState(false);
  const [state, setState] = useState(true)
  const toggle = () =>{
    setState(!state)
  }
  return (
    <>
      <button className={s.delete} onClick={() => setModalActive(true)}>
        <div></div>
      </button>

      <Modal active={modalActive} setActive={setModalActive} width="530px" height="265px">
        <div className={s.cont}>
          <p>{text}</p>
          <div className={s.flex}>
            <Button width="210px" text="ДА" disabled={state} onClick={toggle}/>
            <Button width="210px" text="НЕТ" onClick={() => setModalActive(false)}/>
          </div>
        </div>
      </Modal>
    </>
  );
};
