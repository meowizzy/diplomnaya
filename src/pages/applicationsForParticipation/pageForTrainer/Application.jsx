import React from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { linkActiveClassName } from '../../../utils/ActiveLink'
import s from '../pageForSecretary/Applied.module.scss'
import { CurrentApplications } from './currentApplications/CurrentApplications'
import { NewApplications } from './newApplications/NewApplications'
import { SubmittedApplications } from './submittedApplications/SubmittedApplications'

export const Application = () => {
const location = useLocation()
  return (
    <>
      <div className={s.link_cont}>
        <div className={s.navlink_cont}>
          <NavLink
            to="/main/application/submittedApplications"
            className={linkActiveClassName(location,"submittedApplications", 3, "link", "active_link")}
          >
            Поданные заявки
          </NavLink>
          <NavLink
            to="/main/application/currentApplications"
            className={linkActiveClassName(location,"currentApplications", 3, "link", "active_link")}
          >
            Текущие заявки
          </NavLink>
          <NavLink
            to="/main/application/newApplications"
            className={linkActiveClassName(location,"newApplications", 3, "link", "active_link")}
          >
            Новая заявка
          </NavLink>
        </div>
      </div>
      <>
        <Routes>
          <Route path="/submittedApplications" element={<SubmittedApplications />} />
          <Route path="/currentApplications" element={<CurrentApplications />} />
          <Route path="/newApplications" element={<NewApplications />} />
        </Routes>
      </>
    </>
  )
}
