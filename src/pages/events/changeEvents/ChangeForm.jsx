import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import BackButton from "../../../components/arrowButton/BackButton";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import SuccessModal from "../../../components/modals/SuccessModal";
import s from "./ChangeEvents.module.scss";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { editEvent } from "../../../redux/slices/eventSlice";
import { getJudgeUser, getSecretaryUser } from "../../../redux/slices/userSlice";
import { useSelector } from "react-redux/es/exports";
import ss from '../../register/Registr.module.scss'

export const ChangeForm = ({
  onClick,
  name,
  start_datetime,
  finish_datetime,
  place,
  lead_judge,
  assistant,
  note,
  age_groupe,
  id,
  assistantId,
  lead_judgeId
}) => {
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const handleOpenSuccessModal = () => setOpenSuccessModal(true);
  const handleCloseSuccessModal = () => setOpenSuccessModal(false);

  const dispatch = useDispatch()

  
  const [state, setState] = useState({
    min_age: '',
    max_age: '',
    name: "name",
  })
  const judgeUser = useSelector(state=>state.user.userJudge)
  const secretaryUser = useSelector(state=>state.user.userSecretary)
  const status = useSelector(state=>state.event.status)
  // console.log(age_groupe)
  const plus =()=>{
    setState(formik.values.age_groupe.unshift(state))
  }

  useEffect(()=>{
    dispatch(getJudgeUser())
    dispatch(getSecretaryUser())
  },[])

  const [judge, setJudje] = useState(false)
  const [nameJudge, setNameJudge] = useState(lead_judge)
  const [judgeId, setJudgeId] = useState(lead_judgeId)
  const clickJudge = () =>{
    setJudje(!judge)
  }
  const nameJudgeClick = (name, id) =>{
    setNameJudge(name)
    clickJudge()
    setJudgeId(id)
  }

  const [secretary, setSecretary] = useState(false)
  const [nameSecretary, setNameSecretary] = useState(assistant)
  const [secretaryId, setSecretaryId] = useState(assistantId)
  const clickSecretary = () =>{
    setSecretary(!secretary)
  }
  const nameSecretaryClick = (name, id) =>{
    setNameSecretary(name)
    clickSecretary()
    setSecretaryId(id)
  }


  const formik = useFormik({
    initialValues: {
      name,
      start_datetime,
      finish_datetime,
      place,
      lead_judgeId:judgeId,
      assistantId:secretaryId,
      note,
      age_groupe
    },
    onSubmit: (values) => {
      const data = {values, id, handleOpenSuccessModal}
      dispatch(editEvent(data))
      onClick()
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={s.cont}>
      <BackButton onClick={onClick} />

      <p style={{ fontSize: "30px", marginBottom: "40px" }}>
        Информация о мероприятии
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          valueLabel="Наименование мероприятия"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          width="600px"
        />
        <Input
          valueLabel="Введите дату начала"
          value={formik.values.start_datetime}
          onChange={formik.handleChange}
          name="date"
          width="600px"
        />
         <Input
          valueLabel="Введите дату конца"
          value={formik.values.finish_datetime}
          onChange={formik.handleChange}
          name="date"
          width="600px"
        />
        <Input
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
          valueLabel="Примечание"
          value={formik.values.note}
          onChange={formik.handleChange}
          width="600px"
          name="note"
          placeholder="Пусто"
        />
      {formik.values.age_groupe.map((el,index)=>(
        <div className={s.age} key={index}>
          <div>
            <Input
              width="285px"
              valueLabel="Возрастная категория"
              value={el.min_age}
              // value={formik.values.age_groupe.forEach(el=>{return el.min_age})}
              onChange={formik.handleChange}
              name="agePre"
            />

            <Input
              valueLabel=""
              width="285px"
              value={el.max_age}
              // value={formik.values.age_groupe.forEach(el=>{return el.max_age})}
              onChange={formik.handleChange}
              name="ageAfter"
            />
            <span className={s.age_span} onClick={plus}></span>
          </div>
        </div>
      ))}
        <Button width="600px" text="СОХРАНИТЬ" type="submit" />
      </form>
      {openSuccessModal && (
        <SuccessModal
          open={openSuccessModal}
          handleClose={handleCloseSuccessModal}
          title="Вы успешно отредактировали данные о мероприятии!"
        />
      )}
    </div>
  );
};
