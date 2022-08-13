import React from "react";
import s from "./Protocol.module.scss";

export const Protocol = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <p style={{ margin: "0px 0 30px", fontSize: "26px", fontWeight:"bold" }}>ПРОТОКОЛ</p>
        <p style={{ margin: "0px 0 20px", fontSize: "20px", fontWeight:"bold" }}>
          Чемпионат Кыргызской Респубики по традиционному ушу
        </p>
        <p style={{ margin: "0px 0 48px",}}>
          29.06.2022г. - 30.06.2022г.
        </p>
        <p style={{ margin: "0px 0 20px",}}>
          День первый
        </p>
        <p style={{ margin: "0px 0 60px",fontWeight:"bold" }}>29 июня</p>
      </div>

      <div className={s.description}>
        <p style={{ marginBottom: "20px",fontWeight:"bold" }}>
          Открытие первых видов соревнований
        </p>
        <p style={{ marginBottom: "40px" }}>
          Время: 10:15
        </p>
        <p style={{ marginBottom: "20px", fontWeight:"bold" }}>
          Подгруппа 1. {""}
          <span style={{fontWeight:"normal" }}>
            Дуйлянь, 8-10 лет
          </span>
        </p>
        <p style={{ marginBottom: "60px" }}>
          Время: 10:30
        </p>
      </div>

      <div className={s.tabel}>
        <div className={s.line}>
          <p className={s.number}>№</p>
          <p className={s.weight}>ФИО участника</p>
          <p className={s.weight}>Школа, клуб</p>
          <p className={s.weight}>Примечание</p>
        </div>
        <div className={s.line}>
          <p className={s.number}>1</p>
          <p>Азирет Азаматов</p>
          <p>Панда</p>
          <p>Меч</p>
        </div>
      </div>
    </div>
  );
};
