import React from "react";
import { Route, Routes } from "react-router";
import { Registered } from "./registered/Registered";
import s from "./registered/Registered.module.scss";
import ss from "../events/changeEvents/ChangeEvents.module.scss";
import { NavLink } from "react-router-dom";
import Button from "../../components/button/Button";

export const UsersRoute = () => {
  return (
    <>
      <div className={s.link_cont}>
        <NavLink to="" className={s.link}>
          Зарегистрированные
        </NavLink>
        <NavLink to="" className={s.link}>
          Запросы на регистрацию
        </NavLink>
        <NavLink to="" className={s.link}>
          Запросы на восстановление
        </NavLink>
        <Button margin="0 0" text="СОЗДАТЬ" />
      </div>
      <div className={s.cont}>
        <Routes>
          <Route path="/registered" element={<Registered />} />
        </Routes>
      </div>
    </>
  );
};
