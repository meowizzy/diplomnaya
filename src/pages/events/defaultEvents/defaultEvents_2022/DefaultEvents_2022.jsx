import React, { useState } from 'react'
import ForwardButton from '../../../../components/arrowButton/ForwardButton'
import s from "../DefaultEvents.module.scss"
import { DefaultCard } from '../DefaultCard'

export const DefaultEvents_2022 = () => {

  return (
    <>
     <div className={s.box_first}>
          <p className={s.text}>
            Чемпионат Кыргызской Респубики по традиционному ушу
          </p>
          <p className={s.text_date}>29.06.2022г. - 30.06.2022г.</p>
          <p className={s.text_title}>Дворец спорта им. К. Кожомкула</p>
          <p>Информация о мероприятии</p>
          <div className={s.arrow_button}>
            <ForwardButton to=""/>
          </div>
        </div>
        <DefaultCard />
        <DefaultCard />
    </>
  )
}
