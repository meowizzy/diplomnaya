import React from 'react'
import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { linkActiveClassName } from '../../../utils/ActiveLink'
import { CurrentApplications } from './currentApplications/CurrentApplications'
import { NewApplications } from './newApplications/NewApplications'
import { SubmittedApplications } from './submittedApplications/SubmittedApplications'
import s from '../pageForSecretary/Applied.module.scss'
import ss from "./Application.module.scss"
import { Detail } from './submittedApplications/Detail'
import { DetailCurrent } from './currentApplications/DetailCurrent'
import { ListOfTemplate } from './newApplications/ListOfTemplate'

export const Application = () => {
const location = useLocation()
  return (
    <>
      <div className={ss.link_cont}>
        <div className={s.navlink_cont}>
          <NavLink
            to="/main/application/submittedApplications"
            className={linkActiveClassName(location,"submittedApplications", 3, "link", "active_link")}
          >
            История заявок
          </NavLink>
          <NavLink
            to="/main/application/currentApplications"
            className={linkActiveClassName(location,"currentApplications", 3, "link", "active_link")}
          >
            Текущие заявки
          </NavLink>
          <NavLink
            to="/main/application/listOfTemplate"
            className={linkActiveClassName(location,"listOfTemplate", 3, "link", "active_link")}
          >
            Подать заявку
          </NavLink>
        </div>
      </div>
      <>
        <Routes>
          <Route path="/submittedApplications" element={<SubmittedApplications />} />
          <Route path="/submittedApplications/detail" element={<Detail />} />
          <Route path="/currentApplications" element={<CurrentApplications />} />
          <Route path="/currentApplications/detail" element={<DetailCurrent />} />
          <Route path="/listOfTemplate/newApplications" element={<NewApplications />} />
          <Route path="/listOfTemplate" element={<ListOfTemplate />} />
        </Routes>
      </>
    </>
  )
}
