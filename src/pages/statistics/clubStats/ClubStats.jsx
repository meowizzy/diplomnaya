import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../components/input/Input'
import { Pagination } from '../../../components/pagination/Pagination'
import { search_icon } from '../../../images'
import s from "../Statistics.module.scss"

export const ClubStats = () => {
  return (
    <div className={s.table_content}>
    <div className={s.search}>
      <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
        <img className={s.search_icon} src={search_icon} alt="wrong"/>
    </div>

    <div className={s.title} style={{ fontWeight: "500" }}>
      <p className={s.first_p}>№</p>
      <p className={s.name}>Клуб </p>
      <p className={s.name}>Тренер</p>
      <p>Кол-во спортсменов</p>
      <p>Средний ОФП клуба</p>
    </div>
    <Link to="/main/statistics/clubStats/clubStatsMore">
      <div className={s.title}>
        <p className={s.first_p}>1</p>
        <p className={s.name}>Тянь - Шань</p>
        <p className={s.name}>Леонид Ильич Брежнев</p>
        <p>6</p>
        <p>16</p>
      </div>
    </Link>
    <Pagination />
  </div>
  )
}
