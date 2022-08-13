import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { getEvent } from "../../../redux/slices/eventSlice";
import { linkActiveClassName } from "../../../utils/ActiveLink";
import { AllDefaultEvents } from "./allDefaultEvents/AllDefaultEvents";
import s from "./DefaultEvents.module.scss";
import { DefaultEvents_2021 } from "./defaultEvents_2021/DefaultEvents_2021";
import { DefaultEvents_2022 } from "./defaultEvents_2022/DefaultEvents_2022";

export const DefaultEvents = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getEvent())
  },[])

  return (
    <div className={s.cont}>
      <div className={s.link_cont}>
      <NavLink to="/main/defaultEvents/allDefaultEvents" className={linkActiveClassName(location,"allDefaultEvents", 3, "link", "active_link")}>
          Все мероприятия
        </NavLink>
        <NavLink to="/main/defaultEvents/defaultEvents_2022" className={linkActiveClassName(location,"defaultEvents_2022", 3, "link", "active_link")}>
          Мероприятия за 2022г.
        </NavLink>
        <NavLink to="/main/defaultEvents/defaultEvents_2021" className={linkActiveClassName(location,"defaultEvents_2021", 3, "link", "active_link")}>
          Мероприятия за 2021г.
        </NavLink>
      </div>

      <div className={s.content}>
        <Routes>
          <Route path="/allDefaultEvents" element={<AllDefaultEvents />} />
          <Route path="/defaultEvents_2022" element={<DefaultEvents_2022 />} />
          <Route path="/defaultEvents_2021" element={<DefaultEvents_2021 />} />
        </Routes>
      </div>
    </div>
  );
};
