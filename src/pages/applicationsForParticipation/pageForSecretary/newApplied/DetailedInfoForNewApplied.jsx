import React, { useState } from 'react'
import { AppliedLine } from '../../../../components/appliedLine/AppliedLine';
import BackButton from '../../../../components/arrowButton/BackButton';
import Button from '../../../../components/button/Button';
import ButtonForActiveChanges from '../../../../components/buttonForActiveChanges/ButtonForActiveChanges';
import Input from '../../../../components/input/Input';
import s from './NewApplied.module.scss'
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { editApplication } from '../../../../redux/slices/applicationSlice';

 
export const DetailedInfoForNewApplied = () => {
  const applicationById = useSelector(state=>state.application.applicationById)
  const applicationId = useSelector(state=>state.application.applicationById.id)
  const status = useSelector(state=>state.application.statusById)
  // console.log(applicationId)

  const [choise, setChoise] = useState({is_confirmed:true, applicationId:applicationId })
  const [state, setState] = useState(false)
  const [place, setPlace] = useState(false)
  const toggle = () =>{
    setState(!state)
    // else {return setChoise({is_confirmed:true})}
  }
  // console.log(choise)
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {choise, comment:{comment:'', applicationId:applicationId}},
    onSubmit: (values) => {
      const data = {values, state}
      dispatch(editApplication(data))
      setPlace(true)
      // console.log(values)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={s.content_table}>
        <BackButton to="/main/applied/newApplied" />
        <div className={s.top_blank}>
          <p className={s.blank_title}>Заявка на соревнования</p>
          <p className={s.applied_number}>Заявка № {applicationById.id}</p>
          <p className={s.p_medium}>Заявка на {applicationById.event?.name}</p>
          <p className={s.p_medium}>{applicationById.trainer?.surname} {applicationById.trainer?.name}</p>
        </div>
        <div>
          <div className={s.table_content}>
            <div>
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
          </div>
        </div>
        {state === false ? (
          <div className={s.footer}>
            <p className={s.accept}>Принять заявку?</p>
            <ButtonForActiveChanges
              text="НЕТ"
              margin="0 0"
              width="210px"
              onClick={toggle}
              classname="yes_button"
            />
            <ButtonForActiveChanges
              text="ДА"
              margin="0 30px"
              width="210px"
              classname="no_button"
              name="is_confirmed"
              onClick={formik.handleSubmit}
              type="submit"
            />
          </div>
        ) : (
          <div className={s.second_footer}>
            {place===false?
            <>
            <p className={s.accept}>Заявка не принята, опишите причину.</p>
            <Input
              value={formik.values.comment.comment}
              onChange={formik.handleChange}
              valueLabel="Причина отклонения"
              margin="0px 0"
              width="600px"
              name="comment.comment"
            />
            <Button
              text="ОТПРАВИТЬ"
              width="600px"
              onClick={formik.handleSubmit}
              disabled={!(formik.values.comment.comment)}
              type="submit"
            />
            </>:
            <p className={s.accept}>Заявка не принята успешно!</p>
          }
          </div>
        )}
      </div>
    </form>
  );
}
