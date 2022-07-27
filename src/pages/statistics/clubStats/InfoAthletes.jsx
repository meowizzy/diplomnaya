import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../components/input/Input'
import { Pagination } from '../../../components/pagination/Pagination'
import { search_icon } from '../../../images'
import s from '../Statistics.module.scss'

export const InfoAthletes = () => {
  return (
    <div className={s.table_content}>
         <div className={s.search}>
      <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
        <img className={s.search_icon} src={search_icon} alt="wrong"/>
    </div>
    <div className={s.title} style={{ fontWeight: "500" }}>
      <p className={s.first_p}>№</p>
      <p className={s.name}>ФИО спортсмена </p>
      <p className={s.name}>Название клуба</p>
      <p>Возраст</p>
      <p>ОФП</p>
    </div>
    <Link to="/main/statistics/clubStats/InfoAthletesMore">
      <div className={s.title}>
        <p className={s.first_p}>1</p>
        <p className={s.name}>Стёпка Киборг Убийца</p>
        <p className={s.name}>Золотой дракон</p>
        <p>6</p>
        <p>16</p>
      </div>
    </Link>
    <Pagination />
  </div>
  )
}
