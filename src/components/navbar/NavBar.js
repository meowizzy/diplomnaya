import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NavBar.module.scss";

export const NavBar = () => {
  const setActive = ({ isActive }) =>
    isActive ?  s.active_link : s.unactive_link ;

  return (
    <div className={s.cont}>
      <NavLink to="/main/events" className={setActive}>
        Мероприятия
      </NavLink>
      <NavLink to="/main/news" className={setActive}>Новости</NavLink>
      <NavLink to="/main/users/registered" className={setActive}>Пользователи</NavLink>
      <NavLink to="/main/protocol" className={setActive}>Протоколы</NavLink>
      <NavLink to="/main/clubs" className={setActive}>Клубы</NavLink>
      <NavLink to="/main/statistics" className={setActive}>Статистика</NavLink>
      <NavLink to="/main/documentation" className={setActive}>Документация</NavLink>
      <NavLink to="/main/profile" className={setActive}>Профиль</NavLink>
      <NavLink to="/main/chat" className={setActive}>Чат</NavLink>

      <NavLink to="" className={s.exit}>Выйти</NavLink>
    </div>
  );
};
