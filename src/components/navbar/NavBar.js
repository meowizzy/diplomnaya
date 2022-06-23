import React from "react";
import { NavLink,useLocation } from "react-router-dom";
import s from "./NavBar.module.scss";

export const NavBar = () => {

    const location = useLocation();
    const linkActiveClassName = (navLink) => {
      const currentParentPath = location.pathname.split("/")[2];
      const isParentLinkActive = currentParentPath === navLink;

      if (isParentLinkActive) return s.active_link;
      return s.unactive_link;
    };

  return (
    <div className={s.cont}>
      <NavLink to="/main/events" className={linkActiveClassName("events")}>
        Мероприятия
      </NavLink>
      <NavLink to="/main/news" className={linkActiveClassName('news')}>Новости</NavLink>
      <NavLink to="/main/users/registered" className={linkActiveClassName('users')}>Пользователи</NavLink>
      <NavLink to="/main/protocol" className={linkActiveClassName('protocol')}>Протоколы</NavLink>
      <NavLink to="/main/clubs" className={linkActiveClassName('clubs')}>Клубы</NavLink>
      <NavLink to="/main/statistics" className={linkActiveClassName('statistics')}>Статистика</NavLink>
      <NavLink to="/main/documentation" className={linkActiveClassName('documentation')}>Документация</NavLink>
      <NavLink to="/main/profile/" className={linkActiveClassName('profile')}>Профиль</NavLink>
      <NavLink to="/main/chat" className={linkActiveClassName('chat')}>Чат</NavLink>

      <NavLink to="" className={s.exit}>Выйти</NavLink>
    </div>
  );
};
