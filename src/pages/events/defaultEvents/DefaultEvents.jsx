import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./DefaultEvents.module.scss"

export const DefaultEvents = () => {
  return (
    <div className={s.cont}>
        <div className={s.link_cont}>
            <NavLink to="" className={s.link} style={{marginLeft:"5px"}}>Все мероприятия</NavLink>
            <NavLink to="" className={s.link}>Мероприятия за 2022г.</NavLink>
            <NavLink to="" className={s.link}>Мероприятия за 2021г.</NavLink>
        </div>

        <div className={s.content}>
            
        </div>
    </div>
  )
}
