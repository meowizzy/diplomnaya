import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ForwardButton from "../../../components/arrowButton/ForwardButton";
import Button from "../../../components/button/Button";
import s from ".././defaultEvents/DefaultEvents.module.scss";
import { Card } from "./Card";
import ss from "./ChangeEvents.module.scss";
import { CreateEvents } from "./CreateEvents";

export const ChangeEvents = () => {

  const [active, setActive] = useState(false)

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

        <div className={ss.button}>
          <Button margin="0 0" text="СОЗДАТЬ" onClick={()=>setActive(true)}/>
        </div>
      </div>

      <div className={s.content}>

        <CreateEvents active={active} setActive={setActive} />

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

        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
