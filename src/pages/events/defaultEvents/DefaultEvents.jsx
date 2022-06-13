import React from "react";
import { NavLink } from "react-router-dom";
import ForwardButton from "../../../components/arrowButton/ForwardButton";
import { DefaultCard } from "./DefaultCard";
import s from "./DefaultEvents.module.scss";

export const DefaultEvents = () => {
  return (
    <div className={s.cont}>
      <div className={s.link_cont}>
        <NavLink to="" className={s.link}>
          Все мероприятия
        </NavLink>
        <NavLink to="" className={s.link}>
          Мероприятия за 2022г.
        </NavLink>
        <NavLink to="" className={s.link}>
          Мероприятия за 2021г.
        </NavLink>
      </div>

      <div className={s.content}>
        <div className={s.box_first}>
          <p className={s.text}>
            Чемпионат Кыргызской Респубики по традиционному ушу
          </p>
          <p className={s.text_date}>29.06.2022г. - 30.06.2022г.</p>
          <p className={s.text_title}>Дворец спорта им. К. Кожомкула</p>
          <p>Информация о мероприятии</p>
          <div className={s.arrow_button}>
            <ForwardButton />
          </div>
        </div>
        <DefaultCard />
        <DefaultCard />
      </div>
    </div>
  );
};
