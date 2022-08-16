import React from "react";
import { useState } from "react";
import s from "./ThreeDot.module.scss";
import ss from '../delete/Delete.module.scss'
import { Modal } from "../modal/Modal";
import ButtonForActiveChanges from "../buttonForActiveChanges/ButtonForActiveChanges";
import { useDispatch } from "react-redux";

export const ThreeDot = ({ disabled, type, onClick, text, take, id, status, open, back  }) => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch()
  const deleteThings = (id) =>{
    if(status!=="rejected"){
      dispatch(take(id))
      // open()
      setModalActive(false)
      back()
    }
  }
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
              {/* <div className={s.edit} onClick={onClick}>Редактировать</div>
              <div className={s.delete} onClick={() => setModalActive(true)}>Удалить</div> */}
              <ButtonForActiveChanges text="Редактировать" onClick={onClick} classname="button" margin="0 0 20px"/>
              <ButtonForActiveChanges text="Удалить" onClick={() => setModalActive(true)} classname="button"/>
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
          <p>{text}</p>
          <div className={ss.flex}>
            <ButtonForActiveChanges width="210px" text="ДА" onClick={()=>deleteThings(id)} classname="button"/>
            <ButtonForActiveChanges
              width="210px"
              text="НЕТ"
              onClick={() => setModalActive(false)}
              classname="button"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
