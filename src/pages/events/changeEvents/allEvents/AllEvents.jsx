import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import BackButton from '../../../../components/arrowButton/BackButton';
import ForwardButton from '../../../../components/arrowButton/ForwardButton';
import Button from '../../../../components/button/Button';
import { Delete } from '../../../../components/delete/Delete';
import s from "../../defaultEvents/DefaultEvents.module.scss"
import ss from '../../changeEvents/ChangeEvents.module.scss'
import { Card } from '../Card';
import { ChangeForm } from '../ChangeForm';
import { CreateEvents } from '../CreateEvents';

export const AllEvents = () => {
  const [active, setActive] = useState(false)
  const events = useSelector(state=>state.event.event)

  // console.log(events)
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
      <CreateEvents active={active} setActive={setActive} />

      {change === false ? (
        <ChangeForm onClick={foggle} />
      ) : card === true ? ( 
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
      <div className={ss.footer}>
        <span onClick={foggle} className={ss.span}>
          <Button text="ИЗМЕНИТЬ ДАННЫЕ" margin="auto auto" />
        </span>
        <span className={ss.delete}>
          <Delete text={"Вы уверены, что хотите удалить данное мероприятие?"}/>
        </span>
      </div>
    </div>
      )}
      {events.map((el, index) => (
        <Card
        name={el.name}
        note={el.note}
          key={index}
          finish_date={el.finish_datetime}
          max_age={el.age_groups[0].max_age}
          min_age={el.age_groups[0].min_age}
          max_age_second={el.age_groups[1].max_age}
          min_age_second={el.age_groups[1].min_age}
          place={el.place}
          referee={el.lead_judge.name}
          secretary={el.assistant.name}
          start_date={el.start_datetime}
        />
      ))}
    </>
  );
}
