import React, { useState } from 'react'
import { AppliedLine } from '../../../../components/appliedLine/AppliedLine';
import BackButton from '../../../../components/arrowButton/BackButton';
import Button from '../../../../components/button/Button';
import ButtonForActiveChanges from '../../../../components/buttonForActiveChanges/ButtonForActiveChanges';
import Input from '../../../../components/input/Input';
import s from './NewApplied.module.scss'
import { useFormik } from "formik";


export const DetailedInfoForNewApplied = () => {

  const [state, setState] = useState(false)

  const toggle = () =>{
    setState(!state)
  }

  const formik = useFormik({
    initialValues: {
      explanation: "",
    },
    onSubmit: (values) => {
      console.log(values)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={s.content_table}>
        <BackButton to="/main/applied/newApplied" />
        <div className={s.top_blank}>
          <p className={s.blank_title}>Заявка на соревнования</p>
          <p className={s.applied_number}>Заявка № 1</p>
          <p className={s.p_medium}>Заявка на чемпионат ушу в Бишкеке</p>
          <p className={s.p_medium}>Александр Сергеевич Пушкин</p>
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
              number="1"
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
              number="2"
              note="Золотой Дракон"
            />
            <div className="margin_for_scroll"></div>
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
            />
          </div>
        ) : (
          <div className={s.second_footer}>
            <p className={s.accept}>Заявка не принята, опишите причину.</p>
            <Input
              value={formik.values.explanation}
              onChange={formik.handleChange}
              valueLabel="Причина отклонения"
              name="explanation"
              width="600px"
            />
            <Button
              text="ОТПРАВИТЬ"
              width="600px"
              margin="40px 0"
              onClick={toggle}
              disabled={!(formik.values.explanation)}
              type="submit"
            />
          </div>
        )}
      </div>
    </form>
  );
}
