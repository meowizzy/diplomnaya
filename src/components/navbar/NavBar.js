import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBar.module.scss";

export const NavBar = () => {
  const setActive = ({ isActive }) =>
    isActive ? s.active_link : s.unactive_link;

  return (
    <div className={s.cont}>
      <NavLink to="/main/events" className={setActive}>
        Мероприятия
      </NavLink>
      <NavLink to="/main/news" className={setActive}>Новости</NavLink>
      <NavLink to="" className={setActive}>Пользователи</NavLink>
      <NavLink to="" className={setActive}>Протоколы</NavLink>
      <NavLink to="" className={setActive}>Клубы</NavLink>
      <NavLink to="" className={setActive}>Статистика</NavLink>
      <NavLink to="" className={setActive}>Документация</NavLink>
      <NavLink to="" className={setActive}>Профиль</NavLink>
      <NavLink to="" className={setActive}>Чат</NavLink>

      <NavLink to="" className={s.exit}>Выйти</NavLink>
    </div>
  );
};
