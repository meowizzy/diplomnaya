import React from "react";
import { NavLink,useLocation } from "react-router-dom";
import s from "./NavBar.module.scss";
import {getCookie} from "../../utils/cookieFunction/cookieFunction";

export const NavBar = () => {

    const location = useLocation();
    const linkActiveClassName = (navLink) => {
      const currentParentPath = location.pathname.split("/")[2];
      const isParentLinkActive = currentParentPath === navLink;

      if (isParentLinkActive) return s.active_link;
      return s.unactive_link;
    };
    const removeRole=()=>{
      localStorage.removeItem('role')
    }

    const role = JSON.parse(getCookie("user_info"))
    console.log(role)
  return (
    <>
      {role["user role"] ==="ADMIN"&&
      <div className={s.cont}>
        <NavLink to="/main/defaultEvents/allDefaultEvents" className={linkActiveClassName("defaultEvents")}>Мероприятия</NavLink>
        <NavLink to="/main/news/all_news" className={linkActiveClassName('news')}>Новости</NavLink>
        <NavLink to="/main/users/registered" className={linkActiveClassName('users')}>Пользователи</NavLink>
        <NavLink to="/main/protocol/all_protocols" className={linkActiveClassName('protocol')}>Протоколы</NavLink>
        <NavLink to="/main/clubs/all_clubs" className={linkActiveClassName('clubs')}>Клубы</NavLink>
        <NavLink to="/main/statistics" className={linkActiveClassName('statistics')}>Статистика</NavLink>
        <NavLink to="/main/documentation/all_documentation" className={linkActiveClassName('documentation')}>Документация</NavLink>
        <NavLink to="/main/profile" className={linkActiveClassName('profile')}>Профиль</NavLink>
        <NavLink to="/main/chat" className={linkActiveClassName('chat')}>Чат</NavLink>

        <NavLink to="/" className={s.exit} onClick={removeRole}>Выйти</NavLink>
      </div>
      }

     {role["user role"] === "TRAINER"&&
      <div className={s.cont}>
        <NavLink to="/main/defaultEvents/allDefaultEvents" className={linkActiveClassName("defaultEvents")}>Мероприятия</NavLink>
        <NavLink to="/main/news/all_news" className={linkActiveClassName('news')}>Новости</NavLink>
        <NavLink to="/main/application/submittedApplications" className={linkActiveClassName('application')}>Заявки</NavLink>
        <NavLink to="/main/protocol/all_protocols" className={linkActiveClassName('protocol')}>Протоколы</NavLink>
        <NavLink to="/main/output/all_output" className={linkActiveClassName('output')}>Итоги</NavLink>
        <NavLink to="/main/clubs/all_clubs" className={linkActiveClassName('clubs')}>Клубы</NavLink>
        <NavLink to="/main/trainers" className={linkActiveClassName('trainers')}>Тренеры</NavLink>
        <NavLink to="/main/documentation/all_documentation" className={linkActiveClassName('documentation')}>Документация</NavLink>
        <NavLink to="/main/profile" className={linkActiveClassName('profile')}>Профиль</NavLink>
        <NavLink to="/main/chat" className={linkActiveClassName('chat')}>Чат</NavLink>

        <NavLink to="/" className={s.exit} onClick={removeRole}>Выйти</NavLink>
      </div>
      }

      {role.assistant==="True"&&
        <div className={s.cont}>
          <NavLink to="/main/events/allEvents" className={linkActiveClassName("events")}>Мероприятия</NavLink>
          <NavLink to="/main/news/all_news" className={linkActiveClassName('news')}>Новости</NavLink> 
          <NavLink to="/main/applied/newApplied" className={linkActiveClassName('applied')}>Заявки</NavLink>
          <NavLink to="/main/protocol/all_events" className={linkActiveClassName('protocol')}>Протоколы</NavLink>
            <NavLink to="/main/output/all_output" className={linkActiveClassName('output')}>Итоги</NavLink>
            <NavLink to="/main/statistics" className={linkActiveClassName('statistics')}>Статистика</NavLink>
          <NavLink to="/main/documentation/all_documentation" className={linkActiveClassName('documentation')}>Документация</NavLink>
          <NavLink to="/main/profile" className={linkActiveClassName('profile')}>Профиль</NavLink>
          <NavLink to="/main/chat" className={linkActiveClassName('chat')}>Чат</NavLink>

          <NavLink to="/" className={s.exit} onClick={removeRole}>Выйти</NavLink>
        </div>
      }

      {role.judge ==="True"&&
        <div className={s.cont}>
          <NavLink to="/main/defaultEvents/allDefaultEvents" className={linkActiveClassName("defaultEvents")}>Мероприятия</NavLink>
          <NavLink to="/main/news/all_news" className={linkActiveClassName('news')}>Новости</NavLink>
          <NavLink to="/main/protocol/new_protocols" className={linkActiveClassName('protocol')}>Протоколы</NavLink>
          <NavLink to="/main/statistics" className={linkActiveClassName('statistics')}>Статистика</NavLink>
            <NavLink to="/main/output/all_output" className={linkActiveClassName('output')}>Итоги</NavLink>
            <NavLink to="/main/documentation/all_documentation" className={linkActiveClassName('documentation')}>Документация</NavLink>
          <NavLink to="/main/profile" className={linkActiveClassName('profile')}>Профиль</NavLink>
          <NavLink to="/main/chat" className={linkActiveClassName('chat')}>Чат</NavLink>

          <NavLink to="/" className={s.exit} onClick={removeRole}>Выйти</NavLink>
        </div>
      }
  </>
  );
};
