import React, { useEffect, useState } from 'react'
import { AppliedLine } from '../../../../components/appliedLine/AppliedLine'
import BackButton from '../../../../components/arrowButton/BackButton'
import Button from '../../../../components/button/Button'
import SuccessModal from '../../../../components/modals/SuccessModal'
import { ThreeDot } from '../../../../components/threeDot/ThreeDot'
import s from '../../pageForSecretary/newApplied/NewApplied.module.scss'
import ss from './CurrentApplications.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { deleteApplication } from '../../../../redux/slices/applicationSlice'
import { useNavigate } from 'react-router'

export const DetailCurrent = () => {
    const [state, setState] = useState(false)
  
    const appl = useSelector(state=>state.application)
    console.log(appl.applicationById)
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);
    const navigate = useNavigate()
    const back = () =>{
      navigate("/main/application/currentApplications")
    }
  return (
    <div className={s.content_table}>
      <ThreeDot
        text="Вы уверены, что хотите удалить данную заявку?"
        onClick={() => setState(!state)}
        take={deleteApplication}
        id={appl.applicationById.id}
        status={appl.statusById}
        back={back}
        // open={handleOpenSuccessModal}
      />
      <BackButton to="/main/application/currentApplications" />
      <div className={s.top_blank}>
        {state && <p className={ss.edit_applied}>Редактировать заявку</p>}
        <p className={s.blank_title}>{appl?.applicationById.event?.name}</p>
        <p className={s.applied_number}>
          {appl?.applicationById.event?.start_datetime}
        </p>
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
              <p className={s.fifty}>
                {/* {appl.applicationById.cise
                  ? appl.applicationById.discipline.category === 1 &&
                    appl.applicationById.discipline.is_individual === true &&
                    appl.applicationById.discipline.with_weapon === true && (
                      "Традиционная, одиночный, с оружием"
                    ):"Название комплекса"?
                    appl.applicationById.discipline.category === 1 &&
                    appl.applicationById.discipline.is_individual === false &&
                    appl.applicationById.discipline.with_weapon === false && (
                      "Традиционная, не одиночная, без оружием"
                    ) :"Название комплекса"?
                    appl.applicationById.discipline.category === 1 &&
                    appl.applicationById.discipline.is_individual === true &&
                    appl.applicationById.discipline.with_weapon === false && (
                     "Традиционная, одиночная, без оружием"
                    ) :"Название комплекса"?
                    appl.applicationById.discipline.category === 1 &&
                    appl.applicationById.discipline.is_individual === false &&
                    appl.applicationById.discipline.with_weapon === true && (
                      "Традиционная, не одиночная, с оружием"
                    ) :"Название комплекса"?
                    appl.applicationById.discipline.category === 2 &&
                    appl.applicationById.discipline.is_individual === true &&
                    appl.applicationById.discipline.with_weapon === true && (
                      "Спортивное, одиночный, с оружием"
                    ) :"Название комплекса"?
                    appl.applicationById.discipline.category === 2 &&
                    appl.applicationById.discipline.is_individual === false &&
                    appl.applicationById.discipline.with_weapon === false && (
                      "Спортивное, не одиночная, без оружием"
                    ) :"Название комплекса"?
                    appl.applicationById.discipline.category === 2 &&
                    appl.applicationById.discipline.is_individual === true &&
                    appl.applicationById.discipline.with_weapon === false && (
                     "Спортивное, одиночная, без оружием"
                    ) :"Название комплекса"?
                    appl.applicationById.discipline.category === 2 &&
                    appl.applicationById.discipline.is_individual === false &&
                    appl.applicationById.discipline.with_weapon === true && (
                  "Спортивное, не одиночная, с оружием"
                    ) :"Название комплекса"?
                    appl.applicationById.discipline.category === 3 &&
                    appl.applicationById.discipline.is_individual === true &&
                    appl.applicationById.discipline.with_weapon === true && (
                      "Дуэлянь, одиночный, с оружием"
                    ) :"Название комплекса"?
                    appl.applicationById.discipline.category === 3 &&
                    appl.applicationById.discipline.is_individual === false &&
                    appl.applicationById.discipline.with_weapon === false && (
                     " Дуэлянь, не одиночная, без оружием"
                    ) :"Название комплекса"?
                    appl.applicationById.discipline.category === 3 &&
                    appl.applicationById.discipline.is_individual === true &&
                    appl.applicationById.discipline.with_weapon === false && (
                     " Дуэлянь, одиночная, без оружием"
                    ) :"Название комплекса"?
                    appl.applicationById.discipline.category === 3 &&
                    appl.applicationById.discipline.is_individual === false &&
                    appl.applicationById.discipline.with_weapon === true && (
                    "  Дуэлянь, не одиночная, с оружием"
                    )
                  : "Название комплекса"} */}
                Название комплекса
              </p>
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
      {state && (
        <div className={ss.bottom_btn}>
          <Button
            width="600px"
            text="СОХРАНИТЬ"
            onClick={() => setOpenSuccessModal(!openSuccessModal)}
            margin="42px 0 0"
          />
        </div>
      )}
      {openSuccessModal && (
        <SuccessModal
          open={openSuccessModal}
          handleClose={handleCloseSuccessModal}
          title="Вы успешно подали заявку на соревнование!"
        />
      )}
    </div>
  );
}
