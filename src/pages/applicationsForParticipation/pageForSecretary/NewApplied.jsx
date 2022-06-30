import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ss from '../Applied.module.scss'
import s from './NewApplied.module.scss'

export const NewApplied = () => {
  const [clickColor, setClickColor] = useState(false)
  const toggle=()=>{
    setClickColor(true)
  }

  return (
    <div className={ss.cont}>
      <div className={s.title} style={{ fontWeight: "500" }}>
        <p className={s.first_p}>№</p>
        <p>Отправитель</p>
        <p>Название заявки</p>
      </div>
      <Link to="/main/applied/newApplied/detailedInformation">
        <div className={clickColor===true ? s.title : `${s.title} ${s.clicked}`} onClick={toggle}>
          <p className={s.first_p} >1</p>
          <p>Александр Сергеевич Пушкин</p>
          <p>Заявка на чемпионат ушу в Бишкеке</p>
        </div>
      </Link>
      <Link to="/main/applied/newApplied/detailedInformation">
        <div className={clickColor===true ? s.title : `${s.title} ${s.clicked}`} onClick={toggle}>
          <p className={s.first_p} >2</p>
          <p>Александр Сергеевич Пушкин</p>
          <p>Заявка на чемпионат ушу в Бишкеке</p>
        </div>
      </Link>
    </div>
  )
}
