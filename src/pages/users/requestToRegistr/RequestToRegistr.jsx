import React from "react";
import { Link } from "react-router-dom";
import s from "./RequestToRegistr.module.scss";
import ss from '../registered/Registered.module.scss'

export const RequestToRegistr = () => {
  return (
    <div className={ss.table_content}>
      <div className={s.title} style={{ fontWeight: "500" }}>
        <p className={s.first_p}>№</p>
        <p>Имя</p>
        <p>Фамилия</p>
        <p>Номер телефона</p>
        <p>Почта</p>
      </div>
      <Link to="/main/users/requestToRegistr/requestUserInfo">
        <div className={s.title}>
          <p className={s.first_p}>1</p>
          <p>Карина</p>
          <p>Белоусова</p>
          <p>+996 000 123 456</p>
          <p>Admin111@gmal.com</p>
        </div>
      </Link>
    </div>
  );
};
