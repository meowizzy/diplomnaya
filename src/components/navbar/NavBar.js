import React from "react";
import { NavLink,useLocation } from "react-router-dom";
import s from "./NavBar.module.scss";
import {getCookie, removeCookie} from "../../utils/cookieFunction/cookieFunction";

export const NavBar = () => {

    const location = useLocation();
    const linkActiveClassName = (navLink) => {
      const currentParentPath = location.pathname.split("/")[2];
      const isParentLinkActive = currentParentPath === navLink;

      if (isParentLinkActive) return s.active_link;
      return s.unactive_link;
    };
    const removeRole=()=>{
      localStorage.removeItem('userId')
      localStorage.removeItem('event_id')
      localStorage.removeItem('tempId')
      localStorage.removeItem('token')
      removeCookie("access")
      removeCookie("user_info")
      console.log("remove cook")
    }

    const role = JSON.parse(getCookie("user_info"))
    // console.log(role)
  return (
    <>
      {role["user role"] === "1" && (
        <div className={s.cont}>
          <NavLink
            to="/main/defaultEvents/allDefaultEvents"
            className={linkActiveClassName("defaultEvents")}
          >
            <span className={s.top_curve}></span>
            Мероприятия
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/news/all_news"
            className={linkActiveClassName("news")}
          >
            <span className={s.top_curve}></span>
            Новости
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/users/registered"
            className={linkActiveClassName("users")}
          >
            <span className={s.top_curve}></span>
            Пользователи
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/protocol/all_protocols"
            className={linkActiveClassName("protocol")}
          >
            <span className={s.top_curve}></span>
            Протоколы
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/clubs/all_clubs"
            className={linkActiveClassName("clubs")}
          >
            <span className={s.top_curve}></span>
            Клубы
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/statistics/progress"
            className={linkActiveClassName("statistics")}
          >
            <span className={s.top_curve}></span>
            Статистика
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/documentation/all_documentation"
            className={linkActiveClassName("documentation")}
          >
            <span className={s.top_curve}></span>
            Документация
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/profile"
            className={linkActiveClassName("profile")}
          >
            <span className={s.top_curve}></span>
            Профиль
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink to="/main/chat" className={linkActiveClassName("chat")}>
            <span className={s.top_curve}></span>
            Чат
            <span className={s.bottom_curve}></span>
          </NavLink>

          <NavLink to="/" className={s.exit} onClick={removeRole}>
            Выйти
          </NavLink>
        </div>
      )}

      {role["user role"] === "ADMIN" && (
        <div className={s.cont}>
          <NavLink
            to="/main/defaultEvents/allDefaultEvents"
            className={linkActiveClassName("defaultEvents")}
          >
            <span className={s.top_curve}></span>
            Мероприятия
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/news/all_news"
            className={linkActiveClassName("news")}
          >
            <span className={s.top_curve}></span>
            Новости
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/users/registered"
            className={linkActiveClassName("users")}
          >
            <span className={s.top_curve}></span>
            Пользователи
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/protocol/all_protocols"
            className={linkActiveClassName("protocol")}
          >
            <span className={s.top_curve}></span>
            Протоколы
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/clubs/all_clubs"
            className={linkActiveClassName("clubs")}
          >
            <span className={s.top_curve}></span>
            Клубы
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/statistics/progress"
            className={linkActiveClassName("statistics")}
          >
            <span className={s.top_curve}></span>
            Статистика
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/documentation/all_documentation"
            className={linkActiveClassName("documentation")}
          >
            <span className={s.top_curve}></span>
            Документация
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/profile"
            className={linkActiveClassName("profile")}
          >
            <span className={s.top_curve}></span>
            Профиль
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink to="/main/chat" className={linkActiveClassName("chat")}>
            <span className={s.top_curve}></span>
            Чат
            <span className={s.bottom_curve}></span>
          </NavLink>

          <NavLink to="/" className={s.exit} onClick={removeRole}>
            Выйти
          </NavLink>
        </div>
      )}

      {(role["user role"] === "TRAINER" && role.assistant === "False" && role.judge === "False") && (
        <div className={s.cont}>
          <NavLink
            to="/main/defaultEvents/allDefaultEvents"
            className={linkActiveClassName("defaultEvents")}
          >
            <span className={s.top_curve}></span>
            Мероприятия
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/news/all_news"
            className={linkActiveClassName("news")}
          >
            <span className={s.top_curve}></span>
            Новости
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/application/submittedApplications"
            className={linkActiveClassName("application")}
          >
            <span className={s.top_curve}></span>
            Заявки
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/protocol/all_protocols"
            className={linkActiveClassName("protocol")}
          >
            <span className={s.top_curve}></span>
            Протоколы
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/output/all_output"
            className={linkActiveClassName("output")}
          >
            <span className={s.top_curve}></span>
            Итоги
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/clubs/all_clubs"
            className={linkActiveClassName("clubs")}
          >
            <span className={s.top_curve}></span>
            Клубы
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/documentation/all_documentation"
            className={linkActiveClassName("documentation")}
          >
            <span className={s.top_curve}></span>
            Документация
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/profile"
            className={linkActiveClassName("profile")}
          >
            <span className={s.top_curve}></span>
            Профиль
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink to="/main/chat" className={linkActiveClassName("chat")}>
            <span className={s.top_curve}></span>
            Чат
            <span className={s.bottom_curve}></span>
          </NavLink>

          <NavLink to="/" className={s.exit} onClick={removeRole}>
            Выйти
          </NavLink>
        </div>
      )}

      {role.assistant === "True" && (
        <div className={s.cont}>
          <NavLink
            to="/main/events/allEvents"
            className={linkActiveClassName("events")}
          >
            <span className={s.top_curve}></span>
            Мероприятия
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/news/all_news"
            className={linkActiveClassName("news")}
          >
            <span className={s.top_curve}></span>
            Новости
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/applied/newApplied"
            className={linkActiveClassName("applied")}
          >
            <span className={s.top_curve}></span>
            Заявки
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/protocol/all_events"
            className={linkActiveClassName("protocol")}
          >
            <span className={s.top_curve}></span>
            Протоколы
            <span className={s.bottom_curve}></span>
          </NavLink>
            <NavLink
                to="/main/output/all_output"
                className={linkActiveClassName("output")}
            >
                <span className={s.top_curve}></span>
                Итоги
                <span className={s.bottom_curve}></span>
            </NavLink>
          <NavLink
            to="/main/statistics/progress"
            className={linkActiveClassName("statistics")}
          >
            <span className={s.top_curve}></span>
            Статистика
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/documentation/all_documentation"
            className={linkActiveClassName("documentation")}
          >
            <span className={s.top_curve}></span>
            Документация
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/profile"
            className={linkActiveClassName("profile")}
          >
            <span className={s.top_curve}></span>
            Профиль
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink to="/main/chat" className={linkActiveClassName("chat")}>
            <span className={s.top_curve}></span>
            Чат
            <span className={s.bottom_curve}></span>
          </NavLink>

          <NavLink to="/" className={s.exit} onClick={removeRole}>
            Выйти
          </NavLink>
        </div>
      )}

      {role.judge === "True" && (
        <div className={s.cont}>
          <NavLink
            to="/main/defaultEvents/allDefaultEvents"
            className={linkActiveClassName("defaultEvents")}
          >
            <span className={s.top_curve}></span>
            Мероприятия
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/news/all_news"
            className={linkActiveClassName("news")}
          >
            <span className={s.top_curve}></span>
            Новости
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/protocol/new_protocols"
            className={linkActiveClassName("protocol")}
          >
            <span className={s.top_curve}></span>
            Протоколы
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/output/all_output"
            className={linkActiveClassName("output")}
          >
            <span className={s.top_curve}></span>
            Итоги
            <span className={s.bottom_curve}></span>
          </NavLink>
            <NavLink
                to="/main/statistics/progress"
                className={linkActiveClassName("statistics")}
            >
                <span className={s.top_curve}></span>
                Статистика
                <span className={s.bottom_curve}></span>
            </NavLink>
          <NavLink
            to="/main/documentation/all_documentation"
            className={linkActiveClassName("documentation")}
          >
            <span className={s.top_curve}></span>
            Документация
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink
            to="/main/profile"
            className={linkActiveClassName("profile")}
          >
            <span className={s.top_curve}></span>
            Профиль
            <span className={s.bottom_curve}></span>
          </NavLink>
          <NavLink to="/main/chat" className={linkActiveClassName("chat")}>
            <span className={s.top_curve}></span>
            Чат
            <span className={s.bottom_curve}></span>
          </NavLink>

          <NavLink to="/" className={s.exit} onClick={removeRole}>
            Выйти
          </NavLink>
        </div>
      )}
    </>
  );
};
