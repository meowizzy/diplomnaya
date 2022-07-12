import React, {useState} from 'react'
import { AppliedLine } from '../../../../components/appliedLine/AppliedLine'
import ss from './NewApplications.module.scss'
import s from '../../pageForSecretary/newApplied/NewApplied.module.scss'
import Button from '../../../../components/button/Button'
import SuccessModal from '../../../../components/modals/SuccessModal'

export const NewApplications = () => {
  
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const handleOpenSuccessModal = () => setOpenSuccessModal(true);
  const handleCloseSuccessModal = () => setOpenSuccessModal(false);

  return (
    <div className={ss.content}>
      <p className={ss.title}>Заполнить заявку</p>
     
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
         
    <div className={ss.for_scroll}></div>
    </div>
    <div className={ss.center}>
      <Button text='ДОБАВИТЬ СТРОКУ' width="600px" disabled margin="70px auto 180px"/>
      <Button text='ПОДАТЬ ЗАЯВКУ' width="600px" onClick={()=>setOpenSuccessModal(!openSuccessModal)}/>
    </div>
    {openSuccessModal && (
        <SuccessModal
          open={openSuccessModal}
          handleClose={handleCloseSuccessModal}
          title="Вы успешно подали заявку на соревнование!"
        />
      )}
    </div>
  )
}
