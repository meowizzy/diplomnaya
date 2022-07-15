import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ForwardButton from '../../../../components/arrowButton/ForwardButton';
import s from "../../defaultEvents/DefaultEvents.module.scss"
import { Card } from '../Card';
import { CreateEvents } from '../CreateEvents';

export const AllEvents = () => {
  const [active, setActive] = useState(false)

  const dispatch = useDispatch()

  const events = useSelector(state=>state.event)

  console.log(events)

  return (
    <>
      <CreateEvents active={active} setActive={setActive} />

      <div className={s.box_first}>
        <p className={s.text}>
          Чемпионат Кыргызской Респубики по традиционному ушу
        </p>
        <p className={s.text_date}>29.06.2022г. - 30.06.2022г.</p>
        <p className={s.text_title}>Дворец спорта им. К. Кожомкула</p>
        <p>Информация о мероприятии</p>
        <div className={s.arrow_button}>
          <ForwardButton />
        </div>
      </div>

      <Card />
      <Card />
      <Card />
    </>
  );
}
