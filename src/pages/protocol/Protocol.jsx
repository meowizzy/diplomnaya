import React from "react";
import s from "./Protocol.module.scss";

export const Protocol = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <p style={{ margin: "0px 0 30px", fontSize: "32px" }}>ПРОТОКОЛ</p>
        <p style={{ margin: "0px 0 20px", fontSize: "32px" }}>
          Чемпионат Кыргызской Респубики по традиционному ушу
        </p>
        <p style={{ margin: "0px 0 60px", fontWeight: "normal" }}>
          29.06.2022г. - 30.06.2022г.
        </p>
        <p style={{ margin: "0px 0 20px", fontWeight: "normal" }}>
          День первый
        </p>
        <p style={{ margin: "0px 0 60px" }}>29 июня</p>
      </div>

      <div className={s.description}>
        <p style={{ marginBottom: "20px" }}>
          Открытие первых видов соревнований
        </p>
        <p style={{ fontWeight: "normal", marginBottom: "40px" }}>
          Время: 10:15
        </p>
        <p style={{ marginBottom: "20px" }}>
          Подгруппа 1.
          <span style={{ fontWeight: "normal", fontSize: "24px" }}>
            Дуйлянь, 8-10 лет
          </span>
        </p>
        <p style={{ fontWeight: "normal", marginBottom: "60px" }}>
          Время: 10:30
        </p>
      </div>

      <div className={s.tabel}>
        <div className={s.line}>
          <p style={{ flex: "0.7" }}>№</p>
          <p style={{ flex: "3" }}>ФИО участника</p>
          <p style={{ flex: "3" }}>Школа, клуб</p>
          <p style={{ flex: "3" }}>Примечание</p>
        </div>
        <div className={s.line}>
          <p style={{ flex: "0.7" }}>1</p>
          <p style={{ flex: "3" }}>Азирет Азаматов</p>
          <p style={{ flex: "3" }}>Панда</p>
          <p style={{ flex: "3" }}>Меч</p>
        </div>
      </div>
    </div>
  );
};
