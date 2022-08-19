import React from 'react'
import { useSelector } from 'react-redux'
import s from "../Statistics.module.scss"
import { LineChart } from './LineChart'

export const InfoAthletesMore = () => {

  const athlete = useSelector(state=>state.sportsmen.sportsman)
  console.log(athlete)
  return (
    <div>
        <p className={s.top_text}>Клуб - {athlete.club.name}</p>
        <p className={s.trainer_name}>Спортсмен: {athlete.surname} {athlete.name}</p>
        <p className={s.half}>Возраст: {athlete.age}</p>
        <p className={s.half}>Средний ОФП: {athlete.average_of_PHI}</p>
        <LineChart/>
        <div className={s.flex}>
        <p>Достижения за год</p>

        <p>Разряд</p>
        </div>

        <div className={s.flex_second}>
        <p className={s.achievemets}>{athlete.achievements}</p>

        <p >КМС</p>
        </div>
    </div>
  )
}
