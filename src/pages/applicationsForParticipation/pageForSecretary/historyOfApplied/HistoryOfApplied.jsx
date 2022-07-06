import React from 'react'
import { NavLink } from 'react-router-dom'
import { Pagination } from '../../../../components/pagination/Pagination'
import ss from '../../pageForSecretary/Applied.module.scss'
import s from '../newApplied/NewApplied.module.scss'

export const HistoryOfApplied = () => {
  return (
    <div className={ss.cont}>
    <div className={s.title} style={{ fontWeight: "500" }}>
      <p className={s.first_p}>№</p>
      <p>Отправитель</p>
      <p>Название заявки</p>
    </div>
    <NavLink
      to="/main/applied/historyOfApplied/detailedInformation"
      className={s.title}
    >
      <p className={s.first_p}>1</p>
      <p>Александр Сергеевич Пушкин</p>
      <p>Заявка на чемпионат ушу в Бишкеке</p>
    </NavLink>
    <NavLink to="/main/applied/historyOfApplied/detailedInformation">
      <div
        className={s.title}
      >
        <p className={s.first_p}>2</p>
        <p>Александр Сергеевич Пушкин</p>
        <p>Заявка на чемпионат ушу в Бишкеке</p>
      </div>
    </NavLink>
<Pagination />
  </div>
  )
}
