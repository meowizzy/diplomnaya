import React, { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import s from "./Profile.module.scss";
import { useFormik } from "formik";
import Input from "../../components/input/Input";
import { close_eye, open_eye } from "../../images";
import { useDispatch, useSelector } from "react-redux";
import { editUser, getUserForProfilePage } from "../../redux/slices/userSlice";
import SuccessModal from "../../components/modals/SuccessModal";

export const Profile = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getUserForProfilePage())
  },[])
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const handleOpenSuccessModal = () => setOpenSuccessModal(true);
  const handleCloseSuccessModal = () => setOpenSuccessModal(false);
  const user = useSelector(state=>state.user.user)
  // const test = {dsa:"dsa"}
  console.log(user)
  // const check = {
  //     name:"" + user.name,
  //     surname: user.surname,
  //     birthday: user.name,
  //     number: user.number,
  //     email: user.email,
  //     password: user.passwrod,
  // }
  // console.log(check)
  const formik = useFormik({
    initialValues: {
      name:"" + user.name,
      surname: user.surname,
      birthday: user.name,
      number: user.number,
      email: user.email,
      password: user.passwrod,
  },
  enableReinitialize:true,
    onSubmit: (values) => {
      const id = user.id 
      const data = {values, id, handleOpenSuccessModal}
      dispatch(editUser(data))
      // alert(JSON.stringify(values, null, 2));
    },
  });

  const [state, setState] = useState(false)

  const toggle = ()=>{
    setState(!state)
  }

  const [eye, setEye] = useState(false)

  const foggle = () =>{
    setEye(!eye)
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
            type="text"
            width="600px"
          />
          <Input
            valueLabel="Фамилия"
            value={formik.values.surname}
            type="text"
            onChange={formik.handleChange}
            name="surname"
            width="600px"
          />
          {/* <Input
            valueLabel="Дата рождения"
            value={formik.values.birthday}
            onChange={formik.handleChange}
            type="text"
            width="600px"
            name="birthday"
          /> */}
          <Input
            // type="number"
            valueLabel="Номер телефона"
            value={formik.values.number}
            onChange={formik.handleChange}
            width="600px"
            name="number"
          />
          <Input
            valueLabel="Почта"
            value={formik.values.email}
            onChange={formik.handleChange}
            width="600px"
            name="email"
            type="email"
          />
          <div className="relative">
          <Input
            valueLabel="Пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
            width="600px"
            type={eye===true?"text":"password"}
            name="password"
            margin="0 0 32px"
          />
          <img src={eye===true?open_eye:close_eye} onClick={foggle} className="pass"/>
          </div>
          {state === true ? (
            <Button
              margin="106px 0 0"
              width="600px"
              text="СОХРАНИТЬ"
              // onClick={toggle}
              type="submit"
            />
          ) : (
            <></>
          )}
        </form>
      </div>
      {openSuccessModal && (
        <SuccessModal
          open={openSuccessModal}
          handleClose={handleCloseSuccessModal}
          title="Вы успешно отредактировали личные данные!"
        />
      )}
    </div>
  );
};
