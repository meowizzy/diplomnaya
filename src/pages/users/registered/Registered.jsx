import React from "react";
import Input from "../../../components/input/Input";
import { Pagination } from "../../../components/pagination/Pagination";
import s from "./Registered.module.scss";
import { Link } from "react-router-dom";
import {search_icon} from "../../../images";

export const Registered = () => {
  return (
    <div className={s.table_content}>
      <div className={s.search}>
        <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
          <img className={s.search_icon} src={search_icon} alt="wrong"/>
      </div>

      <div className={s.title} style={{ fontWeight: "500" }}>
        <p className={s.first_p}>№</p>
        <p>Имя</p>
        <p>Фамилия</p>
        <p>Должность</p>
        <p>Клуб</p>
        <p>Почта</p>
      </div>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>1</p>
          <p>Карина</p>
          <p>Белоусова</p>
          <p>Тренер</p>
          <p>Золотой дракон</p>
          <p>Admin111@gmal.com</p>
        </div>
      </Link>
      <Pagination />
    </div>
  );
};
