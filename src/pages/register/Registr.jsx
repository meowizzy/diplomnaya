import { useFormik } from "formik";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { useSelector } from "react-redux/es/exports";
import { postRegister } from "../../redux/slices/registerSlice";
import s from "./Registr.module.scss";

export const Registr = () => {
  const [roles, setRoles] = useState(false)
  const clickRoles = () =>{
    setRoles(!roles)
  }
  const [role, setRole] = useState("")
  const [roleName, setRoleName] = useState('')
  const clickAdmin = () => {
    setRole('Админ')
    setRoles(!roles)
    setRoleName("ADMIN")
  }
  // console.log(roleName)
  const clickTrainer = () => {
    setRole('Тренер')
    setRoles(!roles)
    setRoleName("TRAINER")
  }
  console.log(roleName)

  const [club, setClub] = useState(false)
  const clickClub = () =>{
    setClub(!club)
  }
  const [pass,setPass] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const err = useSelector(state=>state.register);
  // console.log(err)



  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      number: "+996",
      password: "",
      secondPassword: "",
      city: "",
      role:roleName,
      referral_code:"",
    },
    onSubmit: (values) => {
      console.log(values)
      if(values.secondPassword===values.password){
        let data = {values, navigate}
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
        <div style={{ position: "relative" }} >
          {roles === false ? (
            <>
              <Input
                placeholder="Выберите должность"
                valueLabel="Должность"
                value={role}
                // onChange={formik.handleChange}
                name="role"
              />
              <div className={s.list_img} onClick={clickRoles}></div>
            </>
          ) : (
            <>
              <Input
                placeholder="Выберите должность"
                valueLabel="Должность"
                value={role}
                name="role"
                margin="0 0 4px"
              />
              <span className={s.list_img} onClick={clickRoles}></span>
              <div className={s.list}>
                <label className={s.label}>
                  {role === "Админ" ? (
                    <p onClick={clickAdmin}style={{ backgroundColor: "#F3F3FF" }}>
                      Админ
                    </p>
                  ) : (
                    <p onClick={clickAdmin}>
                      Админ
                    </p>
                  )}
                  {/* <input
                    type="radio"
                    value="ADMIN"
                    // onChange={formik.handleChange}
                    // name="role"
                    className={s.radio}
                  /> */}
                </label>
                <label className={s.label}>
                {role === "Тренер" ? (
                    <p onClick={clickTrainer}
                       style={{ backgroundColor: "#F3F3FF" }}>
                       Тренер
                    </p>
                  ) : (
                    <p onClick={clickTrainer}>
                      Тренер
                    </p>
                  )}
                  {/* <input
                    type="radio"
                    value="TRAINER"
                    // onChange={formik.handleChange}
                    // name="role"
                    className={s.radio}
                  /> */}
                </label>
              </div>
            </>
          )}
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
                // fail.res.message ? s.red_close__eye :
              }
            />
          ) : (
            <div
              onClick={toggle}
              className={
                s.open_eye
                // fail.res.message ? s.red_open__eye :
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
            <div
              onClick={foggle}
              className={
                s.close_eye
                // fail.res.message ? s.red_close__eye :
              }
            />
          ) : (
            <div
              onClick={foggle}
              className={
                s.open_eye
                // fail.res.message ? s.red_open__eye :
              }
            />
          )}
        </div>

        {/* <div style={{ position: "relative" }}>
          {club === false ? (
            <>
              <Input
                placeholder="Название клуба"
                valueLabel="Выберите клуб"
                value={formik.values.club}
                name="club"
              />
              <div className={s.list_img} onClick={clickClub}></div>
            </>
          ) : (
            <>
              <Input
                placeholder="Название клуба"
                valueLabel="Выберите клуб"
                value={formik.values.club}
                name="club"
                margin="0 0 4px"
              />
              <span className={s.list_img} onClick={clickClub}></span>
              <div className={s.list}>
                <label className={s.label}>
                  <p onClick={clickAdmin}>Золотой дракон</p>
                  <input
                    type="radio"
                    value="Золотой дракон"
                    onChange={formik.handleChange}
                    name="club"
                    className={s.radio}
                  />
                </label>
                <label className={s.label}>
                  <p onClick={clickTrainer}>Панда</p>
                  <input
                    type="radio"
                    value="Панда"
                    onChange={formik.handleChange}
                    name="club"
                    className={s.radio}
                  />
                </label>
              </div>
            </>
          )}
        </div> */}
        <Input
          placeholder="Введите страну и город"
          valueLabel="Страна, город"
          value={formik.values.city}
          onChange={formik.handleChange}
          name="city"
        />
       {err.status==="rejected"&&<p className={s.err}>Такая почта или номер телефона уже существуют...</p>} 
       {pass===true&&<p className={s.err}>Пароли не похожи...</p>}
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
          //     // formik.values.secondPassword===formik.values.password&&
          //     // formik.values.club &&
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