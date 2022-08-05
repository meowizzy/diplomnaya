import React, { useEffect, useState } from "react";
import Input from "../../../components/input/Input";
import { useFormik } from "formik";
import s from "./ChangeEvents.module.scss";
import Button from "../../../components/button/Button";
import BackButton from "../../../components/arrowButton/BackButton";
import { createEvent, getEvent } from "../../../redux/slices/eventSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ss from '../../register/Registr.module.scss'
import { getJudgeUser, getSecretaryUser } from "../../../redux/slices/userSlice";
import SuccessModal from "../../../components/modals/SuccessModal";
import { useNavigate } from "react-router";
import { minus } from "../../../images";

export const CreateEvents = () => {

  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const handleOpenSuccessModal = () => setOpenSuccessModal(true);
  const handleCloseSuccessModal = () => setOpenSuccessModal(false);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getJudgeUser())
    dispatch(getSecretaryUser())
  },[])

  const [judge, setJudje] = useState(false)
  const [nameJudge, setNameJudge] = useState('')
  const [judgeId, setJudgeId] = useState("")
  const clickJudge = () =>{
    setJudje(!judge)
  }
  const nameJudgeClick = (name, id) =>{
    setNameJudge(name)
    clickJudge()
    setJudgeId(id)
  }

  // console.log(judgeId)
  const [secretary, setSecretary] = useState(false)
  const [nameSecretary, setNameSecretary] = useState('')
  const [secretaryId, setSecretaryId] = useState('')
  const clickSecretary = () =>{
    setSecretary(!secretary)
  }
  const nameSecretaryClick = (name, id) =>{
    setNameSecretary(name)
    clickSecretary()
    setSecretaryId(id)
  }

  // console.log(age_groups)
  
  const judgeUser = useSelector(state=>state.user.userJudge)
  const secretaryUser = useSelector(state=>state.user.userSecretary)
  const status = useSelector(state=>state.event.status)
  const navigate=useNavigate()
  // console.log(status)
  const [age_groups, setAge_groups] = useState([{
    min_age: '5',
    max_age: '9',
    name: "dsa",
  }])
  // console.log(secretaryId)
  const formik = useFormik({
    initialValues: {
      name: "",
      finish_datetime: "",
      start_datetime:"",
      place: "",
      assistant: "6",
      lead_judge:'7',
      note: "",
      age_groups
    },
    onSubmit: (values) => {
      const data={values}
      dispatch(createEvent(data));
      if(status==="resolved"){
        handleOpenSuccessModal()
        navigate('/main/events/allEvents')
      }else{
        return console.log("dsa")
      }
      // alert(JSON.stringify(values, null, 2));
    },
  });
  
  const [state, setState] = useState({
    min_age: '',
    max_age: '',
    name: "dsa",
  })

  const plus = () =>{
    setState(age_groups.unshift(state))
    console.log(formik.values.age_groups)
  }
  const minusFunc = (index) =>{
    setState(age_groups.splice(index, 1))
    console.log(formik.values.age_groups)
  }
  // useEffect(()=>{
  //   plus()
  // },[])

  return (
    <div className={ s.cont }>
      <BackButton to="/main/events/allEvents"/>

      <p style={{ fontSize: "30px", marginBottom: "40px" }}>
        Создание мероприятие
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          placeholder="Введите название"
          valueLabel="Наименование мероприятия"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          width="600px"
        />
        <Input
          placeholder="2022-07-17T18:00:00+06:00"
          valueLabel="Введите дату начала"
          value={formik.values.start_datetime}
          onChange={formik.handleChange}
          name="start_datetime"
          width="600px"
        />
         <Input
          placeholder="2022-07-17T18:00:00+06:00"
          valueLabel="Введите дату конца"
          value={formik.values.finish_datetime}
          onChange={formik.handleChange}
          name="finish_datetime"
          width="600px"
        />
        <Input
          placeholder="Введите место"
          valueLabel="Место проведения"
          value={formik.values.place}
          onChange={formik.handleChange}
          width="600px"
          name="place"
        />
        <div className="relative">
        {judge === false?
          <>
          <Input
            placeholder="Главный судья"
            valueLabel="Информация о мероприятии - главный судья"
            value={nameJudge}
            onChange={formik.handleChange}
            width="600px"
            // name="lead_judge"
            />
            <div className={ss.list_img} onClick={clickJudge}></div>
          </>
          :
          <>
          <Input
          placeholder="Главный судья"
          valueLabel="Информация о мероприятии - главный судья"
          value={nameJudge}
          onChange={formik.handleChange}
          width="600px"
          // name="lead_judge"
          />
          <span className={ss.list_img} onClick={clickJudge}></span>
          {judgeUser.map(el=>(
          <div className={s.list}>
                <label className={s.label}>
                  {judgeId === el.id ? (
                    <p onClick={()=>nameJudgeClick(el.name, el.id)} style={{ backgroundColor: "#F3F3FF", paddingLeft:"20px" }}>
                      {el.name}
                    </p>
                  ) : (
                    <p onClick={()=>nameJudgeClick(el.name, el.id)}>
                      {el.name}
                    </p>
                  )}
                  <input
                    type="radio"
                    value={el.id}
                    onChange={formik.handleChange}
                    name="lead_judge"
                    className={s.radio}
                  />
                </label>
            </div>
          ))}
          </>
          }
      </div> 

      <div className="relative">
        {secretary === false?
          <>
          <Input
          placeholder="Секретарь"
          valueLabel="Информация о мероприятии- секретарь"
          value={nameSecretary}
          // onChange={formik.handleChange}
          width="600px"
          // name="assistant"
        />
            <div className={ss.list_img} onClick={clickSecretary}></div>
          </>
          :
          <>
          <Input
          placeholder="Секретарь"
          valueLabel="Информация о мероприятии- секретарь"
          value={nameSecretary}
          // onChange={formik.handleChange}
          width="600px"
          // name="assistant"
        />
          <span className={ss.list_img} onClick={clickSecretary}></span>
          {secretaryUser.map(el=>(
          <div className={s.list}>
                <label className={s.label}>
                  {secretaryId === el.id ? (
                    <p onClick={()=>nameSecretaryClick(el.name, el.id)} style={{ backgroundColor: "#F3F3FF" }}>
                      {el.name}
                    </p>
                  ) : (
                    <p onClick={()=>nameSecretaryClick(el.name, el.id)}>
                      {el.name}
                    </p>
                  )}
                  <input
                    type="radio"
                    value={el.id}
                    onChange={formik.handleChange}
                    name="assistant"
                    className={s.radio}
                  />
                </label>
            </div>
          ))}
          </>
          }
      </div> 
        
        <Input
          placeholder="Введите текст"
          valueLabel="Примечание"
          value={formik.values.note}
          onChange={formik.handleChange}
          width="600px"
          name="note"
        />

        {formik.values.age_groups.map((el, index)=>(
        <div className={s.age}>
          <div>
            <Input
              placeholder="С"
              width="285px"
              value={el.min_age}
              valueLabel="Возрастная категория"
              onChange={formik.handleChange}
              name="min_age"
            />

            <Input
              placeholder="По"
              valueLabel=""
              width="285px"
              value={el.max_age}
              onChange={formik.handleChange}
              name="max_age"
            />
            
            {index<=0? <span className={s.age_span} onClick={plus}></span>: <img src={minus}className={s.age_span__minus} onClick={()=>minusFunc(index)} />}
        </div>
        </div>
        ))}
        <Button
          text="СОЗДАТЬ"
          disabled={
            !(
              formik.values.name &&
              formik.values.finish_datetime &&
              formik.values.start_datetime&&
              formik.values.place &&
              formik.values.lead_judge &&
              formik.values.assistant &&
              formik.values.age_groupe.forEach(el=>{return el.max_age}) &&
              formik.values.age_groupe.forEach(el=>{return el.min_age}) &&
              formik.values.note
            )
          }
          width="600px"
          type="submit"
        />
      </form>
      {openSuccessModal && <SuccessModal open={openSuccessModal} handleClose={handleCloseSuccessModal} title="Вы успешно создали мероприятие!"/>}
    </div>
  );
};
