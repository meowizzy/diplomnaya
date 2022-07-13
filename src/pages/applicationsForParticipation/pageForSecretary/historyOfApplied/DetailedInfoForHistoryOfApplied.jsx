import React from "react";
import { AppliedLine } from "../../../../components/appliedLine/AppliedLine";
import BackButton from "../../../../components/arrowButton/BackButton";
import Input from "../../../../components/input/Input";
import s from "../newApplied/NewApplied.module.scss";
import ss from "./HistoryOfApplied.module.scss"

export const DetailedInfoForHistoryOfApplied = () => {
  return (
    <div className={s.content_table}>
    <BackButton to="/main/applied/historyOfApplied"/>
      <div className={s.top_blank}>
        <p className={s.blank_title}>Заявка на соревнования</p>
        <p className={s.applied_number}>Заявка № 1</p>
        <p className={s.p_medium}>Заявка на чемпионат ушу в Бишкеке</p>
        <p className={s.p_medium}>Александр Сергеевич Пушкин</p>
      </div>

        <div className={s.table_content}>
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
            fullName="Карина"
            club="Золотой Дракон"
            gender="Женщина"
            age="18"
            complex="Золотой Дракон"
            secondComplex="Золотой Дракон"
            tsuanshu="Золотой Дракон"
            tsise="Золотой Дракон"
            partnerName="Золотой Дракон"
            numberOfteam="Золотой Дракон"
            note="Золотой Дракон"
          />
          <AppliedLine
            fullName="Карина"
            club="Золотой Дракон"
            gender="Женщина"
            age="18"
            complex="Золотой Дракон"
            secondComplex="Золотой Дракон"
            tsuanshu="Золотой Дракон"
            tsise="Золотой Дракон"
            partnerName="Золотой Дракон"
            numberOfteam="Золотой Дракон"
            note="Золотой Дракон"
          />
          <div className="margin_for_scroll"></div>
        </div>
        
      <div className={ss.center}>
        <p>
        Заявка не принята, опишите причину.
        </p>
        <Input
          value="Не является гражданином Кыргызстана"
          valueLabel="Причина отклонения"
          width="600px"
        />
      </div>
    </div>
  );
};
