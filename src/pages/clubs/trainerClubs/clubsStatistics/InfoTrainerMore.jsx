import React from 'react'
import { useSelector } from 'react-redux'
// import s from "../Statistics.module.scss"
import s from "../../../statistics/Statistics.module.scss"
// import { LineChart } from './LineChart'
import {LineChartTrainer} from "./LineChartTrainer";

export const InfoTrainerMore = () => {

  const athlete = useSelector(state=>state.sportsmen.sportsman)
  console.log(athlete)
  return (
    <div><br/>
        {/*<p className={s.top_text}>Клуб - {athlete.club?.name}</p>*/}
        <p className={s.trainer_name}>Тренер: Семен Андреев</p>
        <p className={s.half}>Возраст: 25</p>
        {/*<p className={s.half}>Средний ОФП: {athlete.average_of_PHI}</p>*/}
        <LineChartTrainer />
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
