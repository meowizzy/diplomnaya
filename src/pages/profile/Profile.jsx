import React, { useState } from "react";
import Button from "../../components/button/Button";
import s from "./Profile.module.scss";
import { useFormik } from "formik";
import Input from "../../components/input/Input";

export const Profile = () => {
  const formik = useFormik({
    initialValues: {
      name: "Кот",
      surname: "Леопольд",
      birthday: "20.20.1995г.",
      phone: "+996 000 123 456",
      email: "Admin111@gmail.com",
      password: "******",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [state, setState] = useState(false)

  const toggle = ()=>{
    setState(!state)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <p className={s.first_p}>Мой профиль</p>
        {state === false ? (
          <Button text="ИЗМЕНИТЬ ДАННЫЕ" margin="0 0" onClick={toggle} />
        ) : (
          <></>
        )}
      </div>

      <div className={s.cont}>
        <p>Личные данные</p>
        <form onSubmit={formik.handleSubmit}>
          <Input
            valueLabel="Имя"
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
            width="600px"
          />
          <Input
            valueLabel="Фамилия"
            value={formik.values.surname}
            onChange={formik.handleChange}
            name="surname"
            width="600px"
          />
          <Input
            valueLabel="Дата рождения"
            value={formik.values.birthday}
            onChange={formik.handleChange}
            width="600px"
            name="birthday"
          />
          <Input
            valueLabel="Номер телефона"
            value={formik.values.phone}
            onChange={formik.handleChange}
            width="600px"
            name="phone"
          />
          <Input
            valueLabel="Почта"
            value={formik.values.email}
            onChange={formik.handleChange}
            width="600px"
            name="email"
            type="email"
          />
          <Input
            valueLabel="Пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
            width="600px"
            type="password"
            name="password"
            margin="0 0 32px"
          />

          {state === true ? (
            <Button
              margin="106px 0 0"
              width="600px"
              text="СОХРАНИТЬ"
              onClick={toggle}
            />
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
};
