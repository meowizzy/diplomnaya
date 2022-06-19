import { useFormik } from "formik";
import React, { useCallback, useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import s from "./Registr.module.scss";

export const Registr = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      position: "",
      email: "",
      number: "",
      password: "",
      secondPassword: "",
      club: "",
      city: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
            fontSize: "32px",
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
          valueLabel="Фамилие"
          value={formik.values.surname}
          onChange={formik.handleChange}
          name="surname"
        />
        <Input
          placeholder="Введите должность"
          valueLabel="Должность"
          value={formik.values.position}
          onChange={formik.handleChange}
          name="position"
        />
        <Input
          placeholder="Введите почту"
          valueLabel="Почта"
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
            placeholder="Введите пароль"
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
            placeholder="Введите пароль"
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
        <Input
          placeholder="Название клуба"
          valueLabel="Клуб"
          value={formik.values.club}
          onChange={formik.handleChange}
          name="club"
        />
        <Input
          placeholder="Введите страну и город"
          valueLabel="Страна"
          value={formik.values.city}
          onChange={formik.handleChange}
          name="city"
        />
        {/* <div style={{margin:"50px 0px 60px"}}> */}
        <Button
          text="ЗАРЕГИСТРИРОВАТЬСЯ"
          disabled={
            !(
              formik.values.email &&
              formik.values.password &&
              formik.values.name &&
              formik.values.surname &&
              formik.values.number &&
              formik.values.city &&
              formik.values.club &&
              formik.values.secondPassword
            )
          }
          type="submit"
        />
        {/* </div> */}
      </form>
    </div>
  );
};
