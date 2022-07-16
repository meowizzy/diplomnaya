import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import BackButton from "../../../components/arrowButton/BackButton";
import ForwardButton from "../../../components/arrowButton/ForwardButton";
import ArrowButton from "../../../components/arrowButton/ForwardButton";
import s from ".././defaultEvents/DefaultEvents.module.scss";
import ss from "../changeEvents/ChangeEvents.module.scss";

export const DefaultCard = ({note,
  name,
  start_date,
  finish_date,
  place,
  referee,
  secretary,
  min_age,
  max_age,
  max_age_second,
  min_age_second,
 }) => {
  const [card, setCard] = useState(true);

  const toggle = () => {
    setCard(!card);
  };
  

  return (
    <>
      {card === true ? (
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
              <p>
                Возрастная категория: с {min_age} до {max_age}, с{" "}
                {min_age_second} до {max_age_second}
              </p>
            </div>
            <p>Примечание</p>
            <p className={s.note}>{note}</p>
          </div>
        </div>
      )}
    </>
  );
};
