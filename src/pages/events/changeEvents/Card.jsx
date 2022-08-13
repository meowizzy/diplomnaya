import React from "react";
import { useState } from "react";
import BackButton from "../../../components/arrowButton/BackButton";
import ForwardButton from "../../../components/arrowButton/ForwardButton";
import Button from "../../../components/button/Button";
import { Delete } from "../../../components/delete/Delete";
import SuccessModal from "../../../components/modals/SuccessModal";
import { deleteEvent, getEvent } from "../../../redux/slices/eventSlice";
import s from ".././defaultEvents/DefaultEvents.module.scss";
import ss from "./ChangeEvents.module.scss";
import { ChangeForm } from "./ChangeForm";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

export const Card = ({
  note,
  name,
  start_date,
  finish_date,
  place,
  referee,
  secretary,
  age,
  id,
  refereeId,
  secretaryId
}) => {
  const [card, setCard] = useState(true);

  const toggle = () => {
    setCard(!card);
  };
const dispatch = useDispatch()
  const status = useSelector(state=>state.event.deleteStatus)

  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const handleOpenSuccessModal = () => {  
    setOpenSuccessModal(true)
    dispatch(getEvent())
  };
  const handleCloseSuccessModal = () => setOpenSuccessModal(false);

  const [change, setChange] = useState(true);

  const foggle = () => {
    setChange(!change);
  };
  return (
    <>
      {change === false ? (
        <ChangeForm
          onClick={foggle}
          assistant={secretary}
          finish_datetime={finish_date}
          lead_judge={referee}
          lead_judgeId={refereeId}
          assistantId={secretaryId}
          age_groupe={age}
          name={name}
          note={note}
          place={place}
          start_datetime={start_date}
          id={id}
        />
      ) : card === true ? (
        <div className={s.box}>
          <p className={s.text_card}>{name}</p>
          <p className={s.text_date}>
            {start_date}. - {finish_date}.
          </p>
          <p className={s.text_title}>{place}</p>
          <div className={s.arrow_button} onClick={toggle}>
            <ForwardButton />
          </div>
        </div>
      ) : (
        <div className={ss.box}>
          <BackButton onClick={toggle} />

          <div>
            <p className={s.text_card}>{name}</p>
            <p className={s.text_date}>
              {start_date} - {finish_date}.
            </p>
            <p className={s.text_title}>{place}</p>
            <p>Информация о мероприятии</p>
            <div className={s.info}>
              <p>Главный судья: {referee}</p>
              <p>Секретарь: {secretary}</p>

              <span>Возрастная категория:{' '}</span>
              {age.map((el, index)=>(
              <span key={index}>
                с {el.min_age} до {el.max_age},
              </span>
              ))}
            </div>
            <p>Примечание</p>
            <p className={s.note}>{note}</p>
          </div>
          <div className={ss.footer}>
            <span onClick={foggle} className={ss.span}>
              <Button text="ИЗМЕНИТЬ ДАННЫЕ" margin="auto auto" />
            </span>
            <span className={ss.delete}>
              <Delete
                text={"Вы уверены, что хотите удалить данное мероприятие?"}
                take={deleteEvent}
                id={id}
                open={handleOpenSuccessModal}
                status={status}
                back={toggle}
              />
            </span>
          </div>
        </div>
        
      )}
      {openSuccessModal && (
        <SuccessModal
          open={openSuccessModal}
          handleClose={handleCloseSuccessModal}
          title="Вы успешно удалили данное мероприятие!"
        />
      )}
    </>
  );
};
