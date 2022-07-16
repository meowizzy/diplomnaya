import React from "react";
import { useState } from "react";
import BackButton from "../../../components/arrowButton/BackButton";
import ForwardButton from "../../../components/arrowButton/ForwardButton";
import Button from "../../../components/button/Button";
import { Delete } from "../../../components/delete/Delete";
import s from ".././defaultEvents/DefaultEvents.module.scss";
import ss from "./ChangeEvents.module.scss";
import { ChangeForm } from "./ChangeForm";

export const Card = ({ note,name,start_date,finish_date,place,referee,secretary,min_age,max_age,max_age_second,min_age_second }) => {
  const [card, setCard] = useState(true);

  const toggle = () => {
    setCard(!card);
  };

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
          max_age={max_age}
          max_age_second={max_age_second}
          min_age={min_age}
          min_age_second={min_age_second}
          name={name}
          note={note}
          place={place}
          start_datetime={start_date}
        />
      ) : card === true ? (
        <div className={s.box}>
          <p className={s.text_card}>
            {name}
          </p>
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
            <p className={s.text_card}>
              {name}
            </p>
            <p className={s.text_date}>
              {start_date} - {finish_date}.
            </p>
            <p className={s.text_title}>{place}</p>
            <p>Информация о мероприятии</p>
            <div className={s.info}>
              <p>Главный судья: {referee}</p>
              <p>Секретарь: {secretary}</p>
              <p>
                Возрастная категория: с {min_age} до {max_age}, с{" "}
                {min_age_second} до {max_age_second}
              </p>
            </div>
            <p>Примечание</p>
            <p className={s.note}>
              {note}
            </p>
          </div>
          <div className={ss.footer}>
            <span onClick={foggle} className={ss.span}>
              <Button text="ИЗМЕНИТЬ ДАННЫЕ" margin="auto auto" />
            </span>
            <span className={ss.delete}>
              <Delete
                text={"Вы уверены, что хотите удалить данное мероприятие?"}
              />
            </span>
          </div>
        </div>
      )}
    </>
  );
};
