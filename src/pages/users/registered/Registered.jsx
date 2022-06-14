import React, { useState } from "react";
import Input from "../../../components/input/Input";
import { Modal } from "../../../components/modal/Modal";
import { Pagination } from "../../../components/pagination/Pagination";
import s from "./Registered.module.scss";
import { UserInfo } from "./UserInfo";

export const Registered = () => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };
  return (
    <>
      <Input placeholder="Поиск" />

      <div className={s.title} style={{ fontWeight: "bold" }}>
        <p className={s.first_p}>№</p>
        <p>Имя</p>
        <p>Фамилия</p>
        <p>Должность</p>
        <p>Клуб</p>
        <p>Почта</p>
      </div>

      {active === false ? (
        <div className={s.title} onClick={onClick}>
          <p className={s.first_p}>1</p>
          <p>Карина</p>
          <p>Белоусова</p>
          <p>Тренер</p>
          <p>Золотой дракон</p>
          <p>Admin111@gmal.com</p>
        </div>
      ) : (
        <UserInfo onClick={onClick} />
      )}

      {active === false ? (
        <div className={s.title} onClick={onClick}>
          <p className={s.first_p}>2</p>
          <p>Карина</p>
          <p>Белоусова</p>
          <p>Тренер</p>
          <p>Золотой дракон</p>
          <p>Admin111@gmal.com</p>
        </div>
      ) : (
        <UserInfo onClick={onClick} />
      )}
      <Pagination />
    </>
  );
};
