import React, {useState} from 'react'
import ss from './NewApplications.module.scss'
import s from '../../pageForSecretary/newApplied/NewApplied.module.scss'
import sss from '../../../../components/appliedLine/AppliedLine.module.scss'
import Button from '../../../../components/button/Button'
import SuccessModal from '../../../../components/modals/SuccessModal'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAthletes } from '../../../../redux/slices/athletesSlice'
import { applied_radio__checked, applied_radio__uncheked, list_img } from '../../../../images'
import {getApplicationTemplateById, postApplication} from '../../../../redux/slices/applicationSlice'
import {getDiscipline} from "../../../../redux/slices/disciplineSlice";
import {useNavigate, useParams} from "react-router";

export const NewApplications = () => {
  const eventId = localStorage.getItem('event_id')
  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const athletes = useSelector(state=>state.athletes.athletes)
  const {discipline} = useSelector(state=>state.discipline)
  const {applicationTemplateId} = useSelector(state=>state.application)
  console.log('ddd', discipline)

  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const handleOpenSuccessModal = () => setOpenSuccessModal(true);
  const handleCloseSuccessModal = () => setOpenSuccessModal(false);
  const [openList, setOpenList] = useState(false)
  const [openListDiscipline, setOpenListDiscipline] = useState(false)
  const [openListDueling, setOpenListDueling] = useState(false)
  const [disciplineName, setDisciplineName] = useState('');

  const handleIsIndividual = (el) => {
    if(el){
      return 'индивидуальный'
    }else{
      return 'командный'
    }
  }

  const handleWithWeapon = (el) => {
    if(el){
      return 'с оружием'
    }else{
      return 'без оружия'
    }
  }

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
  //   // event:applicationById.event.id,
  // }
  const [athlete, setAthlete] = useState({});


  const [application, setApplication] = useState({
    application_athlete:[],
      // cuanshu:false,
      // cise:false,
      // taizi_cuanshu:false,
      // taizi_cise:false,
      discipline: null,
      dueling_partner:"",
      team_number:null,
      note:"",
      dueling_partner__name:"",
      event: applicationTemplateId?.event?.id,
      // trainer: +userId
  })

  useEffect(()=>{
    dispatch(getAthletes())
    dispatch(getDiscipline())
    dispatch(getApplicationTemplateById(id))
  },[])
  const onChange = (type, value, sex) =>{
    console.log('value', value)
  if (type==="id"){
    setAthlete(
      value
    )
    setApplication({
      ...application,
      application_athlete: [...application.application_athlete, {athlete: value.id}],
      event: applicationTemplateId.event.id
    })
      // console.log(value)
      // setApplication({
      // ...application,
      // application_athlete: [...application.application_athlete, {athlete: value}]
      //   {
      //   ...application.application_athlete, id:value.id,
      //   athlete: value
      //   application.application_athlete?.id
      //     {
      //     ...application.application_athlete.athlete,
      //     name: value.name, surname:value.surname, sex:value.sex, club:{...application.application_athlete.athlete.club, name:value.club.name}, age:value.age
      //   },
      // },
    // })
  }
    else if (type==="sex"){
      setAthlete({...athlete, sex: 'value', gender: sex})
      console.log("kkj",value)
    //   setApplication({
    //   ...application,
    //   application_athlete: {
    //     ...application.application_athlete,
    //     athlete: {
    //       ...application.application_athlete.athlete,
    //       sex: value,
    //       gender:sex,
    //     },
    //   },
    // })
  }
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
    else if (type==="discipline"){
      // console.log(value)
    setDisciplineName(value.category, handleIsIndividual(value.is_individual), handleWithWeapon(value. with_weapon))
      setApplication({
      ...application, discipline: value.id
    })}
    // else if (type==="cise"){
    //   // console.log(value)
    //   setApplication({
    //   ...application, cise:value, cuanshu:false, taizi_cise:false, taizi_cuanshu:false
    // })}
    // else if (type==="taizi_cuanshu"){
    //   // console.log(value)
    //   setApplication({
    //   ...application, taizi_cuanshu:value, cuanshu:false, taizi_cise:false, cise:false
    // })}
    // else if (type==="taizi_cise"){
    //   // console.log(value)
    //   setApplication({
    //   ...application, taizi_cise:value, cuanshu:false, taizi_cuanshu:false, cise:false
    // })}
  }
  // const arr = [application]
  const formik = useFormik({
    initialValues: {application},
    enableReinitialize:true,
    onSubmit: (values) => {
      // setApplication({
      //   event:applicationById.event.id, application_athlete: [{athlete: 3}], ...application
      // })
      const data = {values: application, handleOpenSuccessModal, handleCloseSuccessModal, navigate}
      dispatch(postApplication(data))
      // alert(JSON.stringify(values, null, 2));
      console.log("ll",values.application)
    },
  });

  // console.log(application)

  // const plus =()=>{
  //   // arr.push(example)
  //   formik.setFieldValue()
  // }
  
  return (
    <div className={ss.content}>
      <p className={ss.title}>Заполнить заявку</p>

      <p className={ss.event_name}>{applicationTemplateId.event?.name}</p>
      <p className={ss.event_date}>{applicationTemplateId.event?.start_datetime}</p>
      <div className={ss.table_content}>
        <div className={s.table_title}>
          <p className={s.first_p}>№</p>

          <p className={s.three_hundred_fifty}>ФИО </p>

          <p className={s.hundred_fifty}>Пол</p>
          <p className={s.hundred_fifty}>Возраст</p>
          <p className={s.two_hundred_fifty}>Клуб</p>
          {/*<div className={s.two_hundred_fifty_double}>*/}
          {/*  <p className={s.fifty_first}>Цюань шу</p>*/}
          {/*  <p className={s.fifty}>*/}
          {/*    {applicationById.discipline_1 === 1 && "Традиционное"}*/}
          {/*    {applicationById.discipline_1 === 2 && "Спортивное"}*/}
          {/*    {applicationById.discipline_1 === 3 && "Дуэлянь"}*/}
          {/*  </p>*/}
          {/*</div>*/}
          {/*<div className={s.two_hundred_fifty_double}>*/}
          {/*  <p className={s.fifty_first}>Цисе</p>*/}
          {/*  <p className={s.fifty}>*/}
          {/*    {applicationById.discipline_2 === 1 && "Традиционное"}*/}
          {/*    {applicationById.discipline_2 === 2 && "Спортивное"}*/}
          {/*    {applicationById.discipline_2 === 3 && "Дуэлянь"}*/}
          {/*  </p>*/}
          {/*</div>*/}
          {/*<div className={s.five_hundred}>*/}
          {/*  <p className={s.top}>Тайцзи цюань</p>*/}
          {/*  <span className={s.under}>*/}
          {/*    <p className={s.under_first}>Цюань шу</p>*/}
          {/*    <p className={s.under_second}>Цисе </p>*/}
          {/*  </span>*/}
          {/*</div>*/}
          <p className={s.three_hundred_fifty}>
            Дисциплина
          </p>
          <p className={s.three_hundred_fifty}>
            Дуйлянь <br /> (ФИО партнера)
          </p>
          <p className={s.two_hundred_fifty}>
            Групповые выступления <br /> (№ команды)
          </p>
          <p className={s.three_hundred_fifty}>Примечание</p>
        </div>
        <div className={sss.table_title}>
          <p className={sss.first_p}>1</p>
          <div className={sss.three_hundred_fifty}>
            <input
              placeholder="ФИО спортсмена"
              value={athlete?.surname}
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
              value={
                athlete?.sex === 1
                  ? "Женщина"
                  : athlete?.sex === 2
                  ? "Мужчина"
                  : ""
              }
              onChange={(e) => onChange("sex", e.target.value)}
              readOnly
              name="gender"
            />
          </div>
          <input
            placeholder="Возраст"
            className={sss.hundred_fifty}
            // value={formik.values.age}
            value={athlete?.age}
            onChange={(e) => onChange("age", e.target.value)}
            readOnly
            name="age"
          />
          <input
            placeholder="Название клуба"
            className={sss.two_hundred_fifty}
            // value={formik.values.club}
            value={athlete?.club?.name}
            onChange={(e) => onChange("club", e.target.value)}
            readOnly
            name="club"
          />
          {/*<div className={sss.two_hundred_fifty}>*/}
          {/*  {application.cuanshu ? (*/}
          {/*    <img*/}
          {/*      src={applied_radio__checked}*/}
          {/*      onClick={() => onChange("cuanshu", true)}*/}
          {/*      className={ss.check}*/}
          {/*    />*/}
          {/*  ) : (*/}
          {/*    <img*/}
          {/*      src={applied_radio__uncheked}*/}
          {/*      className={ss.check}*/}
          {/*      onClick={() => onChange("cuanshu", true)}*/}
          {/*    />*/}
          {/*  )}*/}
          {/*</div>*/}
          {/*<div className={sss.two_hundred_fifty}>*/}
          {/*{application.cise ? (*/}
          {/*    <img*/}
          {/*      src={applied_radio__checked}*/}
          {/*      className={ss.check}*/}
          {/*      onClick={() => onChange("cise", true)}*/}
          {/*    />*/}
          {/*  ) : (*/}
          {/*    <img*/}
          {/*      src={applied_radio__uncheked}*/}
          {/*      className={ss.check}*/}
          {/*      onClick={() => onChange("cise", true)}*/}
          {/*    />*/}
          {/*  )}*/}
          {/*</div>*/}
          {/*<div className={sss.five_hundred}>*/}
          {/*  <span className={sss.under}>*/}
          {/*    <div className={sss.under_first}>*/}
          {/*    {application.taizi_cuanshu ? (*/}
          {/*    <img*/}
          {/*      src={applied_radio__checked}*/}
          {/*      className={ss.check}*/}
          {/*      onClick={() => onChange("taizi_cuanshu", true)}*/}
          {/*    />*/}
          {/*  ) : (*/}
          {/*    <img*/}
          {/*      src={applied_radio__uncheked}*/}
          {/*      className={ss.check}*/}
          {/*      onClick={() => onChange("taizi_cuanshu", true)}*/}
          {/*    />*/}
          {/*  )}*/}
          {/*    </div>*/}
          {/*    <div className={sss.under_second}>*/}
          {/*    {application.taizi_cise ? (*/}
          {/*    <img*/}
          {/*      src={applied_radio__checked}*/}
          {/*      className={ss.check}*/}
          {/*      onClick={() => onChange("taizi_cise", true)}*/}
          {/*    />*/}
          {/*  ) : (*/}
          {/*    <img*/}
          {/*      src={applied_radio__uncheked}*/}
          {/*      className={ss.check}*/}
          {/*      onClick={() => onChange("taizi_cise", true)}*/}
          {/*    />*/}
          {/*  )}*/}
          {/*    </div>*/}
          {/*  </span>*/}
          {/*</div>*/}
          <div className={sss.three_hundred_fifty}>
            <input
              placeholder="Дисциплина"
              // value={formik.values.partnerName}
              value={disciplineName}
              onChange={(e) => onChange("dueling_partner", e.target.value)}
              name="dueling_partner"
            />
            <img
              src={list_img}
              className={ss.list_img__}
              onClick={() => setOpenListDiscipline(!openListDiscipline)}
            />
            {openListDiscipline === true && (
              <div className={ss.cont_radio__}>
                {discipline.map((el, index) => (
                  <label className={s.radio__} key={index}>
                    <p onClick={() => onChange("discipline", el)}>
                      {el.category}, {handleIsIndividual(el.is_individual)}, {handleWithWeapon(el. with_weapon)}
                    </p>
                  </label>
                ))}
              </div>
            )}
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

        <div className={ss.for_scroll}></div>
      </div>
      <div className={ss.center}>
        <Button
          text="ДОБАВИТЬ СТРОКУ"
          width="600px"
          // margin="70px auto 180px"
          // onClick={plus}
        />
        <Button
          text="ПОДАТЬ ЗАЯВКУ"
          width="600px"
          onClick={formik.handleSubmit}
          margin="0px auto 0px"
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
