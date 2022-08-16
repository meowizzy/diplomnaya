import { useFormik } from 'formik';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import BackButton from '../../../components/arrowButton/BackButton';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import ss from './RequestToRegistr.module.scss'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { editUser } from '../../../redux/slices/userSlice';


export const RequestUserInfo = () => {

  const dispatch = useDispatch()
  
  const user = useSelector(state=>state.user.userId)
  // const status = useSelector(state=>state.user.status)
  console.log(user)
  const [active, setActive] = useState(user)
  const onChange = (value) => {
    setActive({...active, is_active:value})
    console.log(active)
  }

  useEffect(()=>{
    setActive(active)
  },[active])

    const formik = useFormik({
      initialValues: {
        name: user.name,
        surname: user.surname,
        position: user.is_judge
          ? "Судья"
          : user.is_assistant
          ? "Секретарь"
          : "Тренер",
        phone: user.number,
        email: user.email,
        city: user.address,
        club: "Золотой дракон",
        is_active:true
      },
      enableReinitialize:true,
      onSubmit: (values) => {
        const id = user.id
        const data = {values, id}
        dispatch(editUser(data))
        alert(JSON.stringify(values, null, 2));
      },
    });
     
      return (
        <>
            <div className={ss.info}>
           <BackButton to="/main/users/requestToRegistr"/>
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
                  readOnly
                />
                <Input
                  valueLabel="Фамилия"
                  value={formik.values.surname}
                  onChange={formik.handleChange}
                  name="surname"
                  readOnly
                  width="600px"
                />
                <Input
                  valueLabel="Должность"
                  value={formik.values.position}
                  onChange={formik.handleChange}
                  width="600px"
                  readOnly
                  name="position"
                />
                <Input
                  valueLabel="Номер телефона"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  width="600px"
                  readOnly
                  name="phone"
                />
                <Input
                  valueLabel="Электронная почта"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  width="600px"
                  readOnly
                  name="email"
                  type="email"
                />
                <Input
                  valueLabel="Страна, город"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  width="600px"
                  readOnly
                  name="city"
                />
                <Input
                  valueLabel="Клуб"
                  value={formik.values.club}
                  onChange={formik.handleChange}
                  width="600px"
                  readOnly
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
