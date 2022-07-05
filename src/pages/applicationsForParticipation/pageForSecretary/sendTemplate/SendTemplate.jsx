import React from 'react'
import { Link } from 'react-router-dom'
import { Checkbox } from '../../../../components/checkbox/Checkbox'
import Input from '../../../../components/input/Input'
import { Pagination } from '../../../../components/pagination/Pagination'
import { search_icon } from '../../../../images'
import s from './SendTemplate.module.scss'

export const SendTemplate = () => {
  return (
    <div className="cont">
    <div className={s.search}>
      <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
        <img className={s.search_icon} src={search_icon} alt="wrong"/>
    </div>

    <div className={s.title} style={{ fontWeight: "500" }}>
      <p className={s.first_p}>№</p>
      <p>Тренер</p>
      <p>Номер</p>
      <p>Клуб</p>
      <p>Отправить всем</p>
      <Checkbox />
    </div>

      <div className={s.title}>
        <p className={s.first_p}>1</p>
        <p>Белоусова Карина</p>
        <p>+996 000 123 456</p>
        <p>Золотой дракон</p>
        <p>Отправить </p>
        <Checkbox />
      </div>

    <Pagination />
  </div>
  )
}
