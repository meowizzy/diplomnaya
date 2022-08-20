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

  const [judge, setJudje] = useState(true)
  const [nameJudge, setNameJudge] = useState('')
  const clickJudge = () =>{
    setJudje(!judge)
  }
  const nameJudgeClick = (name, id) =>{
    setNameJudge(name)
    clickJudge()
    formik.setFieldValue("lead_judge", id)
  }

  // console.log(judgeId)
  const [secretary, setSecretary] = useState(true)
  const [nameSecretary, setNameSecretary] = useState('')

  const clickSecretary = () =>{
    setSecretary(!secretary)
  }
  const nameSecretaryClick = (name, id) =>{
    setNameSecretary(name)
    clickSecretary()
    formik.setFieldValue("assistant", id)
  }

  // console.log(age_groups)
  
  const judgeUser = useSelector(state=>state.user.userJudge)
  const secretaryUser = useSelector(state=>state.user.userSecretary)
  const status = useSelector(state=>state.event.status)
  const navigate=useNavigate()
  console.log(secretaryUser)
  console.log(judgeUser)
  const [age_groups, setAge_groups] = useState([{
    min_age: '5',
    max_age: '9',
    name: "dsa",
  }])
  const formik = useFormik({
    initialValues: {
      name: "",
      finish_datetime: "",
      start_datetime:"",
      place: "",
      lead_judge:'',
      note: "",
      age_groups
    },
    onSubmit: (values) => {
      const data={values, handleOpenSuccessModal, navigate}
      dispatch(createEvent(data));
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
    <div className={s.cont}>
      <BackButton to="/main/events/allEvents" />

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
          padding="0 15px 0 20px"
          type="date"
        />
        <Input
          placeholder="2022-07-17T18:00:00+06:00"
          valueLabel="Введите дату конца"
          value={formik.values.finish_datetime}
          onChange={formik.handleChange}
          name="finish_datetime"
          width="600px"
          type="date"
          padding="0 15px 0 20px"
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
          <>
            <Input
              placeholder="Главный судья"
              valueLabel="Информация о мероприятии - главный судья"
              value={nameJudge}
              onChange={formik.handleChange}
              width="600px"
              readOnly
            />
            <div className={ss.list_img} onClick={clickJudge}></div>
          </>
          {judge === false && (
            <>
              {judgeUser.map((el, index) => (
                <div className={s.list}>
                  <label className={s.label} key={index}>
                    {nameJudge === el.name ? (
                      <p onClick={() => nameJudgeClick(el.name, el.id)}
                        style={{backgroundColor: "#F3F3FF",paddingLeft: "20px",}}>
                        {el.name}
                      </p>
                    ) : (
                      <p onClick={() => nameJudgeClick(el.name, el.id)}>
                        {el.name}
                      </p>
                    )}
                  </label>
                </div>
              ))}
            </>
          )}
        </div>

        <Input
          placeholder="Введите текст"
          valueLabel="Примечание"
          value={formik.values.note}
          onChange={formik.handleChange}
          width="600px"
          name="note"
        />

        {formik.values.age_groups.map((el, index) => (
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

              {index <= 0 ? (
                <span className={s.age_span} onClick={plus}></span>
              ) : (
                <img
                  src={minus}
                  className={s.age_span__minus}
                  onClick={() => minusFunc(index)}
                />
              )}
            </div>
          </div>
        ))}
        <Button
          text="СОЗДАТЬ"
          disabled={
            !(
              formik.values.name &&
              formik.values.finish_datetime &&
              formik.values.start_datetime &&
              formik.values.place &&
              formik.values.lead_judge &&
              formik.values.note
              // formik.values.age_groupe &&
            )
          }
          width="600px"
          type="submit"
        />
      </form>
      {openSuccessModal && (
        <SuccessModal
          open={openSuccessModal}
          handleClose={handleCloseSuccessModal}
          title="Вы успешно создали мероприятие!"
        />
      )}
    </div>
  );
};
