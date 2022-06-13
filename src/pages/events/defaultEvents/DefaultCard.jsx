import React from "react";
import { useState } from "react";
import ForwardButton from "../../../components/arrowButton/ForwardButton";
import ArrowButton from "../../../components/arrowButton/ForwardButton";
import s from ".././defaultEvents/DefaultEvents.module.scss";
import ss from "../changeEvents/ChangeEvents.module.scss";

export const DefaultCard = ({ text }) => {
  const [card, setCard] = useState(true);

  const toggle = () => {
    setCard(!card);
  };

  return (
    <>
      {card === true ? (
        <div className={s.box}>
          <p className={s.text}>
            Чемпионат Кыргызской Респубики по традиционному ушу
          </p>
          <p className={s.text_date}>29.06.2022г. - 30.06.2022г.</p>
          <p className={s.text_title}>Дворец спорта им. К. Кожомкула</p>
          <div className={s.arrow_button} onClick={toggle}>
            <ForwardButton />
          </div>
        </div>
      ) : (
        <div className={ss.box}>
          <div onClick={toggle}>
            <p className={s.text}>
              Чемпионат Кыргызской Респубики по традиционному ушу
            </p>
            <p className={s.text_date}>29.06.2022г. - 30.06.2022г.</p>
            <p className={s.text_title}>Дворец спорта им. К. Кожомкула</p>
            <p>Информация о мероприятии</p>
            <div className={s.info}>
              <p>Главный судья: Белоусова Карина</p>
              <p>Секретарь: Елена Малышева</p>
              <p>Возрастная категория: с 9 до 15, с 16 до 20</p>
            </div>
            <p>Примечание</p>
            <p className={s.note}>
              Тренерам необходимо подать заявку до 20.06.2022г.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
