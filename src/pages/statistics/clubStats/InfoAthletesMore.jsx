import React from 'react'
import s from "../Statistics.module.scss"
import { LineChart } from './LineChart'

export const InfoAthletesMore = () => {
  return (
    <div>
        <p className={s.top_text}>Клуб - Золотой дракон</p>
        <p className={s.trainer_name}>Спортсмен: Стёпка Киборг Убийца</p>
        <p className={s.half}>Возраст: 18</p>
        <p className={s.half}>Средний ОФП: 10</p>
        <LineChart/>
        <div className={s.flex}>
        <p>Достижения за год</p>

        <p>Разряд</p>
        </div>

        <div className={s.flex_second}>
        <p>I место - чемпионат республики, подгруппа цисе Чай Цуань, мальчики 16 - 18 лет
III место - чемпионат Республики Казахстан, подгруппа цисе Чай Цуань, мальчики 16 - 18 лет.</p>

        <p>КМС</p>
        </div>
    </div>
  )
}
