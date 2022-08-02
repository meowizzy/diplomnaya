import React, { useEffect, useState } from "react";
import Input from "../../../components/input/Input";
import { useFormik } from "formik";
import s from "./ChangeEvents.module.scss";
import Button from "../../../components/button/Button";
import BackButton from "../../../components/arrowButton/BackButton";
import { createEvent } from "../../../redux/slices/eventSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ss from '../../register/Registr.module.scss'
import { getJudgeUser, getSecretaryUser } from "../../../redux/slices/userSlice";

export const CreateEvents = ({ active, setActive }) => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getJudgeUser())
    dispatch(getSecretaryUser())
  },[])

  const [judge, setJudje] = useState(false)
  const clickJudge = () =>{
    setJudje(!judge)
  }

  const [nameJudge, setNameJudge] = useState('')

  const nameJudgeClick = (name, id) =>{
    setNameJudge(name)
    clickJudge()
    setJudgeId(id)
  }

  const [judgeId, setJudgeId] = useState("")
  console.log(judgeId)

  const [secretary, setSecretary] = useState(false)
  const clickSecretary = () =>{
    setSecretary(!secretary)
  }

  const [nameSecretary, setNameSecretary] = useState('')

  const nameSecretaryClick = (name) =>{
    setNameSecretary(name)
    clickSecretary()
  }

  const [secretaryId, setSecretaryId] = useState('')

  const [age_groups, setAge_groupe] = useState([{
    min_age: 2,
    max_age: 2,
    name: "dsa",
  }])

  const judgeUser = useSelector(state=>state.user.userJudge)
  const secretaryUser = useSelector(state=>state.user.userSecretary)

  console.log(secretaryUser)

  const formik = useFormik({
    initialValues: {
      name: "",
      finish_datetime: "",
      start_datetime:"",
      place: "",
      lead_judge: Number(judgeId),
      assistant: "",
      note: "",
      age_groups
    },
    onSubmit: (values) => {
      // dispatch(createEvent(values));
      alert(JSON.stringify(values, null, 2));
    },
  });

  const plus = () =>{
    setAge_groupe(...age_groups, )
  }
  return (
    <div className={active ? s.cont : s.unactive}>
      <BackButton onClick={() => setActive(false)} to="/main/events/allEvents"/>

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
          placeholder="Введите дату начала"
          valueLabel="Введите дату начала"
          value={formik.values.start_datetime}
          onChange={formik.handleChange}
          name="start_datetime"
          width="600px"
        />
         <Input
          placeholder="Введите дату конца"
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
            // onChange={formik.handleChange}
            width="600px"
            name="lead_judge"
            />
            <div className={ss.list_img} onClick={clickJudge}></div>
          </>
          :
          <>
          <Input
          placeholder="Главный судья"
          valueLabel="Информация о мероприятии - главный судья"
          value={nameJudge}
          // onChange={formik.handleChange}
          width="600px"
          name="lead_judge"
          />
          <span className={ss.list_img} onClick={clickJudge}></span>
          {judgeUser.map(el=>(
          <div className={s.list}>
                <label className={s.label}>
                  {judgeId === el.id ? (
                    <p onClick={()=>nameJudgeClick(el.name, el.id)} style={{ backgroundColor: "#F3F3FF" }}>
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
                    onChange={(e)=>setJudgeId(e.target.value)}
                    name="judge"
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
                    <p onClick={()=>nameSecretaryClick(el.name)} style={{ backgroundColor: "#F3F3FF" }}>
                      {el.name}
                    </p>
                  ) : (
                    <p onClick={()=>nameSecretaryClick(el.name)}>
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

        <div className={s.age}>
          <div>
            <Input
              placeholder="С"
              width="285px"
              valueLabel="Возрастная категория"
              value={formik.values.age_groups[0].min_age}
              // value={formik.values.age_groupe.forEach(el=>{return el.min_age})}
              onChange={formik.handleChange}
              name="age_groupe[0].min_age"
            />

            <Input
              placeholder="По"
              valueLabel=""
              width="285px"
              value={formik.values.age_groups[0].max_age}
              onChange={formik.handleChange}
              name="age_groupe[0].max_age"
            />
            <span className={s.age_span}></span>
          </div>
        </div>
        <Button
          text="СОЗДАТЬ"
          disabled={
            !(
              formik.values.name &&
              formik.values.finish_datetime &&
              formik.values.start_datetime&&
              formik.values.place &&
              // formik.values.lead_judge &&
              // formik.values.assistant &&
              // formik.values.age_groupe.forEach(el=>{return el.max_age}) &&
              // formik.values.age_groupe.forEach(el=>{return el.min_age}) &&
              formik.values.note
            )
          }
          width="600px"
          type="submit"
        />
      </form>
    </div>
  );
};
