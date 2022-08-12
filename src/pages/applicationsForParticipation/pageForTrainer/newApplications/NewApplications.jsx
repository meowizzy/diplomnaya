import React, {useState} from 'react'
import { AppliedLine } from '../../../../components/appliedLine/AppliedLine'
import ss from './NewApplications.module.scss'
import s from '../../pageForSecretary/newApplied/NewApplied.module.scss'
import sss from '../../../../components/appliedLine/AppliedLine.module.scss'
import Button from '../../../../components/button/Button'
import SuccessModal from '../../../../components/modals/SuccessModal'
import { useFormik } from 'formik'
import { AppliedLineLogic } from '../../../../components/appliedLine/AppliedLineLogic'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAthletes } from '../../../../redux/slices/athletesSlice'
import { list_img } from '../../../../images'
import { postApplication } from '../../../../redux/slices/applicationSlice'

export const NewApplications = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAthletes())
  },[])
  const athletes = useSelector(state=>state.athletes.athletes)
  const applicationById = useSelector(state=>state.application.applicationTemplateId)
  // console.log(applicationById.event.id)
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const handleOpenSuccessModal = () => setOpenSuccessModal(true);
  const handleCloseSuccessModal = () => setOpenSuccessModal(false);
  const [openList, setOpenList] = useState(false)
  const [openListSex, setOpenListSex] = useState(false)
  const [openListDueling, setOpenListDueling] = useState(false)
  // const time = moment().format();
  // console.log(time)

  // const example = { application_athlete:{
  //   athlete:{
  //     age:"",
  //     club:{
  //       name:""
  //     },
  //     name:"",
  //     sex:"",
  //     surname:"",
  //     gender:""
  //   },
  //   id:null
  // },
  //   cuanshu:false,
  //   cise:false,
  //   taizi_cuanshu:false,
  //   taizi_cise:false,
  //   dueling_partner:"",
  //   team_number:null,
  //   note:"",
  //   dueling_partner__name:"",
  //   discipline:"", 
  //   trainer:"",
  //   event:applicationById.event.id,
  // }

  const [application, setApplication] = useState({
    application_athlete:{
      athlete:{
        age:"",
        club:{
          name:""
        },
        name:"",
        sex:"",
        surname:"",
        gender:""
      },
      id:null
    },
      cuanshu:false,
      cise:false,
      taizi_cuanshu:false,
      taizi_cise:false,
      dueling_partner:"",
      team_number:null,
      note:"",
      dueling_partner__name:"",
      discipline:"",
      trainer:"",
      event:""
  }) 
  const onChange = (type, value, sex) =>{
  if (type==="id"){
      // console.log(value)
      setApplication({
      ...application,
      application_athlete: {
        ...application.application_athlete, id:value.id,
        athlete: {
          ...application.application_athlete.athlete,
          name: value.name, surname:value.surname, club:{...application.application_athlete.athlete.club, name:value.club.name}, age:value.age
        },
      },
    })}
    else if (type==="sex"){
      // console.log(value)
      setApplication({
      ...application,
      application_athlete: {
        ...application.application_athlete,
        athlete: {
          ...application.application_athlete.athlete,
          sex: value,
          gender:sex,
        },
      },
    })}
    else if (type==="dueling"){
      // console.log(value)
      setApplication({
      ...application, dueling_partner:value.id, dueling_partner__name:value.name, 
    })}
    else if (type==="note"){
      // console.log(value)
      setApplication({
      ...application, note:value
    })}
    else if (type==="team_number"){
      // console.log(value)
      setApplication({
      ...application, team_number:value
    })}
    else if (type==="cuanshu"){
      // console.log(value)
      setApplication({
      ...application, cuanshu:value, cise:false, taizi_cise:false, taizi_cuanshu:false
    })}
    else if (type==="cise"){
      // console.log(value)
      setApplication({
      ...application, cise:value, cuanshu:false, taizi_cise:false, taizi_cuanshu:false
    })}
    else if (type==="taizi_cuanshu"){
      // console.log(value)
      setApplication({
      ...application, taizi_cuanshu:value, cuanshu:false, taizi_cise:false, cise:false
    })}
    else if (type==="taizi_cise"){
      // console.log(value)
      setApplication({
      ...application, taizi_cise:value, cuanshu:false, taizi_cuanshu:false, cise:false
    })}
  }
  // const arr = [application]
  const formik = useFormik({
    initialValues: {...application},
    onSubmit: (values) => {
      setApplication({
        ...application, event:applicationById.event.id
      })
      alert(JSON.stringify(values, null, 2));
      const data = {values, handleOpenSuccessModal}
      dispatch(postApplication(data))
    },
  });

  console.log(application)

  // const plus =()=>{
  //   arr.push(example)
  // }
  
  return (
    <div className={ss.content}>
      <p className={ss.title}>Заполнить заявку</p>

      <p className={ss.event_name}>{applicationById.event?.name}</p>
      <p className={ss.event_date}>{applicationById.event?.start_datetime}</p>
      <div className={ss.table_content}>
        <div className={s.table_title}>
          <p className={s.first_p}>№</p>

          <p className={s.three_hundred_fifty}>ФИО </p>

          <p className={s.hundred_fifty}>Пол</p>
          <p className={s.hundred_fifty}>Возраст</p>
          <p className={s.two_hundred_fifty}>Клуб</p>
          <div className={s.two_hundred_fifty_double}>
            <p className={s.fifty_first}>Цюань шу</p>
            <p className={s.fifty}>
              {applicationById.discipline_1 === 1 && "Традиционное"}
              {applicationById.discipline_1 === 2 && "Спортивное"}
              {applicationById.discipline_1 === 3 && "Дуэлянь"}
            </p>
          </div>
          <div className={s.two_hundred_fifty_double}>
            <p className={s.fifty_first}>Цисе</p>
            <p className={s.fifty}>
              {applicationById.discipline_2 === 1 && "Традиционное"}
              {applicationById.discipline_2 === 2 && "Спортивное"}
              {applicationById.discipline_2 === 3 && "Дуэлянь"}
            </p>
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
          <div className={sss.table_title} >
            <p className={sss.first_p}>1</p>
            <div className={sss.three_hundred_fifty}>
              <input
                placeholder="ФИО спортсмена"
                value={
                  application.application_athlete.athlete.surname
                }
                onChange={(e) => onChange("name", e.target.value)}
                name="name"
                readOnly
              />
              <img
                src={list_img}
                className={ss.list_img__}
                onClick={() => setOpenList(!openList)}
              />
              {openList === true && (
                <div className={ss.cont_radio__}>
                  {athletes.map((el, index) => (
                    <label className={s.radio__} key={index}>
                      <p onClick={() => onChange("id", el)}>
                        {el.surname} {el.name}
                      </p>
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div className={sss.hundred_fifty}>
              <input
                placeholder="Пол"
                // value={formik.values.gender}
                value={application.application_athlete.athlete.gender}
                onChange={(e) => onChange("sex", e.target.value)}
                readOnly
                name="gender"
              />
              <img
                src={list_img}
                className={ss.list_img__}
                onClick={() => setOpenListSex(!openListSex)}
              />
              {openListSex === true && (
                <div className={ss.cont_radio__}>
                  <label className={s.radio__}>
                    <p
                      onClick={() => onChange("sex", 1, "Женщина")}
                      style={{ width: "150px" }}
                    >
                      Женщина
                    </p>
                  </label>
                  <label className={s.radio__}>
                    <p
                      onClick={() => onChange("sex", 2, "Мужчина")}
                      style={{ width: "150px" }}
                    >
                      Мужчина
                    </p>
                  </label>
                </div>
              )}
            </div>
            <input
              placeholder="Возраст"
              className={sss.hundred_fifty}
              // value={formik.values.age}
              value={application.application_athlete.athlete.age}
              onChange={(e) => onChange("age", e.target.value)}
              readOnly
              name="age"
            />
            <input
              placeholder="Название клуба"
              className={sss.two_hundred_fifty}
              // value={formik.values.club}
              value={application.application_athlete.athlete.club.name}
              onChange={(e) => onChange("club", e.target.value)}
              readOnly
              name="club"
            />
            <div className={sss.two_hundred_fifty}>
              <input
                placeholder="Название комплекса"
                type="radio"
                // value={formik.values.complex}
                value={application.cuanshu}
                onChange={() => onChange("cuanshu", true)}
                name="complex"
              />
            </div>
            <div className={sss.two_hundred_fifty}>
              <input
                placeholder="Название комплекса"
                type="radio"
                // value={formik.values.secondComplex}
                value={application.cise}
                onChange={() => onChange("cise", true)}
                name="complex"
              />
            </div>
            <div className={sss.five_hundred}>
              <span className={sss.under}>
                <div className={sss.under_first}>
                  <input
                    placeholder="Название комплекса"
                    type="radio"
                    // value={formik.values.tsuanshu}
                    value={application.taizi_cuanshu}
                    onChange={(e) => onChange("taizi_cuanshu", true)}
                    name="complex"
                  />
                </div>
                <div className={sss.under_second}>
                  <input
                    placeholder="Название комплекса"
                    type="radio"
                    // value={formik.values.tsise}
                    value={application.taizi_cise}
                    onChange={(e) => onChange("taizi_cise", true)}
                    name="complex"
                  />
                </div>
              </span>
            </div>
            <div className={sss.three_hundred_fifty}>
              <input
                placeholder="ФИО партнера"
                // value={formik.values.partnerName}
                value={application.dueling_partner__name}
                onChange={(e) => onChange("dueling_partner", e.target.value)}
                name="dueling_partner"
              />
              <img
                src={list_img}
                className={ss.list_img__}
                onClick={() => setOpenListDueling(!openListDueling)}
              />
              {openListDueling === true && (
                <div className={ss.cont_radio__}>
                  {athletes.map((el, index) => (
                    <label className={s.radio__} key={index}>
                      <p onClick={() => onChange("dueling", el)}>
                        {el.surname} {el.name}
                      </p>
                    </label>
                  ))}
                </div>
              )}
            </div>
            <input
              placeholder="Номер команды"
              className={sss.two_hundred_fifty}
              // value={formik.values.numberOfteam}
              value={application.team_number}
              onChange={(e) => onChange("team_number", e.target.value)}
              name="team_number"
              type="number"
            />

            <input
              placeholder="Введите текст"
              className={sss.three_hundred_fifty}
              // value={formik.values.note}
              value={application.note}
              onChange={(e) => onChange("note", e.target.value)}
              name="note"
            />
          </div>
  
        {/* <AppliedLineLogic
          fullName={application_athlete.athlete.name}
          club={application_athlete.athlete.club.name}
          sex={formik.values.application_athlete.forEach(el=>(el.athlete.sex))}
          age={formik.values.application_athlete.forEach(el=>(el.athlete.age))}
          complex={formik.values.complex}
          secondComplex={formik.values.secondComplex}
          tsuanshu={formik.values.tsuanshu}
          tsise={formik.values.tsise}
          partnerName={formik.values.dueling_partner}
          numberOfteam={formik.values.team_number}
          number="1"
          note={formik.values.note}
          // // handleChange={formik.handleChange}
          handleSubmit={formik.handleSubmit}
        /> */}

        <div className={ss.for_scroll}></div>
      </div>
      <div className={ss.center}>
        <Button
          text="ДОБАВИТЬ СТРОКУ"
          width="600px"
          margin="70px auto 180px"
          // onClick={plus}
        />
        <Button
          text="ПОДАТЬ ЗАЯВКУ"
          width="600px"
          onClick={formik.handleSubmit}
        />
      </div>
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
