import React from "react";
import { useState } from "react";
import Button from "../button/Button";
import { Delete } from "../delete/Delete";
import s from "./ThreeDot.module.scss";
import ss from '../delete/Delete.module.scss'
import { Modal } from "../modal/Modal";

export const ThreeDot = ({ disabled, type, onClick }) => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };
  const [modalActive, setModalActive] = useState(false);
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
              <div className={s.edit} onClick={onClick}>Редактировать</div>
              <div className={s.delete} onClick={() => setModalActive(true)}>удалить</div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        width="530px"
        height="265px"
      >
        <div className={ss.cont}>
          <p>Вы уверены, что хотите удалить данное мероприятие?</p>
          <div className={ss.flex}>
            <Button width="210px" text="ДА" disabled={state} onClick={toggle} />
            <Button
              width="210px"
              text="НЕТ"
              onClick={() => setModalActive(false)}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
