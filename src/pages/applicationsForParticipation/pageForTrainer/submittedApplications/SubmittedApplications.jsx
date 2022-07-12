import React from 'react'
import Input from '../../../../components/input/Input'
import { Pagination } from '../../../../components/pagination/Pagination'
import { search_icon } from '../../../../images'
import s from './SubmittedApplications.module.scss'
import { Link } from "react-router-dom";
export const SubmittedApplications = () => {
  return (
    <div className={s.table_content}>
    <div className={s.search}>
      <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
        <img className={s.search_icon} src={search_icon} alt="wrong"/>
    </div>

    <div className={s.title} style={{ fontWeight: "500" }}>
      <p className={s.first_p}>№</p>
      <p className={s.name}>Название </p>
      <p>Дата</p>
      <p>Спортсмены</p>
      <p>Клуб</p>
    </div>
    <Link to="/main/application/submittedApplications/detail">
      <div className={s.title}>
        <p className={s.first_p}>1</p>
        <p className={s.name}>Чемпионат Кыргызской Республики по традицион</p>
        <p>29 - 30.06.2022г.</p>
        <p>6</p>
        <p>Золотой дракон</p>
      </div>
    </Link>
    <Pagination />
  </div>
  )
}
