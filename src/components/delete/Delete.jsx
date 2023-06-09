import React, { useState } from "react";
import ButtonForActiveChanges from "../buttonForActiveChanges/ButtonForActiveChanges";
import { Modal } from "../modal/Modal";
import s from "./Delete.module.scss";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router";

export const Delete = ({text, take, id, status, open, back}) => {
  const [modalActive, setModalActive] = useState(false);
  // const [state, setState] = useState(true)
  // const toggle = () =>{
  //   setState(!state)
  // }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const deleteThings = () =>{
    if(status!=="rejected"){
      dispatch(take({id, setModalActive}))
      open()
      // setModalActive(false)
      back()
    }
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
            <ButtonForActiveChanges classname="yes_button" width="210px" text="ДА" onClick={deleteThings} margin="0 0"/>
            <ButtonForActiveChanges classname="no_button" width="210px" text="НЕТ" onClick={() => setModalActive(false)} margin="0 0"/>
          </div>
        </div>
      </Modal>
    </>
  );
};
