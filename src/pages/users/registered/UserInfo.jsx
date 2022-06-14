import { useFormik } from 'formik'
import React from 'react'
import BackButton from '../../../components/arrowButton/BackButton'
import Input from '../../../components/input/Input'
import { ThreeDot } from '../../../components/threeDot/ThreeDot'
import s from './Registered.module.scss'
export const UserInfo = ({onClick}) => {
    const formik = useFormik({
        initialValues: {
          name: "Карина",
          surname: "Белоусова",
          position: "Тренер",
          phone: "+996 000 123 456",
          email: "Admin111@gmail.com",
          city: "Киргизия, Бишкек",
          club: "Золотой дракон",
          password: "******",
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <div className={s.info}>
        <BackButton onClick={onClick}/>
        <p style={{ fontSize: "22px", marginBottom: "30px" }}>
        Информация о пользователе
      </p>
      <ThreeDot/>
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
          valueLabel="Должность"
          value={formik.values.position}
          onChange={formik.handleChange}
          width="600px"
          name="position"
        />
        <Input
          valueLabel="Номер телефона"
          value={formik.values.phone}
          onChange={formik.handleChange}
          width="600px"
          name="phone"
        />
        <Input
          valueLabel="Электронная почта"
          value={formik.values.email}
          onChange={formik.handleChange}
          width="600px"
          name="email"
          type="email"
        />
        <Input
          valueLabel="Страна, город"
          value={formik.values.city}
          onChange={formik.handleChange}
          width="600px"
          name="city"
        />
        <Input
          valueLabel="Клуб"
          value={formik.values.club}
          onChange={formik.handleChange}
          width="600px"
          name="club"
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
        <label className={s.status}>
            <p>Статус</p>
            <input type="radio" className={s.input}/>
        </label>
        </form>
    </div>
  )
}
