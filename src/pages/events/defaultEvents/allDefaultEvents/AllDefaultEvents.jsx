import React, { useState } from 'react'
import ForwardButton from '../../../../components/arrowButton/ForwardButton';
import s from "../DefaultEvents.module.scss"
import ss from "../../changeEvents/ChangeEvents.module.scss"
import { DefaultCard } from '../DefaultCard';
import { useSelector } from 'react-redux';
import BackButton from '../../../../components/arrowButton/BackButton';
import Button from '../../../../components/button/Button';
import { Delete } from '../../../../components/delete/Delete';

export const AllDefaultEvents = () => {
  const events = useSelector(state=>state.event.event)
  const [card, setCard] = useState(true);

  const toggle = () => {
    setCard(!card);
  };

  // console.log(events)
  return (
    <>
     {card === true ? ( 
      <div className={s.box_first}>
        <p className={s.text_card}>
          Чемпионат Кыргызской Респубики по традиционному ушу
        </p>
        <p className={s.text_date}>29.06.2022г. - 30.06.2022г.</p>
        <p className={s.text_title}>Дворец спорта им. К. Кожомкула</p>
        <p>Информация о мероприятии</p>
        <div className={s.arrow_button}>
          <ForwardButton onClick={toggle}/>
        </div>
      </div>
      ):(
      <div className={ss.box_start}>
        <BackButton onClick={toggle} />
      <div>
        <p className={s.text_card}>
          Чемпионат Кыргызской Респубики по традиционному ушу
        </p>
        <p className={s.text_date}>29.06.2022г. - 30.06.2022г.</p>
        <p className={s.text_title}>Дворец спорта им. К. Кожомкула</p>
        <p>Информация о мероприятии</p>
        <div className={s.info}>
          <p>Главный судья: Карина Белоусова</p>
          <p>Секретарь: Саша Белый</p>
          <p>Возрастная категория: с 5 до 8, с 16 до 20</p>
        </div>
        <p>Примечание</p>
        <p className={s.note}>
          Тренерам необходимо подать заявку до 20.06.2022г.
        </p>
      </div>
    </div>)}
        {events.map((el, index) => (
        <DefaultCard
        name={el.name}
        note={el.note}
          key={index}
          finish_date={el.finish_datetime}
          age={el.age_groups}
          place={el.place}
          referee={el.lead_judge?.name}
          secretary={el.assistant?.name}
          start_date={el.start_datetime}
        />
      ))}
    </>
  );
}
