import React, { useState } from 'react'
import { AppliedLine } from '../../../../components/appliedLine/AppliedLine'
import BackButton from '../../../../components/arrowButton/BackButton'
import Button from '../../../../components/button/Button'
import SuccessModal from '../../../../components/modals/SuccessModal'
import { ThreeDot } from '../../../../components/threeDot/ThreeDot'
import s from '../../pageForSecretary/newApplied/NewApplied.module.scss'
import ss from './CurrentApplications.module.scss'

export const DetailCurrent = () => {
    const [state, setState] = useState(false)

    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const handleOpenSuccessModal = () => setOpenSuccessModal(true);
    const handleCloseSuccessModal = () => setOpenSuccessModal(false);
  return (
    <div className={s.content_table}>
      <ThreeDot
        text="Вы уверены, что хотите удалить данную заявку?"
        onClick={() => setState(!state)}
      />
      <BackButton to="/main/application/currentApplications" />
      <div className={s.top_blank}>
        {state && <p className={ss.edit_applied}>Редактировать заявку</p>}
        <p className={s.blank_title}>
          Чемпионат Кыргызской Респубики по традиционному ушу
        </p>
        <p className={s.applied_number}>29.06.2022г. - 30.06.2022г.</p>
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
        </div>
      </div>
      {state && (
        <div className={ss.bottom_btn}>
          <Button width="600px" text="СОХРАНИТЬ" onClick={()=>setOpenSuccessModal(!openSuccessModal)}/>
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
