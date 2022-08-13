import React from 'react'
import { NavLink } from 'react-router-dom'
import BackButton from '../../../components/arrowButton/BackButton'
import ForwardButton from '../../../components/arrowButton/ForwardButton'
import s from "../Statistics.module.scss"
import { BarChart } from './BarChart'
import { PieChart } from './PieChart'

export const ClubStatsMore = () => {
  return (
    <>
      <BackButton to="/main/statistics/clubStats" />
      <p className={s.top_text}>Клуб Тянь - Шань</p>
      <p className={s.trainer_name}>Тренер: Леонид Ильич Брежнев</p>
      <p className={s.half}>Средний ОФП клуба: 10</p>
      <BarChart />
      <div className={s.pie_chart__flex}>
        <span style={{ width: "270px" }}>
          <PieChart />
          <p>Процент призовых мест от общего кол-ва спортсменов</p>
        </span>
        <span style={{ width: "270px" }}>
          <PieChart />
          <p>Процент призовых мест от кол-ва заявленных спортсменов</p>
        </span>
      </div>

      <div className={s.footer}>
        <p>Посмотреть список спортсменов</p>
        <NavLink
          to={"/main/statistics/clubStats/infoAthletes"}
          className={s.button}
        >
          <div className={s.img}></div>
        </NavLink>
      </div>
    </>
  );
}
