import { useFormik } from 'formik';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import BackButton from '../../../components/arrowButton/BackButton';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import s from '../registered/Registered.module.scss'
import ss from './RequestToRegistr.module.scss'

export const RequestUserInfo = () => {
    const formik = useFormik({
        initialValues: {
          name: "Карина",
          surname: "Белоусова",
          position: "Тренер",
          phone: "+996 000 123 456",
          email: "Admin111@gmail.com",
          city: "Киргизия, Бишкек",
          club: "Золотой дракон",
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
     
      return (
        <>
            <div className={ss.info}>
             <Link to="/main/users/requestToRegistr"><BackButton /></Link> 
              <p className={ss.text}>
                Информация о пользователе
              </p>          
 
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

                <p style={{marginTop:'30px'}}>Подтвердить запрос?</p>

                <Button width="210px" margin="0 30px 0 0" text="НЕТ" disabled/>
                <Button width="210px" text="ДА" margin="31px 0 0" type="submit"/>
              </form>
            </div>
        </>
      );
}
