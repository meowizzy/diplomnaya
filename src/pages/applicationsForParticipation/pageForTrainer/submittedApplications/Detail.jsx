import React from 'react'
import { useSelector } from 'react-redux'
import { AppliedLine } from '../../../../components/appliedLine/AppliedLine'
import BackButton from '../../../../components/arrowButton/BackButton'
import s from "../../pageForSecretary/newApplied/NewApplied.module.scss"

export const Detail = () => {
  const appl = useSelector(state=>state.application)
  console.log(appl.applicationById)
  return (
    <div className={s.content_table}>
    <BackButton to="/main/application/submittedApplications"/>
      <div className={s.top_blank}>
        <p className={s.blank_title}>{appl?.applicationById.event?.name}</p>
        <p className={s.applied_number}>{appl?.applicationById.event?.start_datetime}</p>
        <p className={s.p_medium}>День первый</p>
        <p className={s.p_medium}>29 июня</p>
      </div>
    <div>
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
        {appl.statusById === "resolved" ? (
            appl.applicationById.application_athlete.map((el, index) => (
              <AppliedLine
                key={index}
                fullName={el.athlete.name}
                club={el.athlete.club.name}
                gender={el.athlete.sex === "1" ? "Женщина" : "Мужчина"}
                age={el.athlete.age}
                complex={""}
                secondComplex={"Традиционная"}
                tsuanshu={""}
                tsise={""}
                partnerName={appl.applicationById.dueling_partner}
                numberOfteam={appl.applicationById.team_number}
                number={index + 1}
                note={appl.applicationById.note}
              />
            ))
          ) : (
            <p>loading...</p>
          )}
      </div>
      </div>
    </div>
  )
}
