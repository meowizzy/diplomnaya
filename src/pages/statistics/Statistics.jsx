import React from 'react'
import s from "./Statistics.module.scss"
import {NavLink, useLocation, Route, Routes} from "react-router-dom"
import { linkActiveClassName } from '../../utils/ActiveLink'
import { ProgressStats } from './progressStats/ProgressStats'
import { ClubStats } from './clubStats/ClubStats'
import "chart.js/auto";
import { ClubStatsMore } from './clubStats/ClubStatsMore'
import { InfoAthletes } from './clubStats/InfoAthletes'
import { InfoAthletesMore } from './clubStats/InfoAthletesMore'



export const Statistics = () => {

    const location = useLocation()

  return (
    <>
      <div className={s.navlink_cont}>
        <NavLink
          to="/main/statistics/progress"
          className={linkActiveClassName(location,"progress", 3, "link", "active_link")}
        >
          Общий прогресс
        </NavLink>
        <NavLink
          to="/main/statistics/clubStats"
          className={linkActiveClassName(location,"clubStats", 3, "link", "active_link")}
        >
          Клубы
        </NavLink>
      </div>
    <div className='cont'>
      <Routes>
        <Route path="/progress" element={<ProgressStats />} />
        <Route path="/clubStats" element={<ClubStats />} />
        <Route path="/clubStats/clubStatsMore" element={<ClubStatsMore />} />
        <Route path="/clubStats/infoAthletes" element={<InfoAthletes />} />
        <Route path="/clubStats/infoAthletesMore" element={<InfoAthletesMore />} />
      </Routes>
    </div>
  </>
  )
}
