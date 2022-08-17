import { useFormik } from "formik";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { useSelector } from "react-redux/es/exports";
import { postRegister, postUserClub } from "../../redux/slices/registerSlice";
import s from "./Registr.module.scss";
import { getClubs } from "../../redux/slices/clubSlice";

export const Registr = () => {
  const [roles, setRoles] = useState(true)
  const clickRoles = () =>{
    setRoles(!roles)
  }
  const clickAdmin = () => {
    setRoles(!roles)
    formik.setFieldValue("role", "ADMIN")
  }
  const clickTrainer = () => {
    setRoles(!roles)
    formik.setFieldValue("role", "TRAINER")
  }

  const [club, setClub] = useState(true)
  const clickClub = () =>{
    setClub(!club)
  }
  const [pass, setPass] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getClubs())
  },[])

  const clubs = useSelector(state=>state.clubs.clubs)
  const err = useSelector(state=>state.register);
  const userId = useSelector(state=>state.register)

  // console.log(userId)

  const [clubForm, setClubForm] = useState({
    user:userId.userId.id,
    club:""
  })
  const [clubName, setClubName] = useState("")
  const onChange =(value, id)=>{
    setClubForm({...clubForm, club:id})
    setClubName(value)
  }

  const setUserId = () => {
    if(userId.status==="resolved"){
    setClubForm({...clubForm, user:userId.userId.id})
    dispatch(postUserClub(clubForm))}
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      number: "+996",
      password: "",
      secondPassword: "",
      city: "",
      role:"",
      referral_code:"",
    },
    
    onSubmit: (values) => {
      console.log(values)
      if(values.secondPassword===values.password){
        let data = {values, navigate, setUserId}
        dispatch(postRegister(data))
        setPass(false)
      }else{
        setPass(true)
      }
    },
  });

  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const [secondOpen, setSecondOpen] = useState(false);
  const foggle = () => {
    setSecondOpen(!secondOpen);
  };


  return (
    <div className={s.cont}>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <p
          style={{
            fontSize: "26px",
            fontWeight: "700",
            textAlign: "center",
            margin: "60px 0px 50px",
          }}
        >
          Регистрация
        </p>

        <Input
          placeholder="Введите имя"
          valueLabel="Имя"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
        />
        <Input
          placeholder="Введите фамилию"
          valueLabel="Фамилия"
          value={formik.values.surname}
          onChange={formik.handleChange}
          name="surname"
        />
        <div style={{ position: "relative" }}>
          <>
            <Input
              placeholder="Выберите должность"
              valueLabel="Должность"
              value={
                formik.values.role === "TRAINER"
                  ? "Тренер"
                  : formik.values.role === "ADMIN"
                  ? "Админ"
                  : ""
              }
              // onChange={formik.handleChange}
              name="role"
              readOnly
            />
            <div className={s.list_img} onClick={clickRoles}></div>
          </>
          <>
            {roles === false && (
              <div className={s.list}>
                <label className={s.label}>
                  {formik.values.role === "ADMIN" ? (
                    <p
                      onClick={clickAdmin}
                      style={{ backgroundColor: "#F3F3FF" }}
                    >
                      Админ
                    </p>
                  ) : (
                    <p onClick={clickAdmin}>Админ</p>
                  )}
                </label>
                <label className={s.label}>
                  {formik.values.role === "TRAINER" ? (
                    <p
                      onClick={clickTrainer}
                      style={{ backgroundColor: "#F3F3FF" }}
                    >
                      Тренер
                    </p>
                  ) : (
                    <p onClick={clickTrainer}>Тренер</p>
                  )}
                </label>
              </div>
            )}
          </>
        </div>
        <Input
          placeholder="Введите почту"
          valueLabel="Введите почту"
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          type="email"
        />
        <Input
          placeholder="+996"
          valueLabel="Номер"
          value={formik.values.number}
          onChange={formik.handleChange}
          name="number"
        />
        <div style={{ position: "relative" }}>
          <Input
            placeholder="******"
            valueLabel="Пароль"
            value={formik.values.password}
            type={open === false ? "password" : "text"}
            onChange={formik.handleChange}
            name="password"
          />
          {open === false ? (
            <div
              onClick={toggle}
              className={
                s.close_eye
              }
            />
          ) : (
            <div
              onClick={toggle}
              className={
                s.open_eye
              }
            />
          )}
        </div>
        <div style={{ position: "relative" }}>
          <Input
            placeholder="******"
            valueLabel="Подтвердить пароль"
            value={formik.values.secondPassword}
            onChange={formik.handleChange}
            type={secondOpen === false ? "password" : "text"}
            name="secondPassword"
          />
          {secondOpen === false ? (
            <div onClick={foggle} className={s.close_eye} />
          ) : (
            <div onClick={foggle} className={s.open_eye} />
          )}
        </div>
        {formik.values.role==="TRAINER"&&
        <div style={{ position: "relative" }}>
          <>
            <Input
              placeholder="Название клуба"
              valueLabel="Выберите клуб"
              value={clubName}
              name="club"
            />
            <div className={s.list_img} onClick={clickClub}></div>
          </>
          {club === false && (
            <div className={s.list}>
              {clubs.map((el,index)=>(
              <label className={s.label} key={index}>
                <p onClick={()=>onChange(el.name, el.id)}>{el.name}</p>
                {/* <input
                  type="radio"
                  value="Золотой дракон"
                  onChange={formik.handleChange}
                  name="club"
                  className={s.radio}
                /> */}
              </label>
              ))}
            </div>
          )}
        </div>
        }
        <Input
          placeholder="Введите страну и город"
          valueLabel="Страна, город"
          value={formik.values.city}
          onChange={formik.handleChange}
          name="city"
        />
        {err.status === "rejected" && (
          <p className={s.err}>
            Такая почта или номер телефона уже существуют...
          </p>
        )}
        {pass === true && <p className={s.err}>Пароли не похожи...</p>}
        {/* <div style={{margin:"50px 0px 60px"}}> */}
        <Button
          text="ЗАРЕГИСТРИРОВАТЬСЯ"
          // disabled={
          //   !(
          //     formik.values.email &&
          //     formik.values.password &&
          //     formik.values.name &&
          //     formik.values.surname &&
          //     formik.values.number &&
          //     formik.values.city &&
          //     formik.values.secondPassword
          //   )
          // }
          type="submit"
        />
        {/* </div> */}
      </form>
    </div>
  );
};
