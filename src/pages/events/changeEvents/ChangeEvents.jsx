import React from "react";
import { useState } from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import Button from "../../../components/button/Button";
import { linkActiveClassName } from "../../../utils/ActiveLink";
import s from ".././defaultEvents/DefaultEvents.module.scss";
import { AllEvents } from "./allEvents/AllEvents";
import ss from "./ChangeEvents.module.scss";
import { Events_2021 } from "./events_2021/Events_2021";
import { Events_2022 } from "./events_2022/Events_2022";

export const ChangeEvents = () => {

  const [active, setActive] = useState(false)

  const location = useLocation()
  return (
    <div className={s.cont}>
      <div className={s.link_cont}>
        <NavLink to="/main/events/allEvents" className={linkActiveClassName(location,"allEvents", 3, "link", "active_link")}>
          Все мероприятия
        </NavLink>
        <NavLink to="/main/events/events_2022" className={linkActiveClassName(location,"events_2022", 3, "link", "active_link")}>
          Мероприятия за 2022г.
        </NavLink>
        <NavLink to="/main/events/events_2021" className={linkActiveClassName(location,"events_2021", 3, "link", "active_link")}>
          Мероприятия за 2021г.
        </NavLink>

        <div className={ss.button}>
          <Button margin="0 0" text="СОЗДАТЬ" onClick={()=>setActive(true)}/>
        </div>
      </div>

      <div className={s.content}>

        <Routes>
          <Route path="/allEvents" element={<AllEvents />} />
          <Route path="/events_2022" element={<Events_2022 />} />
          <Route path="/events_2021" element={<Events_2021 />} />
        </Routes>
      </div>
    </div>
  );
};
