import React from "react";
import { useSelector } from "react-redux";
import { AppliedLine } from "../../../../components/appliedLine/AppliedLine";
import BackButton from "../../../../components/arrowButton/BackButton";
import Input from "../../../../components/input/Input";
import s from "../newApplied/NewApplied.module.scss";
import ss from "./HistoryOfApplied.module.scss"

export const DetailedInfoForHistoryOfApplied = () => {
  const applicationById = useSelector(state=>state.application.applicationById)
  // const applicationId = useSelector(state=>state.application.applicationById.id)
  const status = useSelector(state=>state.application.statusById)
  return (
    <div className={s.content_table}>
    <BackButton to="/main/applied/historyOfApplied"/>
      <div className={s.top_blank}>
        <p className={s.blank_title}>Заявка на соревнования</p>
        <p className={s.applied_number}>Заявка № {applicationById.id}</p>
          <p className={s.p_medium}>Заявка на {applicationById.event?.name}</p>
          <p className={s.p_medium}>{applicationById.trainer?.surname} {applicationById.trainer?.name}</p>
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
          {status==="resolved"?applicationById.application_athlete.map((el, index)=>(
            <AppliedLine
              key={index}
              fullName={el.athlete.surname +" "+ el.athlete.name}
              club="Золотой Дракон"
              gender={el.athlete.sex==="1"?"Женщина":"Мужчина"}
              age="18"
              complex="Золотой Дракон"
              secondComplex={el.athlete.surname}
              tsuanshu="Золотой Дракон"
              tsise="Золотой Дракон"
              partnerName="Золотой Дракон"
              numberOfteam={el.team_number}
              note={el.comment}
              number={index+1}
            />
            )):<p>loading...</p>}
          <div className="margin_for_scroll"></div>
        </div>
        
      <div className={ss.center}>
        <p>
        Заявка не принята, опишите причину.
        </p>
        <Input
          value={applicationById.comment}
          valueLabel="Причина отклонения"
          width="600px"
        />
      </div>
    </div>
  );
};
