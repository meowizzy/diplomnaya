import React from "react";
import { AppliedLine } from "../../../../components/appliedLine/AppliedLine";
import Button from "../../../../components/button/Button";
import s from "../newApplied/NewApplied.module.scss";
import ss from "./AppliedTemplate.module.scss";

export const AppliedTemplate = () => {
  return (
    <>
      <div className={ss.table_content}>
        <div className={s.table_title}>
          <p className={s.first_p}>№</p>
          <p className={s.three_hundred_fifty}>ФИО</p>
          <p className={s.hundred_fifty}>Пол</p>
          <p className={s.hundred_fifty}>Возраст</p>
          <p className={s.two_hundred_fifty}>Клуб</p>
          <div className={s.two_hundred_fifty_double}>
            <p className={s.fifty_first}>Цюань шу</p>
            <p className={s.fifty}>Название комплекса</p>
          </div>
          <div className={s.two_hundred_fifty_double}>
            <p className={s.fifty_first}>Цисе</p>
            <p className={s.fifty}>Название комплекса</p>
          </div>
          <div className={s.five_hundred}>
            <p className={s.top}>Тайцзи цюань</p>
            <span className={s.under}>
              <p className={s.under_first}>Цюань шу</p>
              <p className={s.under_second}>Цисе </p>
            </span>
          </div>
          <p className={s.three_hundred_fifty}>
            Дуйлянь <br /> (ФИО партнера)
          </p>
          <p className={s.two_hundred_fifty}>
            Групповые выступления <br /> (№ команды)
          </p>
          <p className={s.three_hundred_fifty}>Примечание</p>
        </div>
        <AppliedLine
          fullName=""
          club=" "
          gender=""
          age=""
          complex=""
          secondComplex=""
          tsuanshu=""
          tsise=""
          partnerName=""
          numberOfteam=""
          note=""
        />
        <AppliedLine
          fullName=""
          club=""
          gender=""
          age=""
          complex=""
          secondComplex=""
          tsuanshu=""
          tsise=""
          partnerName=""
          numberOfteam=""
          note=""
        />
        <AppliedLine
          fullName=""
          club=""
          gender=""
          age=""
          complex=""
          secondComplex=""
          tsuanshu=""
          tsise=""
          partnerName=""
          numberOfteam=""
          note=""
        />
      </div>
      <div className={ss.center}>
        <Button width="600px" text="СОХРАНИТЬ" />
      </div>
    </>
  );
};
